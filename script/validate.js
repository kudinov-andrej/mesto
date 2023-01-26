
  
  
  function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.popap__input'));
    const buttonElement = formElement.querySelector('.popap__button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
      });
    });
    
  }; 

  function isValid (formElement, inputElement, ) {
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
  
  function showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
  
  };
  
  function hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = " ";
  
    
  };
  
  function toggleButtonState (inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__button_disabled');
      buttonElement.setAttribute("disabled", "disabled")
    } else {
      buttonElement.classList.remove('popup__button_disabled');
      buttonElement.removeAttribute("disabled", "disabled")
    }
  }; 
  
  
  function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll('.popap__form'));
    formList.forEach((formElement) => {
      setEventListeners(formElement);
    });
    
  };
      
  enableValidation(configValidation);
  