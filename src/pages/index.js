import '../pages/index.css';
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import { initialCards, config } from "../components/data.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import { aboutButton, aboutPopapProfile, aboutPopapPlace, aboutformName, aboutformProfession, aboutAddbutton } from "../components/data.js";


function createCard(item) {
  const card = new Card(item, '.photo-template',
    (name, link) => { popupPhoto.openPicture(name, link); });
  return card.genereateCard();
}



const handleFormSubmit = (data) => {
  user.setUserInfo(data)
  popupProfile.closePopup();

};


const createNewCard = (data) => {
  const newCard = createCard(data);
  cardList.setItem(newCard);
  popupPlace.closePopup();



};


const profileValidator = new FormValidator(config, aboutPopapProfile);
const placeValidator = new FormValidator(config, aboutPopapPlace);
profileValidator.enableValidation();
placeValidator.enableValidation();
const popupPlace = new PopupWithForm(".popap_typy_place", createNewCard);
popupPlace.setEventListeners();
const popupProfile = new PopupWithForm('.popap_typy_profile', handleFormSubmit);
popupProfile.setEventListeners();
const popupPhoto = new PopupWithImage('.popap_typy_photo');
popupPhoto.setEventListeners();
const user = new UserInfo({ userNameSelector: '.profile__name', userInfoSelector: '.profile__profession' });
const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    cardList.setItem(cardElement);
  },
},
  '.plase'
);

cardList.renderItems();


aboutButton.addEventListener('click', () => {
  popupProfile.openPopup()
  const userData = user.getUserInfo();
  aboutformName.value = userData.name;
  aboutformProfession.value = userData.about;
  profileValidator.clearErrorForm();

});

aboutAddbutton.addEventListener('click', () => {
  popupPlace.openPopup();
  placeValidator.clearErrorForm();
});






