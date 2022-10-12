import knex from 'knex';
import knexfile from '../knexfile.js';
import config from '../config/index.js';

export default knex(knexfile[config.env]);