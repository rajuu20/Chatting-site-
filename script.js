const socket = io('https://your-backend-url.com'); // Update this with your backend URL

document.getElementById('send-button').addEventListener('click', () => {
    const message = document.getElementById('message-input').value;
    socket.emit('chat message', message);
    document.getElementById('message-input').value = '';
});

socket.on('chat message', (msg) => {
    const messagesDiv = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    messagesDiv.appendChild(messageElement);
});