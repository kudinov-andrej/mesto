const config = {
  formSelector: '.popap__form',
  inputSelector: '.popap__input',
  submitButtonSelector: '.popap__button',
  inactiveButtonClass: 'popap__button_disabled',
 // inputErrorClass: '.popap__error',
}; 
  
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
      const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
      setEventListeners(formElement, config);
    });
    
  };
      
  enableValidation(config);
  