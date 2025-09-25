const autoBind = require('auto-bind');

class AlbumLikesHandler {
  constructor(albumLikesService, albumsService) {
    this._albumLikesService = albumLikesService;
    this._albumsService = albumsService;

    autoBind(this);
  }

  async postLikeHandler(request, h) {
    const { id: userId } = request.auth.credentials;
    const { id: albumId } = request.params;

    await this._albumsService.getAlbumById(albumId);
    await this._albumLikesService.addLike(userId, albumId);

    return h
      .response({
        status: 'success',
        message: 'Berhasil menyukai album',
      })
      .code(201);
  }

  async deleteLikeHandler(request, h) {
    const { id: userId } = request.auth.credentials;
    const { id: albumId } = request.params;

    await this._albumsService.getAlbumById(albumId);
    await this._albumLikesService.removeLike(userId, albumId);

    return h
      .response({
        status: 'success',
        message: 'Berhasil batal menyukai album',
      })
      .code(200);
  }

  async getLikesHandler(request, h) {
    const { id: albumId } = request.params;

    await this._albumsService.getAlbumById(albumId);
    const { likes, source } = await this._albumLikesService.getLikeCount(albumId);

    const response = h.response({
      status: 'success',
      data: { likes },
    }).code(200);

    if (source === 'cache') {
      response.header('X-Data-Source', 'cache');
    }

    return response;
  }
}

module.exports = AlbumLikesHandler;
