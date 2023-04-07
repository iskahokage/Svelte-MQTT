const router = require('express').Router();
const topicRoutes = require('./topicRoute')

router.use('/topic', topicRoutes)
