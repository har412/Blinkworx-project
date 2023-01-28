var express = require('express');
var router = express.Router();


const {getAllOrders} = require("../controllers/order_controller")
const {getOrderById} = require("../controllers/order_controller")
const {addNewOrder} = require("../controllers/order_controller")
const {updateOrderById} = require("../controllers/order_controller")
const {removeOrderById} = require("../controllers/order_controller")

// Order Routes

router.get('/', function(req, res, next) {
  res.send('Start Creating your app');
});

//status of order
router.get('/order',getAllOrders)

//get Order by id
router.get("/order/:id",getOrderById)

//add new orders
router.post("/orders",addNewOrder)

//Update Order by id
router.put("/orders/:id",updateOrderById)

//Remove Order by Id
router.delete("/orders/:id",removeOrderById)


module.exports = router;