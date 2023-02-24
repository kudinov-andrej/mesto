//import Section from "./Section.js";

import Card from "./Card.js";
import UserInfo from "./UserInfo.js";
import FormValidator from "./FormValidator.js";
import { initialCards, config } from "./data.js";
import Popup from "./Popup.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import { aboutButton, aboutPopapProfile, aboutPopapPlace, aboutButtonclosePlace, aboutButtonClose, aboutformName, aboutformProfession, aboutName, aboutProfession, aboutAddbutton, cardsContainer, photoTemplate, aboutFormNewPlase, aboutButtonSavePlace, aboutInputNewPlace, aboutInputNewLink, aboutPopupTypyPhoto, aboutPopupButtonClose, aboutPopupPhotoTitle, aboutPopupPhoto, formElementProfile, buttonElement, inputElement, popups } from "./data.js";


/*
class Section {
  constructor({data, render} , containerSelector) {
    this._renderedItems = data;
    this._createCardClass = render;
    this._containerSelector = containerSelector;
    console.log( this._containerSelector)
  }

  appendCard(item) {
    this._containerSelector.append(item);
  }

  renderItems() {
    this._renderedItems.forEach(item => {
      this.appendCard(item);
      console.log(this._renderedItems)
    });
  }
}


const cardList = new Section({data: initialCards, render: createCardClass}, cardsContainer)
  


cardList.renderItems();


*/

//создание класса

function createCard(item) {
  const card = new Card(item, '.photo-template', openPicture);
  return card.createCard();
}



// новая функция renderItems

function renderStartCards(item) {
  initialCards.forEach(item => {
    appendCard(item);
  });
};

// новая функция appendCard

function appendCard(item) {
  cardsContainer.append(createCard(item));
}



function handleFormSubmit(evt) {
  aboutName.textContent = aboutformName.value;
  aboutProfession.textContent = aboutformProfession.value;
  popupProfile.closePopup();

};


function openPicture(name, link) {
  aboutPopupPhoto.alt = name;
  aboutPopupPhoto.src = link;
  aboutPopupPhotoTitle.textContent = name;
  popupPhoto.openPopup();
};



function createNewCard(evt) {
  evt.preventDefault();
  const newCard = createCard({ name: aboutInputNewPlace.value, link: aboutInputNewLink.value });
  cardsContainer.prepend(newCard);
  popupPlace.closePopup();
  evt.target.reset();
  evt.submitter.classList.add('.popap__button_disabled')
  evt.submitter.disabled = true;


};


const profileValidator = new FormValidator(config, aboutPopapProfile);
const placeValidator = new FormValidator(config, aboutPopapPlace);
profileValidator.enableValidation();
placeValidator.enableValidation();
const popupProfile = new Popup(aboutPopapProfile);
popupProfile.setEventListeners();
const popupPlace = new Popup(aboutPopapPlace);
popupPlace.setEventListeners();
const popupPhoto = new PopupWithImage(aboutPopupTypyPhoto);
popupPhoto.setEventListeners();
const popupProfileForm = new PopupWithForm(aboutPopapProfile, handleFormSubmit);
popupProfileForm.setEventListeners();
const popupPlaceForm = new PopupWithForm(aboutPopapPlace, handleFormSubmit);
popupPlaceForm.setEventListeners();
const user = new UserInfo({ userNameElement: aboutName, userInfoElement: aboutProfession }); 



aboutButton.addEventListener('click', () => {
  profileValidator.clearErrorForm(aboutPopapProfile);
  popupProfile.openPopup()
  const userData = user.getUserInfo();
  aboutformName.value = userData.name;
  aboutformProfession.value = userData.about;
  
  
});

aboutAddbutton.addEventListener('click', () => {
  popupPlace.openPopup();
  placeValidator.clearErrorForm();
});



renderStartCards()
aboutFormNewPlase.addEventListener('submit', createNewCard);



