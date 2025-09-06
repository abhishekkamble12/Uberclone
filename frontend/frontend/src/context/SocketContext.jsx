import React, { createContext, useEffect, useMemo, useState } from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext(null);

const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const socketInstance = io(import.meta.env.VITE_BASE_URL || 'http://localhost:3000', {
            withCredentials: true,
            extraHeaders: {
                'Access-Control-Allow-Origin': window.location.origin,
            },
            transports: ['websocket', 'polling'],
            reconnectionAttempts: 5,
            reconnectionDelay: 1000,
        });
        
        socketInstance.on('connect', () => {
            console.log('Connected to server');
        });

        socketInstance.on('connect_error', (error) => {
            console.error('Connection error:', error);
        });

        socketInstance.on('disconnect', (reason) => {
            console.log('Disconnected from server. Reason:', reason);
        });

        setSocket(socketInstance);

        // Cleanup function
        return () => {
            if (socketInstance) {
                socketInstance.disconnect();
            }
        };
    }, []);

    const value = useMemo(() => ({ socket }), [socket]);

    return (
        <SocketContext.Provider value={value}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;