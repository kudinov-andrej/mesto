import '../pages/index.css';
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import { initialCards, config } from "../components/data.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import { aboutButton, aboutPopapProfile, aboutPopapPlace, aboutformName, aboutformProfession, aboutAddbutton, aboutPopapChangeAvatar, aboutPopapDeletePhoto } from "../components/data.js";


function createCard(item) {
  const card = new Card(item, '.photo-template',
    (name, link) => { popupPhoto.openPicture(name, link); });
  return card.genereateCard();
}



const handleFormSubmit = (data) => {
  user.setUserInfo(data)
  popupProfile.closePopup();

};

const ChangeAvatar = (data) => {
  user.changeAvatarPicture(data);
  popapChangeAvatar.closePopup();
}


const createNewCard = (data) => {
  const newCard = createCard(data);
  cardList.setItem(newCard);
  popupPlace.closePopup();



};


const profileValidator = new FormValidator(config, aboutPopapProfile);
const placeValidator = new FormValidator(config, aboutPopapPlace);
const aboutPopapChangeAvatarValidator = new FormValidator(config, aboutPopapChangeAvatar);


profileValidator.enableValidation();
placeValidator.enableValidation();
aboutPopapChangeAvatarValidator.enableValidation();

const popupPlace = new PopupWithForm(".popap_typy_place", createNewCard);
popupPlace.setEventListeners();


const popupProfile = new PopupWithForm('.popap_typy_profile', handleFormSubmit);
popupProfile.setEventListeners();

const popupPhoto = new PopupWithImage('.popap_typy_photo');
popupPhoto.setEventListeners();

//новый попап
const popapChangeAvatar = new PopupWithForm(".popap_typy_change-avatar", ChangeAvatar);
popapChangeAvatar.setEventListeners()

//ещё 1 попап

const popapDelPhoto = new PopupWithForm(".popap_typy_delete-photo");
popapDelPhoto.setEventListeners()

const user = new UserInfo({ userNameSelector: '.profile__name', userInfoSelector: '.profile__profession', userUrlSelector: '.profile__image'});
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

const changeAvatar = document.querySelector(".profile__button");

changeAvatar.addEventListener('click', () => {
  popapChangeAvatar.openPopup();
  placeValidator.clearErrorForm();
});

aboutAddbutton.addEventListener('click', () => {
  popupPlace.openPopup();
  placeValidator.clearErrorForm();
});






