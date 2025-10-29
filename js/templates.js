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
        <fieldset>
          <legend>Informações Pessoais</legend>
          <label for="nome">Nome Completo:</label>
          <input type="text" id="nome" name="nome" required pattern="[A-Za-zÀ-ÿ\s]{2,}" title="Apenas letras e espaços, mínimo 2 caracteres" placeholder="Digite seu nome completo">
          <span class="error" id="nomeError"></span><br>
          
          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" required placeholder="exemplo@email.com">
          <span class="error" id="emailError"></span><br>
          
          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" required pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="000.000.000-00" title="Formato: 000.000.000-00">
          <span class="error" id="cpfError"></span><br>
          
          <label for="telefone">Telefone:</label>
   <input type="tel" id="telefone" name="telefone" required pattern="^\\(\\d{2}\\)\\s*\\d{4,5}-\\d{4}$" placeholder="(00) 00000-0000" title="Formato: (00) 00000-0000 ou (00) 0000-0000">
   <span class="error" id="telefoneError"></span><br>
          
          <label for="data_nascimento">Data de Nascimento:</label>
          <input type="date" id="data_nascimento" name="data_nascimento" required>
          <span class="error" id="data_nascimentoError"></span><br>
        </fieldset>
        
        <fieldset>
          <legend>Endereço</legend>
          <label for="endereco">Endereço:</label>
          <input type="text" id="endereco" name="endereco" required placeholder="Rua, número, bairro">
          <span class="error" id="enderecoError"></span><br>
          
          <label for="cep">CEP:</label>
          <input type="text" id="cep" name="cep" required pattern="\\d{5}-\\d{3}" placeholder="00000-000" title="Formato: 00000-000">
          <span class="error" id="cepError"></span><br>
          
          <label for="cidade">Cidade:</label>
          <input type="text" id="cidade" name="cidade" required placeholder="Digite sua cidade">
          <span class="error" id="cidadeError"></span><br>
          
          <label for="estado">Estado:</label>
          <select id="estado" name="estado" required>
            <option value="">Selecione um estado</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
          <span class="error" id="estadoError"></span><br>
        </fieldset>
        
        <button type="submit">Enviar Cadastro</button>
      </form>
    </section>
  `
};
