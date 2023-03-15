import Popup from "./Popup.js";

export default class PopupWithFormDeleteCard extends Popup {
  constructor(popupSelector) {
      super(popupSelector);
      //this._form = this._element.querySelector('.popup__form');
     // console.log(this._form)
  }

  setFormSubmitHandler(handler) {
      this.setFormSubmitHandler = handler;
  }

  setEventListeners() {
      super.setEventListeners();
      this._form.addEventListener('submit', (event) => {
          event.preventDefault();
          this.setFormSubmitHandler();
      });
  }
}