import axios from 'axios';

export default axios.create({
    baseURL:'http:/32.198.35.8/:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
