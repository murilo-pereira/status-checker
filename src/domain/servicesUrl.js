import { services } from './services.js';

export const servicesUrl = {
    [services.AWS_S3_US_WEST_1]: 'https://status.aws.amazon.com/rss/s3-us-west-1.rss',
    [services.AWS_S3_EAST]: 'https://status.aws.amazon.com/rss/s3-us-standard.rss',
    [services.AWS_ROUTE_53]: 'https://status.aws.amazon.com/rss/route53.rss',
    [services.APTIBLE]: 'https://status.aptible.com',
    [services.BIT_BUCKET]: 'https://bitbucket.status.atlassian.com/',
    [services.CIRCLE_CI]: 'https://status.circleci.com',
    [services.DOCUMO]: 'https://status.documo.com/',
    [services.GOOGLE_WORKSPACE]: 'https://www.google.com/appsstatus/dashboard/',
    [services.GO_TO_MEETING]: 'https://status.gotomeeting.com/',
    [services.LOB]: 'https://lob.statuspage.io/',
    [services.LOG_DNA]: 'https://status.logdna.com/',
    [services.MAIL_GUN]: 'https://status.mailgun.com/',
    [services.PERIMETER_81]: 'https://status.perimeter81.com/',
    [services.TALK_DESK]: 'https://status.talkdesk.com/',
    [services.WAY_STAR]: 'https://www.waystar.com/',
}
