import {
  getHTML,
  getTwitterFollowers,
  getInstagramFollowers
} from './lib/scraper';

async function go() {
  const iPromise = getHTML('https://www.instagram.com/renaldyp/');
  const tPromise = getHTML('https://twitter.com/renaldyp');
  const [instagramHTML, twitterHTML] = await Promise.all([iPromise, tPromise]);
  const instagramCount = await getInstagramFollowers(instagramHTML);
  const twCount = await getTwitterFollowers(twitterHTML);
  console.log(
    `You have ${twCount} Twitter followers and ${instagramCount} Instagram followers`
  );
}

go();