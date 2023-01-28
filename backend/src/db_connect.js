const dotenv = require("dotenv")
dotenv.config()
const { Pool } = require("pg");

// Database Connection 
const connectDb = () => {
    try {
      const pool = new Pool({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT,
        });
 
         pool.connect()
        const res =  pool.query('SELECT * FROM public."PRODUCTS"')
        module.exports = pool;
    } catch (error) {
        console.log(error)
    }
}
connectDb()




