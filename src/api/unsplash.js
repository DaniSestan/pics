import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0b1c57448602264652b6a9d2b1e4cfeec8aff7be4ab984cc735d8823324c1aee'
    }
});
