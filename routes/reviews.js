const express = require('express');
const router = express.Router({ mergeParams: true});
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');
const reviews = require('../controllers/reviews');
const catchAsync = require('../utils/catchAsync');

router.post('/', isLoggedIn, catchAsync( reviews.createReview ));

router.delete('/:reviewId', isLoggedIn, catchAsync( reviews.deleteReview ));

module.exports = router;