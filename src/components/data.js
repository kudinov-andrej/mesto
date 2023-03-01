
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const config = {
  formSelector: '.popap__form',
  formSelectorPlace: '.popap__form_type_new-place',
  formSelectorProfile: '.popap__form_type_profile',
  inputSelector: '.popap__input',
  errorClassVisible: 'popap__error_visible',
  submitButtonSelector: '.popap__button',
  inactiveButtonClass: 'popap__button_disabled',


};


const aboutButton = document.querySelector('.profile__edit-button');
const aboutPopapProfile = document.querySelector('.popap_typy_profile');
const aboutPopapPlace = document.querySelector('.popap_typy_place');
const aboutButtonclosePlace = aboutPopapPlace.querySelector('.popap__button-close');
const aboutButtonClose = document.querySelector('.popap__button-close');
const aboutformName = document.querySelector('.popap__input_type_name');
const aboutformProfession = document.querySelector('.popap__input_type_profession');
const aboutName = document.querySelector('.profile__name');
const aboutProfession = document.querySelector('.profile__profession');
const formElementProfile = document.querySelector('.popap__form_type_profile');
const aboutAddbutton = document.querySelector('.profile__add-button');
const cardsContainer = document.querySelector('.plase');
const photoTemplate = document.querySelector('.photo-template')
  .content
  .querySelector('.photo-plase');

const aboutFormNewPlase = aboutPopapPlace.querySelector('.popap__form_type_new-place');
const aboutButtonSavePlace = aboutPopapPlace.querySelector('.popap__button');
const aboutInputNewPlace = aboutPopapPlace.querySelector('.popap__input_type_place-name');
const aboutInputNewLink = aboutPopapPlace.querySelector('.popap__input_type_link');
const aboutPopupTypyPhoto = document.querySelector('.popap_typy_photo');
const aboutPopupButtonClose = aboutPopupTypyPhoto.querySelector('.popap__button-close');
const aboutPopupPhotoTitle = aboutPopupTypyPhoto.querySelector('.popap__photo-name');
const aboutPopupPhoto = aboutPopupTypyPhoto.querySelector('.popap__photo');
const buttonElement = document.querySelector('.popap__button');
const inputElement = formElementProfile.querySelector('.popap__input');
const popups = document.querySelectorAll('.popap')

export { aboutButton, aboutPopapProfile, aboutPopapPlace, aboutButtonclosePlace, aboutButtonClose, aboutformName, aboutformProfession, aboutName, aboutProfession, aboutAddbutton, cardsContainer, photoTemplate, aboutFormNewPlase, aboutButtonSavePlace, aboutInputNewPlace, aboutInputNewLink, aboutPopupTypyPhoto, aboutPopupButtonClose, aboutPopupPhotoTitle, aboutPopupPhoto, buttonElement, formElementProfile, inputElement, popups };
export { initialCards, config }; 