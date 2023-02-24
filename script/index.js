import Section from "./Section.js";

import Card from "./Card.js";
import UserInfo from "./UserInfo.js";
import FormValidator from "./FormValidator.js";
import { initialCards, config } from "./data.js";
import Popup from "./Popup.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import { aboutButton, aboutPopapProfile, aboutPopapPlace, aboutButtonclosePlace, aboutButtonClose, aboutformName, aboutformProfession, aboutName, aboutProfession, aboutAddbutton, cardsContainer, photoTemplate, aboutFormNewPlase, aboutButtonSavePlace, aboutInputNewPlace, aboutInputNewLink, aboutPopupTypyPhoto, aboutPopupButtonClose, aboutPopupPhotoTitle, aboutPopupPhoto, formElementProfile, buttonElement, inputElement, popups } from "./data.js";



//создание класса

function createCard(item) {
  const card = new Card(item, '.photo-template', openPicture);
  return card.createCard();
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


const cardList = new Section({
  data: initialCards,
  renderer: (Item) => {
    const card = new Card(Item, '.photo-template', openPicture);

    const cardElement = card.createCard();

    cardList.setItem(cardElement);
    },
  },
  cardsContainer
);

cardList.renderItems();


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



//renderStartCards()
aboutFormNewPlase.addEventListener('submit', createNewCard);



