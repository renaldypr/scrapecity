import { useEffect, useState } from 'react';
import { ScrapeProvider } from './ScrapeContext';

// Custom Hook!
function useScrapes() {
  // Initial State inside our hook
  const [scrapes, setScrapes] = useState({
    twitter: [],
    instagram: []
  });
  // fetch function
  async function fetchScrapes() {
    const res = await fetch('http://localhost:2093/aggregate');
    const data = await res.json();
    setScrapes(data)
  }
  // didMount/didUpdate
  useEffect(() => {
    fetchScrapes();
  }, []);
  return { scrapes, fetchScrapes };
}

export default function Page({children}) {
  const hookInfo = useScrapes();
  return (
    <ScrapeProvider value={hookInfo}>
      <div className="page">{children}</div>
    </ScrapeProvider>
  );
}