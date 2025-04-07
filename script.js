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
  
  function showReferralInfo() {
    clearButtons();
    sendMessage('🎁 Indique amigos para a Universo AGV e ganhe descontos exclusivos na sua proteção veicular!');
    sendMessage('💬 Envie o link abaixo para seus amigos e peça para mencionarem sua indicação:');
    sendMessage('🔗 https://wa.me/5511945731548?text=Olá!%20Fui%20indicado%20por%20um%20amigo%20e%20quero%20saber%20mais%20sobre%20a%20proteção%20veicular%20da%20Universo%20AGV');
    sendMessage('💸 A cada amigo que fechar com a AGV através do seu link, você recebe 25% de cashback na mensalidade ou adesão!');
    createButton('🔙 Voltar', showMainOptions);
  }
  
  function showInfoOptions() {
    clearButtons();
    sendMessage('O que você quer saber sobre a Universo AGV?');
    createButton('🚗 Nossa Proteção', showProtectionInfo);
    createButton('🌟 Nossa Reputação', showReputationInfo);
    createButton('📍 Onde Atendemos', showCoverageInfo);
    createButton('🔙 Voltar', showMainOptions);
  }
  
  function showProtectionInfo() {
    clearButtons();
    sendMessage('Oferecemos proteção veicular completa com cobertura contra roubo, furto, colisão, perda total, assistência 24h e muito mais. Tudo isso com planos acessíveis que cabem no seu bolso.');
    createButton('🔙 Voltar', showInfoOptions);
  }
  
  function showReputationInfo() {
    clearButtons();
    sendMessage('A Universo AGV é reconhecida pela excelência no atendimento e pela satisfação dos seus associados. Mantemos uma relação transparente e ética, refletida em avaliações positivas em diversas plataformas.\n\n💬 Nossa reputação no Reclame Aqui é um reflexo do nosso compromisso em resolver qualquer situação com rapidez e respeito.');
    sendMessage('"Tive um atendimento excelente! Resolveram meu problema em menos de 24h." ⭐⭐⭐⭐⭐');
    sendMessage('"Muito satisfeita com o suporte da AGV, sempre rápidos e prestativos!" ⭐⭐⭐⭐⭐');
    createButton('🔙 Voltar', showInfoOptions);
  }
  
  function showCoverageInfo() {
    clearButtons();
    sendMessage('Estamos presentes em todo o território nacional, proporcionando segurança e suporte onde quer que você esteja! Com parceiros e guinchos em diversas regiões, você sempre estará amparado.');
    createButton('🔙 Voltar', showInfoOptions);
  }
  
  function clearButtons() {
    document.getElementById('chat-buttons').innerHTML = '';
  }
  
  function createButton(text, callback) {
    const button = document.createElement('button');
    button.innerText = text;
    button.onclick = () => {
      sendMessage(text, true);
      callback();
    };
    document.getElementById('chat-buttons').appendChild(button);
  }
  
  function showMainOptions() {
    clearButtons();
    sendMessage('Olá! Como posso te ajudar hoje?');
    createButton('ℹ️ Informações', showInfoOptions);
    createButton('📞 Falar com Atendente', () => {
      sendMessage('Certo! Clique no link abaixo para falar com um de nossos atendentes via WhatsApp:');
      sendMessage('👉 https://wa.me/5511945731548');
    });
    createButton('💬 Depoimentos', showReputationInfo);
    createButton('🎁 Indique e Ganhe', showReferralInfo);
  }
  
  // Inicia a conversa
  showMainOptions();
  