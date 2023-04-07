const express = require('express');
const routes = require('./routes/topicRoute');
const cors = require('cors')
const mqtt = require('mqtt');
const client = mqtt.connect('wss://test.mosquitto.org:8081/ws');


const app = express();
const port = 8000
const topic = 'topic/hokages';
const message = 'first message';

app.use(cors())
app.use(express.json())
app.use('/api', routes)


client.on('connect', () => {
    console.log(`Server connected: ${client.connected}`);    
    if (client.connected === true) {
        client.publish(topic, message, {qos: 0}, ()=> {
            console.log(`Опубликован топик: ${topic}, с сообщением: ${message}`)
        });
    }
    client.subscribe(topic, {qos:0}, ()=>console.log('subscriped'));
});
client.on('message',(topic, message) => {
    console.log(`получено сообщение: ${message}, по топику: ${topic}`); 
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = topic;