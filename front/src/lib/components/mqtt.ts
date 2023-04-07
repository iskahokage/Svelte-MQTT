
import mqtt from 'mqtt'

import {PUBLIC_MQTT_PROTOCOL, PUBLIC_MQTT_HOST, PUBLIC_MQTT_PORT} from '$env/static/public'
const mqtt_options = {
    clientId: 1515,
    servers: [
      {
        host: 'test.mosquitto.org',
        port: 8081,
        protocol: 'wss',
      },
    ],
    path: '/' + 'ws',
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    rejectUnauthorized: false,
  };

  const url = 'wss://test.mosquitto.org:8081/ws';
  let connected = false
  const onConnect = () => {
    console.log(`MQTT connected ${url}`);
    connected = client.connected;
    const topic = 'topic/hokages';
    client.subscribe(topic, function (err) {
      if (err) {
        console.error(err);
        // client.publish('presence', 'Hello mqtt')
      } else {
        console.log(`MQTT subscribed on topic '${topic}'`);
      }
    });
  };

  export const client = mqtt.connect(mqtt_options);
client.on('connect', () => {
    console.log('connected')
})