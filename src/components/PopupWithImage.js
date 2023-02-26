import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(element){
    super(element);
    this._popupImage = this._element.querySelector('.popap__photo');
    this._popupCaption = this._element.querySelector('.popap__photo-name');


  }
 
    openPicture(name, link) {
     this._popupImage.alt = name;
      this._popupImage.src = link;
      this._popupCaption.textContent = name;
     super.openPopup();  
   
   };
   
     };