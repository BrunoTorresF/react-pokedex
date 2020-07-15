import { useState, useEffect } from 'react';

const useFetch = (initialUrl) => {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      try {
        const results = await fetch(url);
        const newData = await results.json();
        setData(newData);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return [{ isLoading, isError, data }, setUrl];
};

export default useFetch;
