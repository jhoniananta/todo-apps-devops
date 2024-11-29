import sql from 'mssql';

let database = null;

export default class Database {
  config = {};
  poolconnection = null;
  connected = false;

  constructor(config) {
    this.config = config;
  }

  async connect() {
    try {
      this.poolconnection = await sql.connect(this.config);
      this.connected = true;
      console.log('Database connected successfully.');
      return this.poolconnection;
    } catch (error) {
      console.error('Error connecting to the database:', error);
      this.connected = false;
    }
  }

  async disconnect() {
    try {
      if (this.connected) {
        await this.poolconnection.close();
        this.connected = false;
        console.log('Database disconnected successfully.');
      }
    } catch (error) {
      console.error('Error disconnecting from the database:', error);
    }
  }

  async executeQuery(query) {
    const request = this.poolconnection.request();
    const result = await request.query(query);

    return result.rowsAffected[0];
  }
  //Priorities
  // Return all list priorities
  async readAllPriorities() {
    const request = this.poolconnection.request();
    const result = await request.query(`SELECT * FROM priorities`);

    return result.recordsets;
  }
  // Return list priorities with specific ID
  async readPriorities(id) {
    const request = this.poolconnection.request();
    const result = await request
      .input('id', sql.Int, +id)
      .query(`SELECT * FROM priorities WHERE id = @id`);

    return result.recordset[0];
  }
  // Categories
  async readAllCategories() {
    const request = this.poolconnection.request();
    const result = await request.query(`SELECT * FROM categories`);

    return result.recordsets;
  }
  async readCategories(id) {
    const request = this.poolconnection.request();
    const result = await request
      .input('id', sql.Int, +id)
      .query(`SELECT * FROM categories WHERE id = @id`);

    return result.recordset[0];
  }

  // Tasks
  
  
}

export const createDatabaseConnection = async (passwordConfig) => {
  const database = new Database(passwordConfig);
  await database.connect();
  return database;
};