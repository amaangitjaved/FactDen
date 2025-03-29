import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function ClaimInput({ onSubmit }) {
  const [claim, setClaim] = useState('');

  const handleSubmit = () => {
    if (claim.trim()) {
      onSubmit(claim);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <TextField
        variant="outlined"
        placeholder="Enter a claim"
        value={claim}
        onChange={(e) => setClaim(e.target.value)}
        style={{ width: 500 }}
      />
      <br /><br />
      <Button variant="contained" onClick={handleSubmit}>
        Check Fact
      </Button>
    </div>
  );
}

export default ClaimInput;
