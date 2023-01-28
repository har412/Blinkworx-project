
const pool = require('../db_connect')

exports.getAllOrders = (req,res) => {
    pool.query('SELECT * FROM public."ORDERS" ORDER BY "Id" ASC ', (error, results) => {
        if (error) {
            console.log(error)
          throw error
        }
        else{
            console.log(results)
            return res.status(200).json(results.rows)
        }
      })
  }

exports.getOrderById = (req,res) => {
    let orderId= req.params.id;
    pool.query(`SELECT * FROM public."ORDERS" where "Id" = ${orderId} ORDER BY "Id" ASC `, (error, results) => {
        if (error) {
            console.log(error)
          throw error
        }
        else{
            console.log(results)
            return res.status(200).json(results.rows)
        }
      })
  }

exports.addNewOrder = (req,res) => {
    var timestamp = new Date('2020-10-05 14:01:10');
    console.log(timestamp)
    let orderDescription = req.body.description;
    pool.query(`INSERT INTO public."ORDERS"("orderDescription", "createdAt") VALUES ('${orderDescription}', '2022-09-05 14:01:10'); `, (error, results) => {
        if (error) {
            console.log(error)
          throw error
        }
        else{
            console.log(results)
            return res.status(200).json(results.rows)
        }
      })
  }

exports.addNewOrder = (req,res) => {
    var timestamp = new Date('2020-10-05 14:01:10');
    console.log(timestamp)
    let orderDescription = req.body.description;
    pool.query(`INSERT INTO public."ORDERS"("orderDescription", "createdAt") VALUES ('${orderDescription}', '2022-09-05 14:01:10'); `, (error, results) => {
        if (error) {
            console.log(error)
          throw error
        }
        else{
            console.log(results)
            return res.status(200).json(results.rows)
        }
      })
  }

exports.updateOrderById = (req,res) => {
    let orderId = req.params.id;
    let updatedDescription = req.body.updatedDescription;
    pool.query(`UPDATE public."ORDERS" SET  "orderDescription"='${updatedDescription}'  WHERE "Id"=${orderId};`, (error, results) => {
        if (error) {
            console.log(error)
          throw error
        }
        else{
            console.log(results)
            return res.status(200).json(results.rows)
        }
      })
  }

exports.removeOrderById = (req,res) => {
    let orderId = req.params.id;
    pool.query(`DELETE FROM public."ORDERS" WHERE "Id"=${orderId};`, (error, results) => {
        if (error) {
            console.log(error)
          throw error
        }
        else{
            console.log(results)
            return res.status(200).json(results.rows)
        }
      })
  }

