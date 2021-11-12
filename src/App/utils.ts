/**
 * Function for calling apis
 *
 * @param url
 * @param options
 * @returns Object
 */
export const getData = async (url: string, options?: RequestInit) => {
  const response = await fetch(url, options);
  return await response.json();
}