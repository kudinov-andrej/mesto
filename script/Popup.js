export default class Popup {
    constructor(element) {
        this._element = element;
    }

    setEventListeners() {
        this._element
            .querySelector(".popap__button-close")
            .addEventListener("click", this.closePopup.bind(this));

        this._element.addEventListener('mousedown', (evt) => this.closeByOverlay(evt));

    }

    _handleEscClose() {
        document.addEventListener('keydown', (evt) => this._closeByEsc(evt));
    }

    openPopup() {
        this._element.classList.add('popap_opened');
        this._handleEscClose()

    }

    closePopup() {
        this._element.classList.remove('popap_opened');
        this._handleEscClose.remove

    }

    _closeByEsc(evt) {
        if (evt.key === 'Escape') {
            this.closePopup();

        }
    }

    closeByOverlay(evt) {
        if (evt.target.classList.contains('popap') || evt.target.classList.contains('popap__button-close')) {
            this.closePopup(evt.currentTarget);
        }
    };

}