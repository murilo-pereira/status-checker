import {getAllServices as getAll, getLogsServices as getLogs} from '../../services/statusService.js';

export const getAllServices = async (req, res, next) => {
    res.contentType = 'json';
    res.send(await getAll());

    next();
}

export const getLogsServices = async (req, res, next) => {
    res.contentType = 'json';

    const {name, limit, offset} = req.query

    res.send(await getLogs(name, limit, offset));

    next();
}
