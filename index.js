import express from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import dbConnection from "./config/db.js";


//import routes here
import HeartRateDataRoutes from './routes/heartRateData.js';

dotenv.config(); // loading all the .env variables

const app = express();


// Parse requests with content-type application/json and limit the request body size to 50MB
app.use(bodyParser.json({ limit: '50mb' }));

// Parse requests with content-type application/x-www-form-urlencoded, extended syntax enabled, and limit the request body size to 50MB
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));


app.use('/api/v1', HeartRateDataRoutes);

//check database connection 
dbConnection.connectToDatabase().then((resp) => {
    // do whatever is needed on the successfull connection
}).catch((error) => {
    console.error("error while connecting with database:", error.message);
    process.exit(1); // Exit the process with a failure code
});

app.listen(process.env.SERVER_PORT, () => {
    console.info(`server is running at ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
});