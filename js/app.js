// app.js - Inicialização da aplicação
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('index.html')) {
    Router.init();
  }
  
  // Extensões para FormValidation (apenas para cadastro.html, já que o formulário foi removido do index.html)
  FormValidation.initVolunteerForm = () => {
    const form = document.getElementById('volunteerForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (FormValidation.validateForm(form)) {
          const formData = {
            name: form.volName.value,
            email: form.volEmail.value,
            phone: form.volPhone.value,
            timestamp: new Date().toISOString()
          };
          FormValidation.saveToLocalStorage(formData, 'volunteers');
          form.reset();
        }
      });
      
      // Validação em tempo real
      form.querySelectorAll('input').forEach(field => {
        field.addEventListener('input', () => {
          const errorElement = form.querySelector(`#${field.id}Error`);
          const rules = { required: field.hasAttribute('required') };
          if (field.type === 'email') rules.email = true;
          FormValidation.validateField(field, errorElement, rules);
        });
      });
    }
  };
  
  // Inicializar apenas se estiver na página de cadastro
  if (window.location.pathname.includes('cadastro.html')) {
    FormValidation.initVolunteerForm();
  }
});
