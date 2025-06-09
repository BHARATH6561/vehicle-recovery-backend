const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// Example route
app.get('/', (req, res) => {
  res.send('Vehicle Recovery Backend is live!');
});

// ✅ IMPORTANT: Use process.env.PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
