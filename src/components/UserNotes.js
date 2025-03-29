import React, { useState } from 'react';
import {
    Box,
    Button,
    Collapse,
    TextField,
    Typography,
    Divider,
  } from '@mui/material';
  
import CommentIcon from '@mui/icons-material/Comment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function UserNotes() {
  const [expanded, setExpanded] = useState(false);
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    if (note.trim()) {
      setNotes((prev) => [...prev, note]);
      setNote('');
    }
  };

  return (
    <Box mt={3}>
      <Button
        variant="text"
        startIcon={<CommentIcon />}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Hide Comments' : 'Show Comments'}
        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Button>

      <Collapse in={expanded}>
        <Box mt={2}>
          <TextField
            label="Add a note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            fullWidth
            multiline
            maxRows={4}
            inputProps={{ maxLength: 280 }}
          />
          <Button
            variant="contained"
            size="small"
            sx={{ mt: 1 }}
            onClick={handleAddNote}
          >
            Post Note
          </Button>
        </Box>

        {notes.length > 0 && (
          <Box mt={3}>
            <Divider sx={{ mb: 1 }} />
            <Typography variant="subtitle2" gutterBottom>
              Community Notes:
            </Typography>
            {notes.map((n, idx) => (
              <Box
                key={idx}
                p={2}
                mb={1}
                sx={{
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  boxShadow: 1,
                }}
              >
                <Typography variant="body2">{n}</Typography>
              </Box>
            ))}
          </Box>
        )}
      </Collapse>
    </Box>
  );
}

export default UserNotes;
