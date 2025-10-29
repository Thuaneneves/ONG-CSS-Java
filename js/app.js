// app.js - Inicialização da aplicação
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('index.html')) {
    Router.init();
  }
  
  // Extensões para FormValidation (para inicializar formulários específicos)
  FormValidation.initVolunteerForm = () => {
    const form = document.getElementById('volunteerForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (FormValidation.validateForm(form)) {
          const formData = {
            nome: form.nome.value,
            email: form.email.value,
            cpf: form.cpf.value,
            telefone: form.telefone.value,
            data_nascimento: form.data_nascimento.value,
            endereco: form.endereco.value,
            cep: form.cep.value,
            cidade: form.cidade.value,
            estado: form.estado.value,
            timestamp: new Date().toISOString()
          };
          FormValidation.saveToLocalStorage(formData, 'volunteers');
          form.reset();
        }
      });
      
      // Validação em tempo real para todos os campos
      form.querySelectorAll('input, select').forEach(field => {
        field.addEventListener('input', () => {
          const errorElement = form.querySelector(`#${field.id}Error`);
          const rules = { required: field.hasAttribute('required') };
          if (field.type === 'email') rules.email = true;
          if (field.pattern) rules.pattern = field.pattern;
          if (field.name === 'nome') rules.minLength = 2;
          FormValidation.validateField(field, errorElement, rules);
        });
      });
    }
  };
  
  // Inicializar apenas se estiver na página de cadastro (redundância para cadastro.html)
  if (window.location.pathname.includes('cadastro.html')) {
    FormValidation.initVolunteerForm();
  }
});
