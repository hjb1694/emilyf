import knex from './database/index.js';
import bcrypt from 'bcryptjs';

const USERNAME = ''; //replace value
const PASSWORD = ''; //replace value

const hashedPassword = bcrypt.hashSync(PASSWORD, 10);

knex('users').insert({
    username: USERNAME,
    password: hashedPassword
})
    .then(() => { 
        console.log('success!');
    })
    .catch(e => { 
        console.log('ERROR!: ', e);
    });
