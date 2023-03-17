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

function createCard(item,) {
  const card = new Card(item,
     currentUserId,
    '.photo-template',
    deleteCard,
    likeClick,
    (name, link) => { popupPhoto.openPicture(name, link); });
  return card.genereateCard();
  
}



function likeClick(card, data) {
  const promise = card.isLiked() ? api.deleteLike(data._id) : api.setLike(data._id);
  promise
      .then((data) => {
          card.setLike(data);
      })
      .catch((err) => {
          console.log(`${err}`);
      });
}

const handleFormSubmit = (item) => {
  popupProfile.renderLoading(true);
  api.setUserInfo(item)
  .then((data) => {
      user.setUserInfo(data);
  })
  .finally((data) => {
    popupProfile.renderLoading(false); 
   }); 
   popupProfile.closePopup();

};

const createNewCard = (data, currentUserId) => {
  popupPlace.renderLoading(true);
  api.createCard(data)
  .then((newData) => {
  const newCard = createCard(newData, currentUserId);
  cardList.setItem(newCard);
 })
 .catch((err) => {
  console.log(err);
 })
 .finally(() => {
  popupPlace.renderLoading(false); 
 }); 

  popupPlace.closePopup();

};



function deleteCard(id, element) {
  popupDeleteCard.openPopup();
  popupDeleteCard.setFormSubmitHandler(() => {
return api.deleteCard(id).then(() => {
    element.remove();
    popupDeleteCard.closePopup() 
  }); 
})
}
/*
function setLike (likes) {
  return api.setLike(likes).then(() => {
    card.activeHard(likes)
  }); 

}
*/
const ChangeAvatar = (item) => {
  popapChangeAvatar.renderLoading(true);
  api.setUserAvatar(item)
  .then((data) => {
    user.changeAvatarPicture(data); 
  })
 .finally((data) => {
  popapChangeAvatar.renderLoading(false); 
 }); 
  popapChangeAvatar.closePopup(); 
}

const api = new Api(
  "https://mesto.nomoreparties.co/v1/cohort-61/",
  "8cfb2ade-293c-430d-a1cd-027f0315247f"
)

let currentUserId;

 Promise.all([api.getCards(), api.getCurrentUser()])
 .then(([items, userData]) => {
  currentUserId = userData._id;
  cardList.renderItems(items);
  user.setUserInfo(userData);

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


const user = new UserInfo({ userNameSelector: '.profile__name', userInfoSelector: '.profile__profession', userUrlSelector: '.profile__image'});

const popupDeleteCard = new PopupWithFormDeleteCard(".popap_typy_delete-photo")
popupDeleteCard.setEventListeners()

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






