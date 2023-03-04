import Popup from "./Popup.js";


export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
      super(popupSelector);
      this._handleFormSubmit = handleFormSubmit;
      this._form = this._element.querySelector('.popap__form');
     this._inputList = this._form.querySelectorAll('.popap__input');
      
      
  }

  
  
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }
 

  closePopup() {
    super.closePopup();
    this._form.reset(); 
    
  }
 
  
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
        event.preventDefault();
        this._handleFormSubmit(this._getInputValues());
    });

  
  }
  
  }