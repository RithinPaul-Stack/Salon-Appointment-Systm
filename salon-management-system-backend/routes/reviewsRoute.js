const express = require('express');
const router= express.Router();
const reviewController = require ('../controllers/reviewController');

router
    .route('/')
    //.get( reviewController.getAllPrivacypolicy)
    .post(reviewController.createReview)


router
    .route('/all/:id')
    .get(reviewController.viewAllReviews)



module.exports = router;