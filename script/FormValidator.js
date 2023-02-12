import { config } from "./data.js";

export default class FormValidator {
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
 


