import axios from 'axios';

import {servicesUrl} from '../domain/servicesUrl.js';
import {servicesStatus} from '../domain/servicesStatus.js';
import {services} from "../domain/services.js";

import {createLog} from '../repositories/logServiceRepository.js';
import {upsertStatus} from '../repositories/statusServiceRepository.js';

import {getObjectKeyByValue} from '../libraries/utils.js';

const statusPages = [
    services.APTIBLE,
    services.BIT_BUCKET,
    services.CIRCLE_CI,
    services.DOCUMO,
    services.GO_TO_MEETING,
    services.LOB,
    services.LOG_DNA,
    services.MAIL_GUN,
    services.TALK_DESK,
]

export const runStatusPages = async () => {
    let requests = []

    statusPages.forEach((value) => {
        requests.push(axios.get(servicesUrl[value]))
    })

    Promise.all(requests.map(p => p.catch(e => e)))
        .then((responses) => {
            responses.forEach((response) => {
                if (response.status === 200) {
                    handlePage(getObjectKeyByValue(servicesUrl, response.config.url), response.data, response.status)
                } else {
                    createLogError(getObjectKeyByValue(servicesUrl, response.config.url), response.data, response.status)
                }
            })
        })
        .catch((error) => {
            console.log(error)
        });
}

const handlePage = async (serviceName, data, httpStatus) => {
    let log = {
        mnemonic: serviceName,
        status: servicesStatus.NO_ISSUES
    }

    const statusDescription = data.split('<span class="status font-large">\n            ')[1].split('\n          </span>')[0]

    if (statusDescription !== 'All Systems Operational') {
        log.status = servicesStatus.DEGRADED
    }

    log.data = {
        description: statusDescription,
        http_status: httpStatus,
        dump_page: data
    }

    await createLog(log);
    await upsertStatus(log, serviceName)
}

const createLogError = async (serviceName, data, httpStatus) => {
    const logData = {
        http_status: httpStatus,
        dump_page: data
    }

    const logError = {
        mnemonic: serviceName,
        status: servicesStatus.STATUS_NOT_WORKING,
        data: logData
    }

    await createLog(logError);
    await upsertStatus(logError, serviceName)
}
