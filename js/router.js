const Router = {
  routes: {
    '#home': 'home',
    '#projetos': 'projetos',
    '#cadastro': 'cadastro'
  },
  
  loadRoute: (hash) => {
    const main = document.querySelector('main');
    const templateKey = Router.routes[hash] || 'home';
    main.innerHTML = Templates[templateKey]();
    
    // Removido: FormValidation.initContactForm() - formulário não existe mais no home
  },
  
  init: () => {
    // Escutar cliques nos links do nav (apenas os com hash)
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const hash = link.getAttribute('href');
        window.location.hash = hash;
        Router.loadRoute(hash);
      });
    });
    
    // Carregar rota inicial baseada no hash
    const initialHash = window.location.hash || '#home';
    Router.loadRoute(initialHash);
    
    // Escutar mudanças no hash
    window.addEventListener('hashchange', () => {
      Router.loadRoute(window.location.hash);
    });
  }
};
