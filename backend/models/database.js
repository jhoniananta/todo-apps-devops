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

  async create(data) {
    const request = this.poolconnection.request();
  
    // Menambahkan input parameter ke query
    request.input('name', sql.NVarChar(255), data.name);
    request.input('priority_id', sql.Int, data.priority_id);
    request.input('category_id', sql.Int, data.category_id);
    request.input('due_date', sql.Date, data.due_date);
  
    // Query untuk menyisipkan data ke tabel 'tasks'
    const result = await request.query(
      `INSERT INTO tasks (name, priority_id, category_id, due_date) 
       VALUES (@name, @priority_id, @category_id, @due_date)`
    );
  
    // Mengembalikan jumlah baris yang terpengaruh
    return result.rowsAffected[0];
  }
  

  async readAll() {
    const request = this.poolconnection.request();
    const result = await request.query(`SELECT * FROM tasks`);

    return result.recordsets[0];
  }

  async read(data) {
    const request = this.poolconnection.request();
    const result = await request
      .input('name', sql.NVarChar(255), data.name)
      .query(`SELECT * FROM tasks WHERE name = @name`);

    return result.recordset[0];
  }

  async readPriorities() {
    const request = this.poolconnection.request();
    const result = await request.query(`SELECT * FROM priorities`);

    return result.recordsets[0];
  }

  async update(id, data) {
    const request = this.poolconnection.request();
  
    // Tambahkan input parameter untuk setiap kolom
    request.input('id', sql.Int, id); // Parameter untuk ID tugas
    request.input('name', sql.NVarChar(255), data.name);
    request.input('priority_id', sql.Int, data.priority_id);
    request.input('category_id', sql.Int, data.category_id);
    request.input('due_date', sql.Date, data.due_date);
  
    // Query untuk memperbarui data berdasarkan ID
    const result = await request.query(
      `UPDATE tasks 
       SET name = @name, priority_id = @priority_id, 
           category_id = @category_id, due_date = @due_date 
       WHERE id = @id`
    );
  
    // Kembalikan jumlah baris yang terpengaruh
    return result.rowsAffected[0];
  }
  
  async delete(id) {
    const idAsNumber = Number(id);

    const request = this.poolconnection.request();
    const result = await request
      .input('id', sql.Int, idAsNumber)
      .query(`DELETE FROM Person WHERE id = @id`);

    return result.rowsAffected[0];
  }
}

export const createDatabaseConnection = async (passwordConfig) => {
  database = new Database(passwordConfig);
  await database.connect();
  return database;
};