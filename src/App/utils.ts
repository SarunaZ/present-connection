/**
 * Function for calling apis
 * 
 * @param url 
 * @returns Object
 */
export const getData = async (url: string, options?: RequestInit) => {
  const response = await fetch(url, options);
  return await response.json();
}