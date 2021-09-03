import { run } from '../../services/handleService.js';
import cron from 'node-cron';

cron.schedule('* * * * *', () => {
    console.log('Run Crawler')
    run();
});
