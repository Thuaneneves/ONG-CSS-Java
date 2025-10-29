// templates.js - Define templates HTML para as seções da SPA
const Templates = {
  home: () => `
    <section>
      <h2>Sobre Nós</h2>
      <p>A Ajuda Solidária é uma organização sem fins lucrativos dedicada a promover projetos sociais, voluntariado e doações para comunidades carentes. Nossa missão é transformar vidas através da solidariedade, oferecendo apoio em áreas como alimentação, educação e saúde. Fundada em 2025, já impactamos milhares de pessoas com iniciativas sustentáveis e colaborativas.</p>
      <img src="images/logo.jpg" alt="Logo da Ajuda Solidária" width="300" height="300">
    </section>
    <section>
      <h2>Informações de Contato</h2>
      <p>Entre em contato conosco para mais informações, parcerias ou dúvidas:</p>
      <img src="images/contato.png" alt="Imagem de contato e equipe" width="200" height="200">
      <ul>
        <li><strong>Email:</strong> contato@ajudasolidaria.org</li>
        <li><strong>Telefone:</strong> (11) 99999-9999</li>
        <li><strong>Endereço:</strong> Rua da Solidariedade, 123 - São Paulo, SP - CEP: 01234-567</li>
        <li><strong>Redes Sociais:</strong> Siga-nos no Instagram (@ajudasolidaria) e Facebook (Ajuda Solidária ONG)</li>
      </ul>
    </section>
  `,
  
  projetos: () => `
    <main class="container" style="margin-top:10px; display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:24px; align-items: stretch;">
      <section class="card">
        <h2>Nossos Projetos Sociais</h2>
        <img src="images/voluntariado.jpg" alt="Voluntários em ação ajudando a comunidade" width="200" height="250">
        <p>Junte-se a nós como voluntário! Oferecemos oportunidades em diversas áreas, como arrecadação de doações, eventos comunitários e apoio direto às famílias. Não é necessário experiência prévia – apenas disposição para ajudar. Cadastre-se na página de cadastro para começar.</p>
      </section>
      <section class="card">
        <h2>Como Doar</h2>
        <img src="images/doacao.png" alt="Caixas de doação e itens arrecadados" width="200" height="250">
        <p>Sua doação transforma vidas. Você pode contribuir de várias formas:</p>
        <ul>
          <li><strong>Doação financeira:</strong> Via PIX ou transferência bancária (contate-nos para detalhes).</li>
          <li><strong>Itens essenciais:</strong> Alimentos não perecíveis, roupas e materiais escolares.</li>
          <li><strong>Tempo e habilidades:</strong> Participe como voluntário.</li>
        </ul>
        <p>Para doar, preencha o formulário de cadastro ou entre em contato diretamente. Toda contribuição é bem-vinda!</p>
      </section>
    </main>
  `,
  
  cadastro: () => `
    <section>
      <h2>Cadastro de Voluntários</h2>
      <p>Junte-se a nós! Preencha o formulário abaixo para se cadastrar como voluntário.</p>
      <form id="volunteerForm">
        <label for="volName">Nome:</label>
        <input type="text" id="volName" name="volName" required>
        <span class="error" id="volNameError"></span><br>
        
        <label for="volEmail">Email:</label>
        <input type="email" id="volEmail" name="volEmail" required>
        <span class="error" id="volEmailError"></span><br>
        
        <label for="volPhone">Telefone:</label>
        <input type="tel" id="volPhone" name="volPhone" required>
        <span class="error" id="volPhoneError"></span><br>
        
        <button type="submit">Cadastrar</button>
      </form>
    </section>
  `
};
