import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  List,
  Typography,
  TablePagination
} from '@mui/material';

import SearchedMovie from '../../components/Home/SearchedMovie';

import { selectMovies } from '../../store/movies/movieSlice';

export default function SearchResult () {
  const movies = useSelector(selectMovies)
  const [searchParams, setSearchParams] = useSearchParams()
  
  const onPageChange = (p) => {
    searchParams.set('page', p)
    setSearchParams(searchParams)
  }
  
  return (
    <Card variant="outlined">
      <CardHeader title="Search results" />
      <CardContent>
        { movies.totalResults > 0
          ? (
            <List dense >
              {movies.data.map((movie, idx) => <SearchedMovie key={movie.imdbID} movie={movie} divider />)}
            </List>
          )
          : <Typography textAlign="center">No movies fetched</Typography>
        }
        <Box display="flex" justifyContent="flex-end" mr={2}>
          { movies.totalResults > 10 && (
            <TablePagination
              role="pagination"
              component="div"
              count={parseInt(movies.totalResults)}
              page={parseInt(searchParams.get('page')) || 0}
              onPageChange={(_, p)=>{onPageChange(p)}}
              rowsPerPageOptions={[]}
              rowsPerPage={10}
              showLastButton
              showFirstButton
            />
          )}
        </Box>
      </CardContent>
    </Card>
  )
}