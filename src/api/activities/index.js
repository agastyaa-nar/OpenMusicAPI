const ActivitiesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'activities',
  version: '1.0.0',
  register: async (server, { service, playlistsService }) => {
    const activitiesHandler = new ActivitiesHandler(service, playlistsService);
    server.route(routes(activitiesHandler));
  },
};
