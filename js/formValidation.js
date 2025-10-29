// formValidation.js - Lógica de validação para formulários
const FormValidation = {
  validateField: (field, errorElement, rules) => {
    let isValid = true;
    let errorMessage = '';
    
    if (rules.required && !field.value.trim()) {
      isValid = false;
      errorMessage = 'Este campo é obrigatório.';
    } else if (rules.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
      isValid = false;
      errorMessage = 'Email inválido.';
    } else if (rules.minLength && field.value.length < rules.minLength) {
      isValid = false;
      errorMessage = `Mínimo de ${rules.minLength} caracteres.`;
    }
    
    errorElement.textContent = errorMessage;
    field.style.borderColor = isValid ? 'green' : 'red';
    return isValid;
  },
  
  validateForm: (form) => {
    let isFormValid = true;
    const fields = form.querySelectorAll('input, textarea');
    
    fields.forEach(field => {
      const errorElement = form.querySelector(`#${field.id}Error`);
      const rules = { required: field.hasAttribute('required') };
      if (field.type === 'email') rules.email = true;
      if (field.name === 'message') rules.minLength = 10;
      
      if (!FormValidation.validateField(field, errorElement, rules)) {
        isFormValid = false;
      }
    });
    
    return isFormValid;
  },
  
  saveToLocalStorage: (formData, key) => {
    const existingData = JSON.parse(localStorage.getItem(key) || '[]');
    existingData.push(formData);
    localStorage.setItem(key, JSON.stringify(existingData));
    alert('Dados salvos com sucesso!');
  }
};
