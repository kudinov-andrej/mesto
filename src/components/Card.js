export default class Card {
  constructor(data,  currentUserId, templateSelector, deleteCardApi, likeClick, openPicture) {
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._deleteCardApi = deleteCardApi;
    this._likeClick = likeClick;
    this._selector = templateSelector;
    this._likes = data.likes;
    this._openPicture = openPicture;  
    this._isOwner = data.owner._id === currentUserId;
    //this._activeHard = this.activeHard.bind(this);
console.log(openPicture)

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
    this._element.querySelector('.photo-plase__hard').addEventListener('click', () => this._likeClick());
    this._element.querySelector('.photo-plase__image').addEventListener('click', () => {
    this._openPicture(this._name, this._link);
    });
  }


  _deleteCard() {
  this._deleteCardApi(this._id, this._element);
  
  };


  /*
  activeHard(id) {
   
    this._buttonLike.classList.toggle("hard_active");

    return this._isLiked;
  };
*/

isLiked() {
  return this._isLiked;
}

  setLike(data) {
    this._isLiked = data.likes.filter((item) => { return this._isOwner; }).length > 0; // проверяем что лайк есть и он мой
    this._element.querySelector('.photo-plase__counter-like').textContent = data.likes.length;
    if (this._isLiked) {
        this._element.querySelector('.photo-plase__hard').classList.add('hard_active');
    } else {
        this._element.querySelector('.photo-plase__hard').classList.remove('hard_active');
    }
}

  genereateCard() {
    this._element = this._getElementFromTemplate().cloneNode(true);
    this._cardImage = this._element.querySelector('.photo-plase__image');
    this._element.querySelector('.photo-plase__name').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._buttonLike = this._element.querySelector('.photo-plase__hard');
    this._addEventListeners();
    this._getView();
    this._element.querySelector('.photo-plase__counter-like').textContent = this._likes.length;
    return this._element;

  };


}

