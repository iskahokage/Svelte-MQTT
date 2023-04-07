<!-- <script>
    import {PUBLIC_DEVICE_ID, PUBLIC_MQTT_SUBSCRIBE_TOPIC} from '$env/static/public';
    import { client } from './mqtt';
    client.on('connect', ()=> {
        console.log('connect')
        client.subscribe(PUBLIC_MQTT_SUBSCRIBE_TOPIC, function (err) {
      if (err) {
        console.error(err);
        // client.publish('presence', 'Hello mqtt')
      } else {
        console.log(`MQTT subscribed on topic '${PUBLIC_MQTT_SUBSCRIBE_TOPIC}'`);
      }
    });
    })
    client.on('message', (message, topic)=> {
        console.log(message, topic.toString())
    })
</script> -->

<div class="inputContainer">
    <input type="range" name="" max="100" min="0" id="" value="0" step="10">
</div>

<style>
    .inputContainer{
        max-width: 1024px;
        margin: 0 auto;
    }
</style>