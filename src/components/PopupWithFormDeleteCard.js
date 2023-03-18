import Popup from "./Popup.js";

export default class PopupWithFormDeleteCard extends Popup {
  constructor(popupSelector) {
      super(popupSelector);
      this._form = this._element.querySelector('.popap__form');
     
  }

  setFormSubmitHandler(token) {
      this.setFormSubmitHandler = token;
      
  }

  setEventListeners() {
      super.setEventListeners();
      this._form.addEventListener('submit', (event) => {
          event.preventDefault();
          this.setFormSubmitHandler();
      });
  }
}