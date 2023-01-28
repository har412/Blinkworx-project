var express = require('express');
var router = express.Router();


const {getAllOrders} = require("../controllers/order_controller")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Start Creating your app');
});


//status of order
// router.get('/order',getAllOrders)


module.exports = router;
