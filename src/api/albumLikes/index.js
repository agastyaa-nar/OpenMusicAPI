const AlbumLikesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'albumLikes',
  version: '1.0.0',
  register: async (server, { albumLikesService, albumsService }) => {
    const handler = new AlbumLikesHandler(albumLikesService, albumsService);
    server.route(routes(handler));
  },
};
