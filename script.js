async function fetchStockData() {
    const response = await fetch('https://api.example.com/stocks'); // Replace with a real API
    const data = await response.json();
    document.getElementById('stock-data').innerHTML = JSON.stringify(data);
}

fetchStockData();