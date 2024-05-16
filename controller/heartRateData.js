//import HeartRateModel from "../models/heartRate.js";

import {storeHeartRateData as storeHeartRateDataModel } from "../models/heartRateData.js";
import { aggregateHeartRateData } from "../helpers/heartRateData.js";

// Add new data.
export const CreateHeartRateData = async(req, res) => {
    const { clinical_data, patient_id, from_healthkit_sync, orgId, timestamp } = req.body;
    const heartRateData = clinical_data.HEART_RATE.data;
    const aggregatedData = aggregateHeartRateData(heartRateData);
    
    // function to store data in the database
    await storeHeartRateDataModel(aggregatedData);

    res.status(201).json({
        clinical_data: {
            ...clinical_data,
            HEART_RATE: {
                ...clinical_data.HEART_RATE,
                aggregated_data: aggregatedData
            }
        },
        patient_id,
        from_healthkit_sync,
        orgId,
        timestamp
    });
};
