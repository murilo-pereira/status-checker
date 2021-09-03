import {getAllServicesStatus} from '../repositories/statusServiceRepository.js';
import {servicesNames} from '../domain/servicesNames.js';

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
