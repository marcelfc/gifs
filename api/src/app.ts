import express from 'express';

import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', ( request, response ) => {
    response.json({test: 'test'})
})

app.listen(process.env.PORT, () => {
    console.log('app is running !!!');
})