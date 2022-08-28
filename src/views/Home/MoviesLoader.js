import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { Mutex } from 'async-mutex'
import { fetchMoviesAsync, set as setMovies } from '../../store/movies/movieSlice'

let timeOut = null
const SEARCH_DELAY = 250  // Set some delay when fetching the remote data to save the remote server from receiving too many requests.
const mutex = new Mutex()

export default function MoviesLoader ({children}) {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  
  const loadMovies = useCallback(()=> {
    const searchTitle = searchParams.get('s')
    const page = parseInt(searchParams.get('page')) || 0
    if (!!searchTitle && searchTitle.length > 0) {
      // synchronize access to the timeOut variable
      mutex.runExclusive(() => {
        if (!!timeOut) {
          clearTimeout(timeOut)
        }
        timeOut = setTimeout(() => {
          try {
            dispatch(fetchMoviesAsync({s: searchTitle, page: page+1}))
          } catch (e) {
            console.log(e)
          }
        }, SEARCH_DELAY)
      })
      
    } else {
      dispatch(setMovies({totalResults: 0, data: []}))
    }
  }, [searchParams, dispatch])

  useEffect(() => {
    loadMovies()    
  }, [loadMovies])
  return children
}