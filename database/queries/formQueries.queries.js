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

    static async fetchContactInquiries() { 
 
        try {

            const results = await knex.from('contact_inquiries').select([
                'name', 'email', 'message'
            ]);

            return results;


        } catch (e) {
            throw new Error('Db Select Error.');
         }


    }

}