 
export default class Card {
  constructor(item, templateSelector, openPicture) {
     this._name = item.name;
     this._link = item.link;
     this._selector = templateSelector;
     this._openPicture = openPicture;
     this._deleteCard = this._deleteCard.bind(this);
     this._activeHard = this._activeHard.bind(this);
    
 
   } 
 
 
   _getElementFromTemplate() {
     return document.querySelector(this._selector).content.querySelector('.photo-plase')
     
     
   }
 
 
   _addEventListeners() {
     this._element.querySelector('.photo-plase__delete-button').addEventListener('click', () =>  this._deleteCard());
     this._element.querySelector('.photo-plase__hard').addEventListener('click', () =>  this._activeHard());
     this._element.querySelector('.photo-plase__image').addEventListener('click', () => {
     this._openPicture(this._name, this._link);
   
 
     });
   }
 
   _deleteCard() {
     this._element.remove();
 
    
   };
 
   _activeHard(evt) {
     this._buttonLike.classList.toggle("hard_active");
 
   };
 
 
 
   createCard() {
     this._element = this._getElementFromTemplate().cloneNode(true);
     this._addEventListeners();
     this._element.querySelector('.photo-plase__name').textContent = this._name;
     this._element.querySelector('.photo-plase__image').src = this._link
     this._element.querySelector('.photo-plase__image').alt = this._name
     this._buttonLike = this._element.querySelector('.photo-plase__hard');
         return this._element;
 
   };
 
   
 }
 