import express from 'express'
import cors from 'cors'
import mqtt from 'mqtt'
import {Server} from 'socket.io';
import {createServer} from 'http'




const app = express();
const port = 8000
app.use(express.json())
app.use(cors())

const server = createServer(app)    

const io = new Server(server, {
    cors: {
        origin: '*'
    }
})



const mqttClient = mqtt.connect('wss://test.mosquitto.org:8081/ws');
const topic = 'topic/hokages';
const message = 'generate message';




mqttClient.on('connect', () => {
    console.log(`Server connected: ${mqttClient.connected}`);    
    if (mqttClient.connected === true) {
        mqttClient.publish(topic, message, {qos: 0}, ()=> {
            console.log(`Опубликован топик: ${topic}, с сообщением: ${message}`)
        });
    }
    mqttClient.subscribe(topic, {qos:0}, ()=>console.log('subscriped on ' + topic ));
});




io.on('connection', (socket) => {
    socket.on('Power from client', (msg) => {

        mqttClient.publish(topic, msg, {qos: 0}, ()=> {
            console.log(`Опубликован топик: ${topic}, с сообщением: ${msg}`)
        });



    })  
})

mqttClient.on('message',(topic, msg) => {
    io.emit('Response from broker', msg.toString())
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default topic;