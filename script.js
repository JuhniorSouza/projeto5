const chat = document.getElementById('chat');
const buttons = document.getElementById('buttons');

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function sendMessage(text, type = 'received') {
  const msg = document.createElement('div');
  msg.className = `message ${type}`;
  msg.innerText = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
  await delay(300);
}

function clearButtons() {
  buttons.innerHTML = '';
}

function createButton(text, onClick) {
  const btn = document.createElement('button');
  btn.innerText = text;
  btn.onclick = onClick;
  buttons.appendChild(btn);
}

async function startChat() {
  await sendMessage('👋 Olá! Seja bem-vindo(a) à UniversoAGV, uma das 5 maiores proteções veiculares do Brasil com mais de 500 mil associados. Também somos uma das mais bem avaliadas no Reclame Aqui!');
  showMainOptions();
}

function showMainOptions() {
  clearButtons();
  chat.innerHTML = '';
  createButton('1️⃣ Fazer Cotação', showForm);
  createButton('2️⃣ Falar com Atendente', () => {
    window.open('https://wa.me/5538999750635', '_blank');
  });
  createButton('3️⃣ Saber Mais', showInfoOptions);
}

function showInfoOptions() {
  clearButtons();
  sendMessage('Como posso te ajudar? Escolha uma opção:');
  createButton('📌 Como funciona uma associação?', explainAssociation);
  createButton('🏢 Quem somos nós', showAboutUs);
  createButton('⭐ Nosso diferencial', showDifferential);
  createButton('📝 Nossa reputação', showReputation);
  createButton('🔙 Voltar', showMainOptions);
}

function showForm() {
  clearButtons();
  chat.innerHTML = '';

  const form = document.createElement('form');
  form.innerHTML = `
    <div class="message received">
      <strong>📋 Preencha os dados para cotação:</strong><br/><br/>
      <label>Nome:<br/><input type="text" name="nome" required></label><br/><br/>
      <label>Cidade:<br/><input type="text" name="cidade" required></label><br/><br/>
      <label>Telefone:<br/><input type="tel" name="telefone" required></label><br/><br/>
      <label>Modelo do veículo:<br/><input type="text" name="modelo" required></label><br/><br/>
      <label>Placa:<br/><input type="text" name="placa" required></label><br/><br/>
      <button type="submit">📨 Enviar para o WhatsApp</button>
    </div>
  `;

  form.onsubmit = function (e) {
    e.preventDefault();
    const nome = form.nome.value;
    const cidade = form.cidade.value;
    const telefone = form.telefone.value;
    const modelo = form.modelo.value;
    const placa = form.placa.value;

    const msg = `Olá! Quero fazer uma cotação:\n\n📋 Nome: ${nome}\n🏙️ Cidade: ${cidade}\n📱 Telefone: ${telefone}\n🚗 Veículo: ${modelo}\n🔢 Placa: ${placa}`;
    const encoded = encodeURIComponent(msg);
    const url = `https://wa.me/5538999750635?text=${encoded}`;

    window.open(url, '_blank');
    chat.innerHTML = '';
    sendMessage('✅ Seus dados foram enviados via WhatsApp!');
    createButton('🔙 Voltar ao início', showMainOptions);
  };

  chat.appendChild(form);
}

function explainAssociation() {
  clearButtons();
  sendMessage('Somos uma associação que funciona por rateio. Isso significa que todos os associados dividem os custos dos eventos (como sinistros). Como temos muitos membros, o valor rateado fica muito pequeno, tornando a proteção extremamente acessível.');
  sendMessage('✅ E o melhor: com mais de 500 mil associados, o valor na fatura acaba sendo imperceptível!');
  createButton('🔙 Voltar', showInfoOptions);
}

function showAboutUs() {
  clearButtons();
  sendMessage('A UniversoAGV está há 10 anos no mercado, desde 2015, oferecendo proteção veicular em todo o Brasil.');
  createButton('🔙 Voltar', showInfoOptions);
}

function showDifferential() {
  clearButtons();
  sendMessage('Nosso maior diferencial é a cobertura completa em TODO o território nacional, com uma rede de atendimento ágil e bem avaliada.');
  createButton('🔙 Voltar', showInfoOptions);
}

function showReputation() {
  clearButtons();
  sendMessage('Somos uma das associações mais bem avaliadas no Reclame Aqui, com alto índice de solução e satisfação dos associados.');
  createButton('🔙 Voltar', showInfoOptions);
}

startChat();
