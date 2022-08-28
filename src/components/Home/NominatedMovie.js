import { Fragment } from 'react'
import { useDispatch } from 'react-redux'

import {
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  ListItemAvatar,
  Avatar
} from '@mui/material'

import {
  DeleteOutline as DeleteOutlineIcon
} from '@mui/icons-material'

import { remove as removeFromNominates } from '../../store/nominates/nominatesSlice'

export default function NominatedMovie ({movie, ...props}) {
  const dispatch = useDispatch()

  return (
    <ListItem
      secondaryAction={
        <IconButton
          aria-label="delete"
          onClick={() => (dispatch(removeFromNominates(movie)))}
        >
          <DeleteOutlineIcon />
        </IconButton>
      }
      role='nominated'
      {...props}
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
  )
}