import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.resolve(process.cwd(), '..')
})

export default {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT
}

