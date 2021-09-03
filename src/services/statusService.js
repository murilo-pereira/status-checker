import {servicesNames} from '../domain/servicesNames.js';

import {getAllServicesStatus} from '../repositories/statusServiceRepository.js';
import {getPaginateLogs} from '../repositories/logServiceRepository.js';

export const getAllServices = async () => {
    let servicesProcessed = []

    const services = await getAllServicesStatus()

    services.forEach((service) => {
        const serviceData = {
            service: servicesNames[service.mnemonic],
            description: service.data.description,
            status: service.status,
            details: service.data.dump_page
        }

        servicesProcessed.push(serviceData)
    })

    return servicesProcessed
}

export const getLogsServices = async (serviceName, limit, offset) => {
    let servicesProcessed = []

    const services = await getPaginateLogs(serviceName, limit, offset)

    services.forEach((service) => {
        const serviceData = {
            service: servicesNames[service.mnemonic],
            description: service.data.description,
            status: service.status,
        }

        servicesProcessed.push(serviceData)
    })

    return servicesProcessed
}
