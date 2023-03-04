export default class Popup {
    constructor(popupSelector) {
        this._element = document.querySelector(popupSelector);
       
    }


    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
          this.closePopup();
        }
      }

    openPopup() {
        this._element.classList.add('popap_opened');
        document.addEventListener('keydown', this._handleEscClose)

    }

    closePopup() {
        this._element.classList.remove('popap_opened');
        document.removeEventListener('keydown', this._handleEscClose);

    }

    _closeByEsc(evt) {
        if (evt.key === 'Escape') {
            this.closePopup();

        }
    }

    setEventListeners() {
        this._element.addEventListener('mousedown', (evt) => {
          if (evt.target.classList.contains('popap_opened') || evt.target.classList.contains('popap__button-close')) {
            this.closePopup();
          }
        });
        
      }

}