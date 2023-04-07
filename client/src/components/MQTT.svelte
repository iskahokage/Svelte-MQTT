<script lang='ts'>
  
  import {io} from 'socket.io-client'

  const socket = io('http://localhost:8000')

  let rangeValue: string;

  socket.on('Response from broker', (msg: string)=> {
    rangeValue = msg
  })

  const changeHandler = (e: Event): void => {
    const value = (e.target as HTMLInputElement).value
    socket.emit('Power from client', value)

  }


</script>
<div>
  <h1>MQTT Svelte WebSocket</h1>

  <input type="number" bind:value={rangeValue}  on:change={changeHandler} >
  <input type="range" bind:value={rangeValue} min="0" max="100" step="2" on:change={changeHandler} id="">

</div>