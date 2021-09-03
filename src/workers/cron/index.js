import { run } from '../../libraries/status/handleFacade.js';
import cron from 'node-cron';

cron.schedule('* * * * *', () => {
    console.log('Run Crawler')
    run()
});
