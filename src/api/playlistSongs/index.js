const SongsService = require('../../services/SongsService');
const PlaylistSongsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'playlistSongs',
  version: '1.0.0',
  register: async (server, { service, playlistsService, songsService, activitiesService, validator }) => {
    const playlistSongsHandler = new PlaylistSongsHandler(
      service,
      playlistsService,
      songsService,
      activitiesService,
      validator,
    );
    server.route(routes(playlistSongsHandler));
  },
};
