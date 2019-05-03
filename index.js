import express from 'express';
import {
  getInstagramCount,
  getTwitterCount
} from './lib/scraper';

const app = express();

app.get('/scrape', async (req, res, next) => {
  console.log('Scraping!');
  const [iCount, tCount] = await Promise.all([
    getInstagramCount(),
    getTwitterCount()
  ]);
  console.log(iCount, tCount);
  res.json({iCount, tCount});
});

app.listen(2093, deets =>
  console.log(deets)
  // console.log(`Example App running on port ${deets.PORT}`)
);
