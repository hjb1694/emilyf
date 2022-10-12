import knex from '../index.js';

export default class AuthQueries { 

    static async getCredentialsByUsername(username) { 

        try {

            const result = await knex.select('username', 'password').from('users').where({username});

            return result[0];

        } catch (e) { 
            throw new Error('DB Error');
        }


    }

}