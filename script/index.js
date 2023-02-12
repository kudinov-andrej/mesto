import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { initialCards, config } from "./data.js";
import { aboutButton, aboutPopapProfile, aboutPopapPlace, aboutButtonclosePlace, aboutButtonClose, aboutformName, aboutformProfession, aboutName, aboutProfession, aboutAddbutton, cardsContainer, photoTemplate, aboutFormNewPlase, aboutButtonSavePlace, aboutInputNewPlace, aboutInputNewLink, aboutPopupTypyPhoto, aboutPopupButtonClose, aboutPopupPhotoTitle, aboutPopupPhoto, formElementProfile, buttonElement, inputElement, popups } from "./data.js";

function openPopup(element) {
  element.classList.add('popap_opened');
  document.addEventListener('keydown', closeByEsc)

};


function closeByOverlay(evt) {
  if (evt.target.classList.contains('popap') || evt.target.classList.contains('popap__button-close')) {
    closePopup(evt.currentTarget);
  }
};

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popap_opened');
    closePopup(openedPopup);
  }
}


function closePopup(element) {
  element.classList.remove('popap_opened');
  document.removeEventListener('keydown', closeByEsc);

}


function createProfile() {
  aboutformName.value = aboutName.textContent;
  aboutformProfession.value = aboutProfession.textContent;
  profileValidator.clearErrorForm();

};

function createPlase() {
  aboutInputNewPlace.value = "";
  aboutInputNewLink.value = "";
  placeValidator.clearErrorForm();

};

function handleFormSubmit(evt) {
  evt.preventDefault();
  aboutName.textContent = aboutformName.value;
  aboutProfession.textContent = aboutformProfession.value;
  closePopup(aboutPopapProfile);

};




function openPicture(name, link) {
  aboutPopupPhoto.alt = name;
  aboutPopupPhoto.src = link;
  aboutPopupPhotoTitle.textContent = name;
  openPopup(aboutPopupTypyPhoto);
};


function createNewCard(evt) {
  evt.preventDefault();
  const newCard = createCard({ name: aboutInputNewPlace.value, link: aboutInputNewLink.value });
  cardsContainer.prepend(newCard);
  closePopup(aboutPopapPlace);
  evt.target.reset();
  evt.submitter.classList.add('.popap__button_disabled')
  evt.submitter.disabled = true;


};


function createCard(item) {
  const card = new Card(item, '.photo-template', openPicture);
  return card.createCard();
}


function renderStartCards(item) {
  initialCards.forEach(item => {
    appendCard(item);
  });
};

function appendCard(item) {
  cardsContainer.append(createCard(item));
}



const profileValidator = new FormValidator(config, aboutPopapProfile);
const placeValidator = new FormValidator(config, aboutPopapPlace);
profileValidator.enableValidation();
placeValidator.enableValidation();
renderStartCards()

aboutAddbutton.addEventListener('click', () => {
  openPopup(aboutPopapPlace)
  createPlase()
});

aboutButton.addEventListener('click', () => {
  openPopup(aboutPopapProfile)
  createProfile()
});

popups.forEach((popup) =>{  
  popup.addEventListener('mousedown', closeByOverlay) 
})

aboutFormNewPlase.addEventListener('submit', createNewCard);
formElementProfile.addEventListener('submit', handleFormSubmit);


