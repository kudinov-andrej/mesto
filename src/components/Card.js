export default class Card {
  constructor(data,  currentId, templateSelector, deleteCardApi, likeClick, openPicture) {
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._deleteCardApi = deleteCardApi;
    this._likeClick = likeClick;
    this._selector = templateSelector;
    this._likes = data.likes;
    this._openPicture = openPicture;  
    this._currentId = currentId;
    this._ownerId = data.owner._id; 

  }

  _getView() {
    if (this._ownerId === this._currentId) {
        this._element.querySelector('.photo-plase__delete-button').classList.add('photo-plase__delete-button_show');
    }
}
  _getElementFromTemplate() {
    return document.querySelector(this._selector).content.querySelector('.photo-plase')

  }

  _addEventListeners() {
    this._element.querySelector('.photo-plase__delete-button').addEventListener('click', () => this._deleteCard());
    this._element.querySelector('.photo-plase__hard').addEventListener('click', () => this._likeClick(this));
    this._element.querySelector('.photo-plase__image').addEventListener('click', () => {
    this._openPicture(this._name, this._link);
    });
  }


  _deleteCard() {
  this._deleteCardApi(this._id, this._element);
  
  };

// Проблема здесь! после перезагрузки страницы сохраняется счетчик лайков, но уходит выделение сердечка цветом

isLiked() {
   return _isLiked;
   
}


// эта функция работает, но сердечко не сохраняет свое состояние после перезагрузки
  setLike(data) {
   this._isLiked = data.likes.filter((item) => { return item._id == this._currentId;}).length>0;
    this._element.querySelector('.photo-plase__counter-like').textContent = data.likes.length;
    if (this._isLiked) {
        this._element.querySelector('.photo-plase__hard').classList.add('hard_active');
    } else {
        this._element.querySelector('.photo-plase__hard').classList.remove('hard_active');
    }
}

// дальше, вроде, все норм

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

