export const setItem = (key: string, data: string) => {
  localStorage.setItem(key, data);
};

export const getItem = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const clear = () => {
  localStorage.clear();
};
