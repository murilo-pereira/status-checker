import sequelize from '../models/base.js';

import {logServiceModel} from '../models/logService.js';

const logService = logServiceModel(sequelize)

export const createLog = async (log) => {
    return logService.create(log).then((data) => {
        return data;
    }).catch((err) => {
        console.log(err);

        return [];
    });
}

export const getPaginateLogs = async (serviceName, limit, offset) => {
    return logService.findAll({
        where: {
            mnemonic: serviceName
        },
        offset: offset,
        limit: limit,
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(function (data) {
        return data;
    }).catch((err) => {
        console.log(err);

        return [];
    });
}
