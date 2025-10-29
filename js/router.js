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
    
    // Inicializar formulário se for cadastro
    if (templateKey === 'cadastro') {
      FormValidation.initVolunteerForm();
    }
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
