<template>
  <div>
    myId: <input type="text" v-model="myId" />
    targetId: <input type="text" v-model="targetId" />
    <button @click="createPeer">create peer</button>
    <button @click="connect">connect</button>
    <button @click="send">send</button>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import Peer, { DataConnection } from 'peerjs';
import { joinRoom } from 'trystero';

const room = joinRoom(
  {
    appId: 'testApp',
    relayUrls: ['ws://localhost:9000/myapp/peerjs?key=peerjs&token=token']
  },
  'room-id-1'
)

console.log(room)

const myId = ref('');
const targetId = ref('');

const isConnected = ref(false)

let peer: Peer
let conn: DataConnection

const createPeer = () => {
  peer = new Peer(myId.value, {
    host: "localhost",
    port: 9000,
    path: '/myapp'
  });
  peer.on('open', id => {
    console.log('peer open, id:', id)
  })
  peer.on('connection', dataConnection => {
    console.log(dataConnection)

    conn = dataConnection

    targetId.value = dataConnection.peer
    isConnected.value = true

    dataConnection.on('data', data => {
      console.log('Received', data)
    })
  })

  window.peer = peer
}

const connect = () => {
  conn = peer.connect(targetId.value);

  conn.on('open', () => {
    console.log('connected to ' + targetId.value)
    isConnected.value = true

    conn.on('data', function (data) {
      console.log('Received', data);
    });
  })

  conn.on('iceStateChanged', state => {
    console.log(state)
  })

  conn.on('error', error => {
    console.error(error)
  })
}

const send = () => {
  conn.send('Hello!');
}
</script>