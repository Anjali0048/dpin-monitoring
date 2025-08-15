import express from 'express';
import route from './route';

const app = express();

app.use('/api/v1', route)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})