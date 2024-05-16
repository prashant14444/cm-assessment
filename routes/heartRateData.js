import express from "express";
import {CreateHeartRateData} from '../controller/heartRateData.js';

const HeartRateDataRoutes = express.Router();

// post page route.
HeartRateDataRoutes.post("/heart_rate_data", CreateHeartRateData);

export default HeartRateDataRoutes;