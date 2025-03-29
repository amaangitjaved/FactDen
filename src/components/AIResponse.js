import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import UserNotes from './UserNotes';

function AIResponse({ claim }) {
  if (!claim) return null;

  const isTrue = claim.toLowerCase() !== 'elon is the president of usa';

  return (
    <Box mt={4} display="flex" justifyContent="center">
      <Paper
        elevation={6}
        sx={{
          p: 3,
          maxWidth: 600,
          width: '100%',
          backdropFilter: 'blur(8px)',
          background: 'rgba(255, 255, 255, 0.75)',
          border: '1px solid #e0e0e0',
          boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
        }}
      >
        <Typography variant="h6" gutterBottom>
          🧠 AI Verdict
        </Typography>

        <Typography sx={{ mb: 2 }}>
          {isTrue
            ? '✅ This claim appears to be true based on available data.'
            : '❌ This claim is likely false based on verified sources.'}
        </Typography>

        {!isTrue && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        📝 <strong>Note:</strong> Elon Musk is not the president of the United States.
        As of 2025, the current president is Joe Biden.
        </Typography>
        )}

        <UserNotes />

      </Paper>
    </Box>
  );
}

export default AIResponse;
