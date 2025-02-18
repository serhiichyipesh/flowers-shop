export const fetcher = async (url: string, options: RequestInit = {}) => {
  return fetch(url, {
    next: { revalidate: 3600 },
    ...options,
  });
};
