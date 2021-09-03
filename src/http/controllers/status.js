import {getAllServices as getAll} from '../../services/statusService.js';

export const getAllServices = async (req, res, next) => {
    res.contentType = 'json';
    res.send(await getAll());

    next();
}
