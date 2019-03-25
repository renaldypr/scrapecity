import axios from 'axios';
import cheerio from 'cheerio';


async function getHTML(url) {
  const { data: html } = await axios.get(url);
  return html;
}

async function getTwitterFollowers(html) {
  // load up cheerio
  const $ = cheerio.load(html);
  const span = $('[data-nav="followers"] .ProfileNav-value');
  return span.data('count');
}

async function getInstagramFollowers(html) {
  const $ = cheerio.load(html)
  const script = $('[type="application/ld+json"]').html();
  return JSON.parse(script).mainEntityofPage.interactionStatistic.userInteractionCount;
}

export { getHTML, getTwitterFollowers, getInstagramFollowers };