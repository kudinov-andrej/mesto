import '../pages/index.css';
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import { config } from "../util/data.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import { changeAvatarButton, aboutButton, aboutPopapProfile, aboutPopapPlace, aboutformName, aboutformProfession, aboutAddbutton, aboutPopapChangeAvatar, aboutPopapDeletePhoto } from "../util/data.js";
import Api from "../components/Api.js";
import PopupWithFormDeleteCard from "../components/PopupWithFormDeleteCard.js";

function createCard(item) {
  const card = new Card(item,
    currentUserId,
    '.photo-template',
    deleteCard,
    likeClick,
    (name, link) => { popupPhoto.openPicture(name, link); });
  return card.genereateCard();

}

function likeClick(card) {
  const promise = card.isLiked(card) ? api.deleteLike(card._id) : api.setLike(card._id);
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
      popupProfile.closePopup();
    })
    .catch((err) => {
      console.log(`${err}`);
    })
    .finally((data) => {
      popupProfile.renderLoading(false);
    });
  

};

const createNewCard = (data, currentUserId) => {
  popupPlace.renderLoading(true);
  api.createCard(data)
    .then((newData) => {
      const newCard = createCard(newData, currentUserId);
      cardList.setItem(newCard);
      popupPlace.closePopup();
    })
    .catch((err) => {
      console.log(`${err}`);
    })
    .finally(() => {
      popupPlace.renderLoading(false);
    });
      
};



function deleteCard(id, element) {
  popupDeleteCard.openPopup();
  popupDeleteCard.setFormSubmitHandler(() => {
    return api.deleteCard(id)
      .then(() => {
        element.remove();
        popupDeleteCard.closePopup()
      })
      .catch((err) => {
        console.log(`${err}`);
      })
  })
}

const changeAvatar = (item) => {
  popapChangeAvatar.renderLoading(true);
  api.setUserAvatar(item)
    .then((data) => {
      user.changeAvatarPicture(data);
      popapChangeAvatar.closePopup();
    })
    .catch((err) => {
      console.log(`${err}`);
    })
    .finally((data) => {
      popapChangeAvatar.renderLoading(false);
    });
  
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
const popupProfile = new PopupWithForm('.popap_typy_profile', handleFormSubmit);
const popapChangeAvatar = new PopupWithForm(".popap_typy_change-avatar", changeAvatar);
const popupPhoto = new PopupWithImage('.popap_typy_photo');
const popupDeleteCard = new PopupWithFormDeleteCard(".popap_typy_delete-photo");
popupPlace.setEventListeners();
popupProfile.setEventListeners();
popapChangeAvatar.setEventListeners()
popupPhoto.setEventListeners();
popupDeleteCard.setEventListeners()
const user = new UserInfo({ userNameSelector: '.profile__name', userInfoSelector: '.profile__profession', userUrlSelector: '.profile__image' });

aboutButton.addEventListener('click', () => {
  popupProfile.openPopup()
  const userData = user.getUserInfo();
  aboutformName.value = userData.name;
  aboutformProfession.value = userData.about;
  profileValidator.clearErrorForm();

});


changeAvatarButton.addEventListener('click', () => {
  popapChangeAvatar.openPopup();
  placeValidator.clearErrorForm();
});

aboutAddbutton.addEventListener('click', () => {
  popupPlace.openPopup();
  placeValidator.clearErrorForm();
});






