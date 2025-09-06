import http from "http";
import app from "./app.js";
import { Server } from "socket.io";
import cors from "cors";

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('join', (data) => {
        console.log('User joined:', data);
        socket.join(data.userId);
    });

    socket.on('update-location-captain', (data) => {
        console.log('Captain location updated:', data);
        // Broadcast to all users that a captain's location was updated
        socket.broadcast.emit('captain-location-updated', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

server.listen(3000, () => {
    console.log("🚀 Server is running on port 3000");
});