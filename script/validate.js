 const config = {
  formSelector: '.popap__form',
  formSelectorPlace: '.popap__form_type_new-place',
  formSelectorProfile: '.popap__form_type_profile',
  inputSelector: '.popap__input',
  errorClassVisible: 'popap__error_visible',
  submitButtonSelector: '.popap__button',
  inactiveButtonClass: 'popap__button_disabled',


};

/*

class FormValidator {
  constructor(config, formElement) {
    
  }

 */

 
  function setEventListeners(formElement, config) {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, config);
    inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
      });
    });
    
  }; 

  function isValid (formElement, inputElement, config) {
    if (!inputElement.validity.valid) {   
      showInputError(formElement, inputElement, inputElement.validationMessage, config);
    
    } else {
      hideInputError(formElement, inputElement, inputElement.validationMessage, config);
      
    }
    
  };


 
  function hasInvalidInput(inputList, config) {
     return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }; 
  
  function showInputError(formElement, inputElement, errorMessage, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
      errorElement.textContent = errorMessage;
      inputElement.classList.add(config.errorClassVisible);
   
  };
  

  

  function hideInputError(formElement, inputElement, errorMessage, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = " ";
    inputElement.classList.remove(config.errorClassVisible);
  
    
  };

  function resetError (formElement, inputElement, config) {
    const error = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.errorClassVisible);
    error.textContent = " ";
    
  };

 
  function resetValidition(formElement, config) {
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    inputList.forEach(function (inputElement){
    hideInputError(formElement, inputElement,  inputElement.validationMessage, config);
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
  
  