import { services } from '../domain/services.js';
import { runStatusPages } from './statusPagesService.js';

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

export const run = async function  () {
    await runStatusPages(statusPages)
}

