import React, { useState, useMemo } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Typography,
  AppBar,
  Toolbar,
  Switch,
  Box,
} from '@mui/material';

import ClaimInput from './components/ClaimInput';
import AIResponse from './components/AIResponse';
import CommunityVote from './components/CommunityVote';

function App() {
  const [claim, setClaim] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
        ...(darkMode && {
          background: {
            default: '#121212',
            paper: '#1e1e1e',
          },
        }),
      },
    }), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: 'background.default',
          color: 'text.primary',
          minHeight: '100vh',
        }}
      >
        <AppBar position="sticky" color="default" elevation={1}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6">🧠 FactDen</Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="body2" mr={1}>
                {darkMode ? 'Dark' : 'Light'} Mode
              </Typography>
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            </Box>
          </Toolbar>
        </AppBar>

        <Container maxWidth="md">
          <Box sx={{ mt: 6 }}>
            <Typography variant="h3" align="center" gutterBottom>
              🔍 Check Any Claim
            </Typography>

            <Typography align="center" color="text.secondary" mb={4}>
              AI + Community Voting. Trust, but verify.
            </Typography>

            <ClaimInput onSubmit={setClaim} />
            <AIResponse claim={claim} />
            {claim && <CommunityVote />}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
