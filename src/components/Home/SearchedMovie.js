import { Fragment, useState } from 'react'
import {
  useDispatch,
  useSelector,
} from 'react-redux'

import {
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Snackbar,
  ListItemAvatar,
  Avatar
} from '@mui/material'

import {
  ArrowForward as ArrowForwardIcon,
  Close as CloseIcon
} from '@mui/icons-material'

import { selectNominates, add as addToNominates } from '../../store/nominates/nominatesSlice'

export default function SearchResult ({movie, ...props}) {
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const dispatch = useDispatch()
  const nominates = useSelector(selectNominates)

  const isNominated = (movie) => {
    return nominates.map(it=>it.imdbID).includes(movie.imdbID)
  }

  const onNominateClick = () => {
    if (nominates.length < 5) {
      dispatch(addToNominates(movie))
    } else {
      setOpenSnackbar(true)
    }
  }

  return (
    <Fragment>
      <ListItem
        {...props}
        role="movie"
        secondaryAction={
          <IconButton
            onClick={onNominateClick}
            disabled={isNominated(movie)}
          >
            <ArrowForwardIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar variant="rounded" src={movie.Poster} />
        </ListItemAvatar>
        <ListItemText
          primaryTypographyProps={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}
          primary={movie.Title}
          secondaryTypographyProps={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}
          secondary={
            <Fragment>
              <Typography
                component="span"
                variant="body2"
                color="text.secondary"
              >
                Year : {movie.Year}, Poster : 
              </Typography>
              <Typography component="a" color="#080685" sx={{textDecoration: 'none'}} href={movie.Poster}>{movie.Poster}</Typography>
            </Fragment>
          }
        />
      </ListItem>
      <Snackbar
        anchorOrigin={{horizontal: 'center', vertical: 'top'}}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={()=>{setOpenSnackbar(false)}}
        message="Nomination list is full. Remove one from the nomination list."
        action={
          <Fragment>
            <IconButton
              aria-label="close"
              color="inherit"
              sx={{ p: 0.5 }}
              onClick={()=>{setOpenSnackbar(false)}}
            >
              <CloseIcon />
            </IconButton>
          </Fragment>
        }
      />
    </Fragment>
  )
}