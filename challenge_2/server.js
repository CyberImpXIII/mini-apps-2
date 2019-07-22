const express = require('express');
const app = express();
const port = 8000;
app.use(express.static('public'));

app.listen(port , ()=>console.log(`Mini Apps 2 Challenge 2, Cryptocurrency Charting Tool - Server is running on port ${port}`))