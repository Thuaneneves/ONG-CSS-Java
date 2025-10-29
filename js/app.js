// app.js - Inicialização da aplicação
document.addEventListener('DOMContentLoaded', () => {
  Router.init();
  
  // Extensões para FormValidation (para inicializar formulários específicos)
  FormValidation.initContactForm = () => {
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (FormValidation.validateForm(form)) {
          const formData = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
            timestamp: new Date().toISOString()
          };
          FormValidation.saveToLocalStorage(formData, 'contactMessages');
          form.reset();
        }
      });
      
      // Validação em tempo real
      form.querySelectorAll('input, textarea').forEach(field => {
        field.addEventListener('input', () => {
          const errorElement = form.querySelector(`#${field.id}Error`);
          const rules = { required: field.hasAttribute('required') };
          if (field.type === 'email') rules.email = true;
          if (field.name === 'message') rules.minLength = 10;
          FormValidation.validateField(field, errorElement, rules);
        });
      });
    }
  };
  
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
      
      // Validação em tempo real (similar ao contato)
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
});
