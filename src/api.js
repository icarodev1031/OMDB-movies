const apikey = 'f974bfaf'
const API_ENDPOINT = 'http://www.omdbapi.com'

export async function fetchMovies (params) {
 
  params.apikey = apikey
  const url = `${API_ENDPOINT}/?${Object.keys(params).map(key=>`${key}=${params[key]}`).join('&')}`
  const resp = await fetch(url)
  if(resp.ok) {
    const res = await resp.json()
    
    if (res.Response === 'True') {
      delete res.Response
      return res
    }
    throw res.Error
  }
  throw new Error('SERVER_ERR')
}
