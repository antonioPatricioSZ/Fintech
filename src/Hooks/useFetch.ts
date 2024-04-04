import { useEffect, useState } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useFetch<T>(url: RequestInfo, options?: RequestInit): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function getData() {
      setLoading(true);
      setData(null);
      try {
        const response = await fetch(url, {
          signal,
          ...options,
        });
        if (!response.ok) {
          throw new Error("Error: " + response.status);
        }
        const responseData = (await response.json()) as T;
        if (!signal.aborted) {
          setData(responseData);
        }
      } catch (error) {
        if (!signal.aborted && error instanceof Error) {
          setError(error.message);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    }
    getData();
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
