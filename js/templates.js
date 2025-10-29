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
    <section>
      <h2>Projetos Sociais</h2>
      <p>Aqui estão alguns dos nossos projetos em andamento:</p>
      <ul>
        <li><strong>Alimentação para Todos:</strong> Distribuição de cestas básicas em comunidades carentes.</li>
        <li><strong>Educação Inclusiva:</strong> Aulas gratuitas e materiais escolares para crianças.</li>
        <li><strong>Saúde Comunitária:</strong> Campanhas de vacinação e cuidados médicos móveis.</li>
      </ul>
      <img src="images/logo.jpg" alt="Projetos em ação" width="300" height="300">
    </section>
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
