const router = require('express').Router();

const MQTTService = require('../services/mqttService')


router.post('/', MQTTService.createTopic)
router.get('/', MQTTService.getTopic)
router.post('/getDefault', MQTTService.getDefaultTopic)

router.post('/sendMessage', MQTTService.handleMessage)

module.exports = router