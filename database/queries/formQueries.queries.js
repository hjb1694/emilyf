import knex from '../index.js';

export default class FormQueries { 


    static async insertContactInquiry(name, email, message) { 

        try {

            await knex('contact_inquiries').insert({
                name, email, message
            });

        } catch (e) { 
            throw new Error('DB Insert Error');
        }

    }

}