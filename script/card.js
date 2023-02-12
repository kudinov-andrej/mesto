 
 
 class Card {
    constructor(name, link, templateSelector) {
      this._name = name;
      this._link = link;
      this._templateSelector = templateSelector;
      this._openPicture = openPicture;
      this._deleteCard = this._deleteCard.bind(this);
      this._activeHard = this._activeHard.bind(this);
     
  
    }
  
    _getElementFromTemplate() {
      const cardElement = document.querySelector('.photo-template')
        .content
        .querySelector('.photo-plase')
        .cloneNode(true);
  
      return cardElement;
    }
  
  
    _addEventListeners() {
      this._element.querySelector('.photo-plase__delete-button').addEventListener('click', this._deleteCard);
      this._element.querySelector('.photo-plase__hard').addEventListener('click', this._activeHard);
      this._element.querySelector('.photo-plase__image').addEventListener('click', () => {
      this._openPicture(this._name, this._link);
      this._deleteCard = this._deleteCard.bind(this);
      this._activeHard = this._activeHard.bind(this);
      });
    }
  
    _deleteCard() {
      this._element.remove();
  
      console.log(event)
    };
  
    _activeHard(evt) {
      evt.target.classList.toggle("hard_active");
  
    };
  
  
  
    createCard() {
      this._element = this._getElementFromTemplate();
      this._addEventListeners();
      this._element.querySelector('.photo-plase__name').textContent = this._name;
      this._element.querySelector('.photo-plase__image').src = this._link
      this._element.querySelector('.photo-plase__image').alt = this._name
          return this._element;
  
    };
  
  
  }


  export default Card;