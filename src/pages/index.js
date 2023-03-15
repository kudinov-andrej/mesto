import '../pages/index.css';
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import { config } from "../components/data.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import {token, URL, aboutButton, aboutPopapProfile, aboutPopapPlace, aboutformName, aboutformProfession, aboutAddbutton, aboutPopapChangeAvatar, aboutPopapDeletePhoto } from "../components/data.js";
import Api from "../components/Api.js";
import PopupWithFormDeleteCard from "../components/PopupWithFormDeleteCard.js";

function createCard(item) {
  const card = new Card(item,
     currentUserId,
    '.photo-template',
    deleteCard,
    (name, link) => { popupPhoto.openPicture(name, link); });
  return card.genereateCard();
  
}



const handleFormSubmit = (item) => {
  api.setUserInfo(item)
  .then((data) => {
      user.setUserInfo(data);
  })
  popupProfile.closePopup();

};

/*
api.changeProfile().then((data) => {
    console.log(data)
    user.setUserInfo(data)
  })

  */

const createNewCard = (data, currentUserId) => {
  api.createCard(data).then((newData) => {
  const newCard = createCard(newData, currentUserId);
  cardList.setItem(newCard);
 })
 .catch((err) => {
  console.log(err);
 });
  popupPlace.closePopup();

};

function deleteCard(id, element) {
  return api.deleteCard(id).then(() => {
    console.log("меняем статус обратно");
    element.remove();
  });
}

const ChangeAvatar = (item) => {
  api.setUserAvatar(item)
  .then((data) => {
    user.changeAvatarPicture(data);
  })
  popapChangeAvatar.closePopup();
}

const api = new Api(
  "https://mesto.nomoreparties.co/v1/cohort-61/",
  "8cfb2ade-293c-430d-a1cd-027f0315247f"
)

let currentUserId;

 Promise.all([api.getCards(), api.getCurrentUser()])
 .then(([items, userData]) => {
  cardList.renderItems(items);
  currentUserId = user._id;
  user.setUserInfo(userData);
  avatarImg.style.backgroundImage = `url(${userData.avatar})`;
 })
 .catch((err) => {
   console.log(err);
 });
 

const cardList = new Section({
  renderer: (item) => {
    const cardElement = createCard(item);
    cardList.setItem(cardElement);
  },
},
  '.plase'
);




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
/*
const popapDelPhoto = new PopupWithForm(".popap_typy_delete-photo");
popapDelPhoto.setEventListeners()
*/

const user = new UserInfo({ userNameSelector: '.profile__name', userInfoSelector: '.profile__profession', userUrlSelector: '.profile__image'});



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






