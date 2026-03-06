const express = require('express');
const router = express.Router();
const enrollControl= require('../controllers/enrollControl');

router.get('/enroll', enrollControl.getEnrollment);

router.post('/enroll', enrollControl.createRecord);

module.exports=router;