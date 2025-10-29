// router.js - Lógica de roteamento para SPA
const Router = {
  routes: {
    '/': 'home',
    '/projetos': 'projetos',
    '/cadastro': 'cadastro'
  },
  
  loadRoute: (route) => {
    const main = document.querySelector('main');
    const templateKey = Router.routes[route] || 'home';
    main.innerHTML = Templates[templateKey]();
    
    // Re-inicializar validação para formulários na nova rota
    if (templateKey === 'home') {
      FormValidation.initContactForm();
    } else if (templateKey === 'cadastro') {
      FormValidation.initVolunteerForm();
    }
  },
  
  init: () => {
    // Escutar cliques nos links do nav
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const route = link.getAttribute('href').replace('.html', '');
        window.history.pushState({}, '', route);
        Router.loadRoute(route);
      });
    });
    
    // Carregar rota inicial ou baseada na URL
    const initialRoute = window.location.pathname.replace('/index.html', '') || '/';
    Router.loadRoute(initialRoute);
    
    // Escutar mudanças no histórico (botão voltar/avançar)
    window.addEventListener('popstate', () => {
      Router.loadRoute(window.location.pathname);
    });
  }
};
