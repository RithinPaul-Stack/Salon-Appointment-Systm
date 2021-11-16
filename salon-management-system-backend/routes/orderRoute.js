const express = require('express');
const router= express.Router();
const OrderController = require ('../controllers/orderController');

router
    .route('/')
    //.get( OrderController.getAllPrivacypolicy)
    .post(OrderController.createOrder)


router
    .route('/:id')
    // .get(privacypolicyController.getPrivacypolicy)
    .patch(privacypolicyController.updateOrder)
    //.delete(privacypolicyController.deletePrivacypolicy);

router
    .route('/customer/:id')
    .get(OrderController.getCustomerOrders)



module.exports = router;