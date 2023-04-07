const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://test.mosquitto.org');

const topic = 'topic/hokages';
class MQTTService{


    static handleMessage = async (req,res) => {
        try {
            const {message} = req.body
            
            client.publish(topic, message, {qos: 0}, ()=> {
                console.log(`Опубликован топик: ${topic}, с сообщением: ${message}`)
            });

        } catch (e) {
            console.log(e)
        }
    }

    static createTopic = async(req, res) => {
        try{

            console.log(req.body)

            client.on('connect', () => {
                console.log(`Is client connected: ${client.connected}`);    
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
        }   
        catch(e){
            console.log(e)
        }
    }


    static getDefaultTopic = async (req,res) => {

        try {
            const {getDefault} = req.body;
            console.log(getDefault)
            
            client.on('connect', ()=> {
                console.log(`Is client connected: ${client.connected}`);  
                if (client.connected === true) {
                    client.publish(getDefault, message, {qos: 0}, ()=> {
                        console.log(`Опубликован топик: ${topic}, с сообщением: ${message}`)
                    });
                }
            })




            return res.json('ok')

            
        } catch (e) {
            console.log(e)
        }

    }

    static getTopic = async(req, res) => {
        try{
            client.on('connect', ()=> {
                console.log(`Is client connected: ${client.connected}`);  
                if (client.connected === true) {
                    client.publish(topic, message, {qos: 0}, ()=> {
                        console.log(`Опубликован топик: ${topic}, с сообщением: ${message}`)
                    });
                }
            })
        }
        catch(e){
            console.log(e)
        }
    }

}

module.exports = MQTTService;