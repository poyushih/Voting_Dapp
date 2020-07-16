const routes = require('next-routes');

module.exports = routes()
    .add('/ballots/new', '/ballots/new')
    .add('/ballots/:address', '/ballots/show');
