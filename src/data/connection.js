import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config({path: ".env"})

const connection = () => {
    return mongoose.createConnection(process.env.DB_CONNECTION_STRING);
};

export default connection;