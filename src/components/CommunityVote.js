import React, { useState } from 'react';
import { Box, Typography, Button, Stack, LinearProgress } from '@mui/material';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

function CommunityVote() {
  const [votes, setVotes] = useState({ true: 12, false: 8 });
  const [userVote, setUserVote] = useState(null);

  const totalVotes = votes.true + votes.false;
  const truePercent = Math.round((votes.true / totalVotes) * 100);
  const falsePercent = 100 - truePercent;

  const handleVote = (type) => {
    if (userVote) return; // prevent double voting
    const newVotes = { ...votes };
    newVotes[type]++;
    setVotes(newVotes);
    setUserVote(type);
  };

  return (
    <Box mt={5} textAlign="center">
      <Typography variant="h6">🗳️ Community Vote</Typography>

      {!userVote ? (
        <Stack direction="row" spacing={3} justifyContent="center" mt={2}>
          <Button
            variant="contained"
            color="success"
            startIcon={<ThumbUpAltIcon />}
            onClick={() => handleVote('true')}
          >
            Vote True
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<ThumbDownAltIcon />}
            onClick={() => handleVote('false')}
          >
            Vote False
          </Button>
        </Stack>
      ) : (
        <Typography mt={2}>
          ✅ You voted: <strong>{userVote === 'true' ? 'True' : 'False'}</strong>
        </Typography>
      )}

      {/* Vote breakdown */}
      <Box mt={4} textAlign="left" maxWidth={500} mx="auto">
        <Typography gutterBottom>True - {truePercent}%</Typography>
        <LinearProgress
          variant="determinate"
          value={truePercent}
          sx={{ height: 10, borderRadius: 5, mb: 2 }}
          color="success"
        />

        <Typography gutterBottom>False - {falsePercent}%</Typography>
        <LinearProgress
          variant="determinate"
          value={falsePercent}
          sx={{ height: 10, borderRadius: 5 }}
          color="error"
        />
      </Box>
    </Box>
  );
}

export default CommunityVote;
