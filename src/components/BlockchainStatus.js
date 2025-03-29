import React from 'react';

function BlockchainStatus({ vote }) {
  if (!vote) return null;

  return (
    <div style={{ marginTop: 30, textAlign: 'center' }}>
      <h4>✅ Vote recorded on blockchain.</h4>
      <p>Your vote: <strong>{vote}</strong></p>
    </div>
  );
}

export default BlockchainStatus;
