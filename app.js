const express = require('express');
const cors = require('cors')
const app = express ();
require('dotenv').config();
const connectDB = require('./db/connect');

const profile = require("./routes/profile");

const port = process.env.PORT || 5000;

app.use(cors());


// to parse JSON 
app.use(express.json());


app.use('/api/v1/profile',profile)




app.get('/hello',(req,res) => {
    res.send('Miner pets DAO');
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