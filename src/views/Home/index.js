
import {
  Grid,
  Box,
} from '@mui/material';
import {
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material'

import Layout from '../../components/Layout';
import SearchResult from './SearchResult';
import Filter from './Filter';
import Nominates from './Nominates';
import MoviesLoader from './MoviesLoader';

export default function Home() {
  return  (
    <Layout>
      <MoviesLoader>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Filter />
          </Grid>
          <Grid item md={12}>
            <Box display="flex">
              <Box sx={{width: 'calc(50% - 50px)'}}>
                <SearchResult />
              </Box>
              <Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ArrowForwardIcon />
              </Box>
              <Box sx={{width: 'calc(50% - 50px)'}}>
                <Nominates />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </MoviesLoader>
    </Layout>
  );
}
