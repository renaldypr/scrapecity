export function uniqueCount(scrapes) {
  return scrapes.reduce((acc, scrape) => {
    // check if this one is already in the acc
    // if there is already one in the doc
    if (!acc.find(el => el.count === scrape.count)) {
      return [...acc, scrape]
    }
    return acc;
  }, []);
}