const config = {
  formSelector: '.popap__form',
  formSelectorPlace: '.popap__form_type_new-place',
  formSelectorProfile: '.popap__form_type_profile',
  inputSelector: '.popap__input',
  errorClassVisible: 'popap__error_visible',
  submitButtonSelector: '.popap__button',
  inactiveButtonClass: 'popap__button_disabled',


};



class FormValidator {
  constructor(config, formElement, resetValidition) {
    this._config = config;
    this._formElement = formElement;
   
    
  }

  enableValidation() {
    this._setEventListeners();
  };


  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(config.inputSelector));
    this._buttonElement = this._formElement.querySelector(config.submitButtonSelector);
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });

  };


  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);

    } else {
      this._hideInputError(inputElement);

    }

  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })

  };



  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(this._config.errorClassVisible);

  };

  _hideInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.errorClassVisible);
    errorElement.textContent = " ";
  }


  _resetError(inputElement) {
    const error = this._formElement.querySelector(`.${inputElement.id}-error`);
    this._inputElement.classList.remove(this._config.errorClassVisible);
    error.textContent = " ";

  };


/*
  resetValidition() {
    this._inputList.forEach(function (inputElement) {
      this._hideInputError( inputElement, inputElement.validationMessage);
    });
    this._toggleButtonState(inputList);
  };
*/

  clearErrorForm() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(config.inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", "disabled")
    } else {
      this._buttonElement.classList.remove(config.inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled", "disabled")
    }
  };




  };
 


const profileValidator = new FormValidator(config, aboutPopapProfile);
const placeValidator = new FormValidator(config, aboutPopapPlace);
profileValidator.enableValidation();
placeValidator.enableValidation();

/*
 
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
  
  */