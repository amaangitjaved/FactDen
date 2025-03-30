const axios = require('axios');
const router = require('express').Router();

router.post('/', async (req, res) => {
  const { statement } = req.body;

  if (!statement) {
    return res.status(400).json({ error: "Missing 'statement' in request" });
  }

  try {
    const response = await axios.post(
      'https://api.perplexity.ai/chat/completions',
      {
        model: "pplx-70b-online",
        messages: [{
          role: "user",
          content: `Verify this claim: "${statement}". Respond with: 
                   - Truth rating (True/False/Misleading)
                   - Confidence percentage
                   - 3 bullet-point evidence
                   - 2 reliable source URLs`
        }]
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.PERPLEXITY_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const result = parseResponse(response.data);
    res.json(result);

  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    res.status(500).json({ error: "Fact-check failed" });
  }
});

function parseResponse(apiData) {
  const content = apiData.choices[0].message.content;
  return {
    verdict: content.match(/Truth rating:\s*(.+)/)?.[1] || "Unknown",
    confidence: content.match(/Confidence:\s*(.+)/)?.[1] || "N/A",
    evidence: content.match(/-\s(.+)/g) || [],
    sources: content.match(/https?:\/\/[^\s]+/g)?.slice(0, 2) || []
  };
}

module.exports = router;