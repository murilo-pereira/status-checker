import {getAllServices, getLogsServices} from './controllers/status.js'

const routes = (server) => {
    server.get('/status', getAllServices);
    server.get('/history', getLogsServices);
}

export default routes

