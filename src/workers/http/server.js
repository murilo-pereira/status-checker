import restify from 'restify';
import routes from '../../http/routes.js';

const server = restify.createServer();

routes(server);

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
