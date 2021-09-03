import {getAllServices} from './controllers/status.js'

const routes = (server) => {
    server.get('/status', getAllServices);
}

export default routes

