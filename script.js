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
      }, 1500);
    }
  }
  
  function createButton(label, callback) {
    const button = document.createElement('button');
    button.innerText = label;
    button.className = 'chat-button';
    button.onclick = () => {
      sendMessage(label, true);
      callback();
    };
    document.getElementById('button-container').appendChild(button);
  }
  
  function clearButtons() {
    document.getElementById('button-container').innerHTML = '';
  }
  
  function showMainOptions() {
    clearButtons();
    sendMessage('Olá! 👋 Bem-vindo à Universo AGV. Como podemos te ajudar hoje?');
    createButton('1️⃣ Fazer uma simulação', showFormOptions);
    createButton('2️⃣ Falar com um atendente', () => {
      sendMessage('🔗 Você será redirecionado para o WhatsApp...');
      window.open("https://wa.me/5511945731548", "_blank");
    });
    createButton('3️⃣ Saber Mais', showInfoOptions);
    createButton('4️⃣ Indique e ganhe desconto', showReferralInfo);
  }
  
  function showReferralInfo() {
    clearButtons();
    sendMessage('🎁 Indique amigos para a Universo AGV e ganhe descontos exclusivos na sua proteção veicular!');
    sendMessage('💬 Envie o link abaixo para seus amigos e peça para mencionarem sua indicação:');
    sendMessage('🔗 https://wa.me/5511945731548?text=Olá!%20Fui%20indicado%20por%20um%20amigo%20e%20quero%20saber%20mais%20sobre%20a%20proteção%20veicular%20da%20Universo%20AGV');
    sendMessage('💸 A cada amigo que fechar com a AGV através do seu link, você recebe 25% de cashback na mensalidade ou adesão!');
    createButton('🔙 Voltar', showMainOptions);
  }
  
  function showFormOptions() {
    clearButtons();
    sendMessage('📋 Preencha o formulário abaixo ou envie os dados diretamente para o nosso atendimento via WhatsApp:');
    window.open("https://wa.me/5511945731548?text=Olá!%20Gostaria%20de%20fazer%20uma%20simulação%20de%20proteção%20veicular.", "_blank");
    createButton('🔙 Voltar', showMainOptions);
  }
  
  function showInfoOptions() {
    clearButtons();
    sendMessage('A Universo AGV oferece planos acessíveis com ampla cobertura e benefícios exclusivos para seus associados. Nossa atuação é pautada pela transparência, compromisso e agilidade no atendimento.\n\nEstamos presentes em todo o território nacional, proporcionando segurança e suporte onde quer que você esteja!');
    createButton('🔙 Voltar', showMainOptions);
  }
  
  // Iniciar o chat
  window.onload = showMainOptions;
  