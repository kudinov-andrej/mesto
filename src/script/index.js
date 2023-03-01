import '../pages/index.css';
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import { initialCards, config } from "../components/data.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import { aboutButton, aboutPopapProfile, aboutPopapPlace, aboutButtonclosePlace, aboutButtonClose, aboutformName, aboutformProfession, aboutName, aboutProfession, aboutAddbutton, cardsContainer, photoTemplate, aboutFormNewPlase, aboutButtonSavePlace, aboutInputNewPlace, aboutInputNewLink, aboutPopupTypyPhoto, aboutPopupButtonClose, aboutPopupPhotoTitle, aboutPopupPhoto, formElementProfile, buttonElement, inputElement, popups } from "../components/data.js";


function createCard(item) {
  const card = new Card(item, '.photo-template', 
  (name, link) => {popupPhoto.openPicture(name,link);});
  return card.createCard();
}


function handleFormSubmit(evt) {
  aboutName.textContent = aboutformName.value;
  aboutProfession.textContent = aboutformProfession.value;
  popupProfile.closePopup();

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
const popupPlace = new PopupWithForm(aboutPopapPlace, handleFormSubmit);
popupPlace.setEventListeners();
const popupProfile = new PopupWithForm(aboutPopapProfile, handleFormSubmit);
popupProfile.setEventListeners();
const popupPhoto = new PopupWithImage(aboutPopupTypyPhoto);
popupPhoto.setEventListeners();
const user = new UserInfo({ userNameElement: aboutName, userInfoElement: aboutProfession }); 
const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
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


aboutFormNewPlase.addEventListener('submit', createNewCard);



