/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
    return knex.schema.createTable('contact_inquiries', table => { 
        table.increments('id').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.text('message').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
    return knex.schema.dropTableIfExists('contact_inquiries');
};
