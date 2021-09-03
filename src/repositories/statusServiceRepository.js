import sequelize from '../models/base.js';
import {statusServiceModel} from '../models/statusService.js';

const statusService = statusServiceModel(sequelize)

export const upsertStatus = async (values, mnemonic) => {
    return statusService
        .findOne({where: {mnemonic: mnemonic}})
        .then(function (obj) {
            if (obj) {
                return obj.update(values);
            }

            return statusService.create(values);
        })
}

export const getAllServicesStatus = async () => {
    return statusService.findAll({}).then((data) => {
        return data;
    }).catch((err) => {
        console.log(err);

        return [];
    });
}
