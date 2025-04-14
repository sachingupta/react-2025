/**
 * Throttle
Throttling limits the rate at which a function can be called. It ensures that a function is only executed once within 
a specified time interval, no matter how many times the event is triggered. If the function is called multiple times during that interval, 
only the first call is executed, and subsequent calls are ignored until the interval has elapsed. 
Use case:
Scroll event: When tracking a user's scroll position, throttling can limit the number of API calls made while scrolling, improving performance.
 */
import { useState, useEffect } from 'react';

function ScrollTracker() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [apiData, setApiData] = useState(null);
  const [isThrottled, setIsThrottled] = useState(false);

  const handleScroll = () => {
    if (!isThrottled) {
      setIsThrottled(true);
      setScrollPosition(window.scrollY);
      fetchData();
      setTimeout(() => {
        setIsThrottled(false);
      }, 200);
    }
  };

  const fetchData = () => {
    fetch(`https://api.example.com/data?position=${scrollPosition}`)
      .then(response => response.json())
      .then(data => setApiData(data));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  return (
    <div>
      <p>Scroll Position: {scrollPosition}</p>
      {apiData && <p>API Data: {apiData.value}</p>}
    </div>
  );
}
