const chatLog = document.getElementById('chatLog');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Nhớ thay YOUR_REPLIT_BACKEND_URL bằng cái URL "xịn" mà Replit đã cho bạn ở Bước 2 nha!
const backendUrl = 'https://dfe4650b-168b-4c00-876e-b4f3cd561529-00-2zfu5fmr5pneh.sisko.replit.dev/chat';

function appendMessage(message, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(isUser ? 'user-message' : 'chatbot-message');
    messageDiv.textContent = message;
    chatLog.appendChild(messageDiv);
    chatLog.scrollTop = chatLog.scrollHeight; // Tự động scroll xuống tin nhắn mới nhất
}

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
        appendMessage(message, true);
        messageInput.value = '';

        fetch(backendUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        })
        .then(response => response.json())
        .then(data => {
            if (data.response) {
                appendMessage(data.response, false);
            } else if (data.error) {
                appendMessage(`Lỗi từ chatbot rồi: ${data.error} 😥`, false);
            } else {
                appendMessage("Ủa, chatbot bị 'tụt mood' không trả lời rồi! 🙄", false);
            }
        })
        .catch(error => {
            appendMessage(`Mạng mẽo kiểu gì ấy, không kết nối được! ${error} 😡`, false);
        });
    }
}
