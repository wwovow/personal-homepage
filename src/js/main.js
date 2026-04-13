// This file contains the main JavaScript logic for the personal homepage, handling interactions and events.

document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('chat-button');
    const chatInput = document.getElementById('chat-input');
    const chatWindow = document.getElementById('chat-window');

    chatButton.addEventListener('click', function() {
        const message = chatInput.value;
        if (message.trim() !== '') {
            addMessageToChat('You: ' + message);
            chatInput.value = '';
            // Here you can call a function to send the message to the server or handle it as needed
        }
    });

    function addMessageToChat(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = message;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
    }
});

// 翻牌效果
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', function() {
    this.classList.toggle('flipped');
  });
});