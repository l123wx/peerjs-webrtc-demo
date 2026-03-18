# WebRTC Peer-to-Peer Communication Demo Project

[简体中文](./README.md) | English

**Using Vue3 + TypeScript + Vite + PeerJS + Trystero**

This is a WebRTC peer-to-peer communication demo project that demonstrates how to implement direct browser-to-browser communication using PeerJS and Trystero libraries.

## Project Overview

This project demonstrates two different WebRTC implementation approaches:

1. **PeerJS Implementation** - Traditional peer-to-peer connection approach
2. **Trystero Implementation** - Room-based multi-user communication approach

## Features

- ✅ Create Peer instance and connect to signaling server
- ✅ Establish peer-to-peer data connections
- ✅ Send and receive text messages
- ✅ Support for two WebRTC library implementations
- ✅ Local signaling server configuration
- ✅ Modern frontend with Vue 3 + TypeScript

## Technology Stack

- **Frontend Framework**: Vue 3 + Composition API
- **Development Tools**: Vite + TypeScript
- **WebRTC Libraries**:
  - PeerJS (v1.5.4) - Simplifies WebRTC connections
  - Trystero (v0.20.0) - Room-based communication
- **Routing**: Vue Router 4
- **Package Manager**: pnpm
- **Signaling Server**: PeerServer (Node.js)

## Project Structure

```
peerjs-webrtc-demo/
├── src/
│   ├── views/
│   │   ├── index.vue      # PeerJS implementation page
│   │   └── trystero.vue   # Trystero implementation page
│   ├── router/index.ts    # Routing configuration
│   ├── App.vue           # Main application component
│   └── main.ts           # Application entry point
├── server/
│   ├── index.js          # PeerServer signaling server
│   └── key/              # SSL certificates directory
└── package.json
```

## Quick Start

### 1. Install Dependencies

```bash
# Install frontend dependencies
pnpm install

# Install server dependencies
cd server
pnpm install
cd ..
```

### 2. Start Signaling Server

```bash
cd server
pnpm dev
```

The signaling server will start at `http://localhost:9000`.

### 3. Start Frontend Application

```bash
# In a new terminal
pnpm dev
```

The frontend application will start at `http://localhost:5173`.

### 4. Use the Application

1. Open browser and visit `http://localhost:5173`
2. In the first browser tab:
   - Enter your ID (e.g., "user1")
   - Click "create peer" button
3. In the second browser tab:
   - Enter your ID (e.g., "user2")
   - Click "create peer" button
   - Enter "user1" in the "targetId" input
   - Click "connect" button
4. Now both tabs are connected and can send messages to each other

## Routing

- `/` - PeerJS implementation page
- `/trystero` - Trystero implementation page

## Configuration

### Signaling Server Configuration (`server/index.js`)

```javascript
const peerServer = PeerServer({
    port: 9000,           // Server port
    path: '/myapp',       // Path prefix
    // ssl: {             // Enable HTTPS (requires certificates)
    //     key: fs.readFileSync('./key/server.key'),
    //     cert: fs.readFileSync('./key/server.crt')
    // },
})
```

### Frontend Peer Configuration (`src/views/index.vue`)

```javascript
peer = new Peer(myId.value, {
  host: "localhost",      // Signaling server address
  port: 9000,             // Signaling server port
  path: '/myapp'          // Path prefix
});
```

## Development

### Adding New Features

1. Create new Vue components in `src/views/` directory
2. Add route configuration in `src/router/index.ts`
3. Implement WebRTC related functionality

### Debugging Tips

- Open browser developer tools to view console logs
- Check network requests to ensure connection to signaling server
- Use `console.log` to debug connection status

## Deployment to GitHub Pages

This project is configured with GitHub Actions for automatic deployment to GitHub Pages. Pushing code to the master branch will automatically trigger the deployment workflow.

## Related Resources

- [PeerJS Documentation](https://peerjs.com/docs/)
- [Trystero Documentation](https://github.com/dmotz/trystero)
- [WebRTC Official Documentation](https://webrtc.org/)
- [Vue 3 Documentation](https://vuejs.org/)

## License

MIT
