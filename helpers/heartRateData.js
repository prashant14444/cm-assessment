export const aggregateHeartRateData = (data) => {
    const intervals = {};

    let newIntervalStart = false;
    let date = null;
    let intervalStart = null;
    let intervalEnd = null;
    let currentReadingDate = null;
    let intervalStartIsoFormat = null;

    data.forEach((reading) => {
        if (!newIntervalStart) {
            date = new Date(reading.on_date);
            intervalStart = date;
            intervalStartIsoFormat = date.toISOString();
            intervalEnd = new Date(intervalStart.getTime() + 15 * 60000); // 15 minutes in milliseconds
            newIntervalStart = true;
        } else {
            currentReadingDate = new Date(reading.on_date);
            if (!(intervalEnd >= currentReadingDate && intervalStart <= currentReadingDate)) {
                date = new Date(reading.on_date);
                intervalStart = date;
                intervalStartIsoFormat = date.toISOString();
                intervalEnd = new Date(intervalStart.getTime() + 15 * 60000);
                newIntervalStart = true;
            }
        }

        if (!intervals[intervalStartIsoFormat]) {
            intervals[intervalStartIsoFormat] = {
                low: Number(reading.measurement),
                high: Number(reading.measurement)
            };
        } else {
            intervals[intervalStartIsoFormat].low = Math.min(intervals[intervalStartIsoFormat].low, Number(reading.measurement));
            intervals[intervalStartIsoFormat].high = Math.max(intervals[intervalStartIsoFormat].high, Number(reading.measurement));
        }
        intervals[intervalStartIsoFormat].endDate = Math.min(intervalEnd, new Date(reading.on_date));
    });

    const result = Object.keys(intervals).map((start) => {
        let temp = intervals[start];

        let endDateTimeStamp = temp.endDate;
        const date = new Date(endDateTimeStamp);
        const endDateIsoString = date.toISOString();

        delete (temp.endDate);
        return data = {
            from_date: start,
            to_date: endDateIsoString,
            measurement: temp
        }
    }
    );
    return result;
};