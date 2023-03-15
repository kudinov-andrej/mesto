export default class Card {
  constructor(data, currentUserId, templateSelector, deleteCardApi, openPicture) {
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._isOwner = data.owner._id === currentUserId;
    this._deleteCardApi = deleteCardApi;
    this._selector = templateSelector;
    this._openPicture = openPicture;
    this._deleteCard = this._deleteCard.bind(this);
    this._activeHard = this._activeHard.bind(this);
console.log(data.owner._id)
  }

  _getView() {
    if (this._isOwner) {
        this._element.querySelector('.photo-plase__delete-button').classList.add('photo-plase__delete-button_show');
    }
}
  _getElementFromTemplate() {
    return document.querySelector(this._selector).content.querySelector('.photo-plase')

  }

  _addEventListeners() {
    this._element.querySelector('.photo-plase__delete-button').addEventListener('click', () => this._deleteCard());
    this._element.querySelector('.photo-plase__hard').addEventListener('click', () => this._activeHard());
    this._element.querySelector('.photo-plase__image').addEventListener('click', () => {
    this._openPicture(this._name, this._link);
    });
  }

  _deleteCard() {
  this._deleteCardApi(this._id, this._element);
  
  };

  _activeHard(evt) {
    this._buttonLike.classList.toggle("hard_active");

  };



  genereateCard() {
    this._element = this._getElementFromTemplate().cloneNode(true);
    this._cardImage = this._element.querySelector('.photo-plase__image');
    this._element.querySelector('.photo-plase__name').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._buttonLike = this._element.querySelector('.photo-plase__hard');
    this._addEventListeners();
    this._getView();
    return this._element;

  };


}

