import { useState, useEffect } from 'react';
import localforage from 'localforage';

const getCacheData = async (url) => {
  try {
    const cacheKeys = await localforage.keys();
    const isUrlInCache = cacheKeys.includes(url);
    if (isUrlInCache) {
      const cachedData = await localforage.getItem(url);
      return cachedData;
    }
  } catch (error) {
    console.error('error getting data', error);
    return null;
  }
  return null;
};

const storeNewCacheItem = async (url, data) => {
  try {
    await localforage.setItem(url, data);
  } catch (error) {
    console.error(error);
    return 'error setting item in localforage';
  }
};

const useFetch = (initialUrl) => {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = await getCacheData(url);
      setIsError(false);
      if (cachedData) {
        setData(cachedData);
      } else {
        try {
          const results = await fetch(url);
          const newData = await results.json();
          setData(newData);
          storeNewCacheItem(url, newData);
        } catch (error) {
          setIsError(true);
          console.error(error);
        }
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ isLoading, isError, data }, setUrl];
};

export default useFetch;
