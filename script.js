function sendMessage(text, isUser = false) {
    const chatBox = document.getElementById('chat-box');
    const message = document.createElement('div');
    message.classList.add('message');
    if (isUser) {
      message.classList.add('user-message');
      message.innerText = text;
      chatBox.appendChild(message);
      chatBox.scrollTop = chatBox.scrollHeight;
    } else {
      const typingIndicator = document.createElement('div');
      typingIndicator.classList.add('message');
      typingIndicator.innerText = 'Digitando...';
      chatBox.appendChild(typingIndicator);
      chatBox.scrollTop = chatBox.scrollHeight;
  
      setTimeout(() => {
        typingIndicator.remove();
        message.innerText = text;
        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight;
  
        // Toca o som de notificação
        const sound = document.getElementById('notif-sound');
        if (sound) {
          sound.play().catch(e => {
            console.warn("Som bloqueado pelo navegador até interação do usuário:", e);
          });
        }
      }, 1500);
    }
  }
  