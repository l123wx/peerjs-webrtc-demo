const { PeerServer } = require('peer')
const fs = require('node:fs')

const peerServer = PeerServer({
    port: 9000,
    // ssl: {
    //     key: fs.readFileSync('./key/server.key'),
    //     cert: fs.readFileSync('./key/server.crt')
    // },
    path: '/myapp',
})