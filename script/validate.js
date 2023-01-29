 
  function setEventListeners(formElement, config) {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, config);
    inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement, config);
      });
    });
    
  }; 

  function isValid (formElement, inputElement, config) {
    if (!inputElement.validity.valid) {   
      showInputError(formElement, inputElement,  inputElement.validationMessage);
    
    } else {
      hideInputError(formElement, inputElement,  inputElement.validationMessage);
      
    }
    
  };




  
  function hasInvalidInput(inputList) {
     return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }; 
  
  function showInputError(formElement, inputElement, errorMessage, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
  
  };
  
  function hideInputError(formElement, inputElement, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = " ";
  
    
  };

  function resetError (formElement, inputElement, config) {
    const error = formElement.querySelector(`.${inputElement.id}-error`);
    error.textContent = " ";
  };

 
  function resetValidition(formElement, config) {
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    inputList.forEach(function (inputElement){
    hideInputError(formElement, inputElement,  inputElement.validationMessage);
          });
    toggleButtonState(inputList, buttonElement, config);
  };

  
  function toggleButtonState (inputList, buttonElement, config) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.setAttribute("disabled", "disabled")
    } else {
      buttonElement.classList.remove(config.inactiveButtonClass);
      buttonElement.removeAttribute("disabled", "disabled")
    }
  }; 
  
  
  function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
      setEventListeners(formElement, config);
    });
    
  };
      
  enableValidation(config);
  