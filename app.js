const express = require('express');
const cors = require('cors')
const app = express ();
require('dotenv').config();
const connectDB = require('./db/connect');
const NFT = require("./routes/NFT");
const ownership = require("./routes/ownership");
const profile = require("./routes/profile");

const port = process.env.PORT || 5000;

app.use(cors());


// to parse JSON 
app.use(express.json());

app.use('/api/v1/NFTs',NFT);
app.use('/api/v1/ownership',ownership)
app.use('/api/v1/profile',profile)



app.get('/hello',(req,res) => {
    res.send('Delta Racers');
});


const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening to port ${port}`);
        });
    }
    catch(error){
        console.log(error);

    }
}

start();