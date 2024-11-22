export function fetchApi(url: URL, config: RequestInit) {
  const baseURL = 'http://localhost:3000'

  return fetch(`${baseURL}${url}`, config)
}
