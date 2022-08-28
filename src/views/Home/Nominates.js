import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import {
  Card,
  CardHeader,
  CardContent,
  List,
  Typography,
  Alert
} from '@mui/material';

import { selectNominates } from '../../store/nominates/nominatesSlice'
import NominatedMovie from '../../components/Home/NominatedMovie';

export default function Nominates () {
  const nominates = useSelector(selectNominates)
 
  return (
    <Card variant="outlined">
      <CardHeader title="Nominated" />
      <CardContent>
        { nominates.length > 0
          ? (
            <Fragment>
              <List dense>
                {nominates.map((movie, idx) => (
                  <NominatedMovie
                    divider
                    key={movie.imdbID}
                    movie={movie}
                  />
                ))}
              </List>
              
              { nominates.length >= 5
                ? <Alert severity="success">Nomination list is full!</Alert>
                : <Alert severity="info">{nominates.length} nominated movies</Alert>
              }
              

            </Fragment>
          ) : <Typography textAlign="center">No records found</Typography>
        }
        
        </CardContent>
    </Card>
  )
}