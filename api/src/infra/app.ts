import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import routes from './routes';
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(routes);


app.listen(process.env.PORT, () => {
    console.log('app is running !!!');
})