// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/dev.sqlite3'
    }, 
    migrations: {
      directory: './database/migrations'
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './database/prod.sqlite3'
    }, 
    migrations: {
      directory: './database/migrations'
    }
  },

};
