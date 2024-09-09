import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './chat.css';

const socket = io('http://localhost:3002');

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        setUsername(socket.id); // Set username as socket ID

        socket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.off('message');
        };
    }, []);

    const sendMessage = () => {
        if (message.trim() !== '') {
            socket.emit('message', { user: username, text: message });
            setMessage('');
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                <h2>WhatsApp Clone</h2>
                <span>Welcome, {username}</span>
            </div>
            <div className="chat-box">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`message-bubble ${msg.id === socket.id ? 'sent' : 'received'}`}
                    >
                        <span className="username">{msg.user}</span>
                        <p>{msg.text}</p>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
