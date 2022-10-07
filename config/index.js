import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config()

export default {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT
}

