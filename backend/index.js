import express from 'express';
import cors from 'cors';
import { getInstagramCount, getTwitterCount } from './lib/scraper';
import db from './lib/db';
import { uniqueCount } from './lib/utils';
import './lib/cron';
import aggregate from './lib/aggregate';

const app = express();
app.use(cors());

app.get('/scrape', async (req, res, next) => {
  console.log('Scraping!!');
  const [iCount, tCount] = await Promise.all([
    getInstagramCount(),
    getTwitterCount()
  ]);
  res.json({iCount, tCount});
});

app.get('/aggregate', async (req, res, next) => {
  // get the scrape data
  const { twitter, instagram } = db.value();
  // filter for only unique values
  const uniqueTwitter = uniqueCount(twitter);
  const uniqueInstagram = uniqueCount(instagram);
  // need to aggregate thiese values
  // respond with json
  res.json({ twitter: aggregate(twitter), instagram: aggregate(instagram) });
})

app.listen(2093, () => {
  console.log(`Example App running on port http://localhost:2093`);
});
