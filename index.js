const express = require('express');

const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json())


async function run() {
    try {
      await client.connect();
} 
  finally {
    //   await client.close();
    }
  }
  run().catch(console.dir);
  
  app.get('/', (req,res) =>{
    res.send('daily-e-commerce')
});
app.listen(port, () =>{
    console.log('Running the server on Port', port);
})