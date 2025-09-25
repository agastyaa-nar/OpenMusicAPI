const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');

class AlbumLikesService {
  constructor(cacheService) {
    this._pool = new Pool();
    this._cacheService = cacheService;
  }

  async verifyAlbum(albumId) {
    const query = {
      text: 'SELECT id FROM albums WHERE id = $1',
      values: [albumId],
    };

    const result = await this._pool.query(query);
    if (!result.rows.length) {
      throw new NotFoundError('Album tidak ditemukan');
    }
  }

  async addLike(userId, albumId) {
    const id = `like-${nanoid(16)}`;

    try {
      const query = {
        text: 'INSERT INTO user_album_likes (id, user_id, album_id) VALUES($1, $2, $3) RETURNING id',
        values: [id, userId, albumId],
      };

      await this._pool.query(query);
      await this._cacheService.delete(`likes:${albumId}`);
    } catch (error) {
      if (error.code === '23505') {
        throw new InvariantError('Anda sudah menyukai album ini');
      }
      throw error;
    }
  }

  async removeLike(userId, albumId) {
    const query = {
      text: 'DELETE FROM user_album_likes WHERE user_id = $1 AND album_id = $2 RETURNING id',
      values: [userId, albumId],
    };

    const result = await this._pool.query(query);
    if (!result.rows.length) {
      throw new NotFoundError('Anda belum menyukai album ini');
    }

    await this._cacheService.delete(`likes:${albumId}`);
  }

  async getLikeCount(albumId) {
    try {
      const result = await this._cacheService.get(`likes:${albumId}`);
      return { likes: Number(result), source: 'cache' };
    } catch (error) {
      const query = {
        text: 'SELECT COUNT(*) AS likes FROM user_album_likes WHERE album_id = $1',
        values: [albumId],
      };
      const result = await this._pool.query(query);
      const likes = Number(result.rows[0].likes);

      await this._cacheService.set(`likes:${albumId}`, likes);

      return { likes, source: 'db' };
    }
  }
}

module.exports = AlbumLikesService;
