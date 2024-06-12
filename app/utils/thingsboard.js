// utils/thingsboard.js
import axios from 'axios';

const BASE_URL = 'http://YOUR_THINGSBOARD_INSTANCE_URL';
const DEVICE_ID = 'YOUR_DEVICE_ID';
const ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN';

export const fetchTelemetryData = async () => {
    try {
        const response = await axios.get(
            `${BASE_URL}/api/plugins/telemetry/DEVICE/${DEVICE_ID}/values/timeseries`,
            {
                headers: {
                    'X-Authorization': `Bearer ${ACCESS_TOKEN}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching telemetry data:', error);
        throw error;
    }
};
