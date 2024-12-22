const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/stocks', (req, res) => {
    // Replace with real stock data fetching logic
    res.json([{ symbol: 'AAPL', price: 150 }, { symbol: 'GOOGL', price: 2800 }]);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});