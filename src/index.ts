import  express from 'express';
import  http from 'http';
import  bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import  compression from 'compression';
import  cors from 'cors';
import router from './router';
import mongoose from 'mongoose';
const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(2080, () => {
    console.log('Server running on http://localhost:2080/');
});

const MONGO_URL = 'mongodb+srv://rovgurin:1414@cluster0.92ctlhk.mongodb.net/kidshome?retryWrites=true&w=majority';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());