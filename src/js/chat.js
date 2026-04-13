// File: /personal-homepage/personal-homepage/src/js/chat.js

document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.getElementById('chat-input');
    const chatButton = document.getElementById('chat-button');
    const chatWindow = document.getElementById('chat-window');

    chatButton.addEventListener('click', function() {
        const message = chatInput.value.trim();
        if (message) {
            addMessageToChat('You', message);
            chatInput.value = '';
            // Simulate a response from the digital avatar
            setTimeout(() => {
                addMessageToChat('Avatar', 'This is a response to: ' + message);
            }, 1000);
        }
    });

    function addMessageToChat(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
    }
});