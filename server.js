const path = require('path');
const express = require('express');
const cors = require('cors');

const storeRouter = require('./routers/store');
const connectDB = require('./config/db');


const app = express();


const publicPath = path.join(__dirname,"public");
app.use(express.static(publicPath))
//connect to db
connectDB();

//Body Parser
app.use(express.json());

//enable cors
app.use(cors());

app.use(storeRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
})

