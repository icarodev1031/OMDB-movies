import * as React from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  Typography
} from '@mui/material';

export default function Layout({window, children}) {

  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            MODB Movies
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3}}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
