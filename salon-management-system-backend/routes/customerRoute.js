const express = require('express');
//const customerController = require('./../controllers/customerController');
const authController = require('./../controllers/authController');

const router = express.Router();


router
    .route('/')
    .post( authController.Signup)
    .post(authController.Login)

    
// router
//   .route('/:id')
//   .get(authController.getCustomer)
//   .patch(authController.updateCustomer)
//   .delete(authController.deleteCustomer);


module.exports = router;