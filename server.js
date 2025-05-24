const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


 // middleware to parse JSON
app.use(express.json());


// Define routes
app.get('/', (req, res) => {
  res.send('Hello, welcome to Tesa Page');
});


app.get('/me', (req, res) => {
 res.send('Hi everyone, this is koke!. Pay your respects');
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

 
