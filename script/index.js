const aboutButton = document.querySelector('.profile__edit-button');
const aboutPopapProfile = document.querySelector('.popap_typy_profile');
const aboutPopapPlace = document.querySelector('.popap_typy_place');
const aboutButtonclosePlace = aboutPopapPlace.querySelector('.popap__button-close');
const aboutButtonClose = document.querySelector('.popap__button-close');
const aboutformName = document.querySelector('.popap__input_type_name');
const aboutformProfession = document.querySelector('.popap__input_type_profession');
const aboutName = document.querySelector('.profile__name');
const aboutProfession = document.querySelector('.profile__profession');
const formElement = document.querySelector('.popap__form');
const aboutAddbutton = document.querySelector('.profile__add-button');
const photoCards = document.querySelector('.plase');
const photoTemplate = document.querySelector('.photo-template')
  .content
  .querySelector('.photo-plase');
const aboutFormNewPlase = aboutPopapPlace.querySelector('.popap__form');
const aboutButtonSavePlace = aboutPopapPlace.querySelector('.popap__button');
const aboutInputNewPlace = aboutPopapPlace.querySelector('.popap__input_type_place-name');
const aboutInputNewLink = aboutPopapPlace.querySelector('.popap__input_type_link');
const aboutPopupTypyPhoto = document.querySelector('.popap_typy_photo');
const aboutPopupButtonClose = aboutPopupTypyPhoto.querySelector('.popap__button-close');
const aboutPopupPhotoTitle = aboutPopupTypyPhoto.querySelector('.popap__photo-name');
const aboutPopupPhoto = aboutPopupTypyPhoto.querySelector('.popap__photo');
const popup = document.querySelector('.popap');


const inputElement = formElement.querySelector('.popap__input');



function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  
};

function hideInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = " ";
  
};



function isValid (formElement, inputElement) {
  if (!inputElement.validity.valid) {
        
    showInputError(formElement, inputElement,  inputElement.validationMessage);
  } else {

    hideInputError(formElement, inputElement,  inputElement.validationMessage);
    
  }
};


function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.popap__input'));
  inputList.forEach((inputElement) => {
  inputElement.addEventListener('input', () => {
    isValid(formElement, inputElement)
    });
  });
}; 

function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.popap__form'));
 
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};



enableValidation(); 




function openPopup(element) {
  element.classList.add('popap_opened');

  setEventListenerClosePopup(element)

};

function setEventListenerClosePopup(element) {

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closePopup(element)
    }
    });
    
    element.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popap') || evt.target.classList.contains('popap__button-close')) {
        closePopup(element)
      }
    });

}


// снять обработчики с функций

function closePopup(element) {
  element.classList.remove('popap_opened');
  
}


function disableButton(buttonElement){

  buttonElement.setAttribute("disable", "disable",) 
};





function createProfile() {
  aboutformName.value = aboutName.textContent;
  aboutformProfession.value = aboutProfession.textContent;

};

function handleFormSubmit(evt) {
  evt.preventDefault();
  aboutName.textContent = aboutformName.value;
  aboutProfession.textContent = aboutformProfession.value;
  closePopup(aboutPopapProfile);

};


function deleteCard(event) {
  const deleteCard = event.target.closest('.photo-plase').remove();

};

function activeHard(evt) {
  evt.target.classList.toggle("hard_active");
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
  photoCards.prepend(newCard);
  closePopup(aboutPopapPlace);
  evt.target.reset();

};
function createCard(element) {
  const card = photoTemplate.cloneNode(true);
  card.querySelector('.photo-plase__name').textContent = element.name;
  const photo = card.querySelector('.photo-plase__image');
  photo.src = element.link;
  photo.alt = element.name;

  const likeButton = card.querySelector('.photo-plase__hard');
  likeButton.addEventListener("click", activeHard);

  const aboutDeleteCard = card.querySelector('.photo-plase__delete-button');
  aboutDeleteCard.addEventListener("click", deleteCard);

  photo.addEventListener('click', () => openPicture(element.name, element.link));

  return card;

};

function renderCards() {
  initialCards.forEach(item => {
    const cardHtml = createCard(item);
    photoCards.prepend(cardHtml);
  })
};



aboutFormNewPlase.addEventListener('submit', createNewCard);
aboutAddbutton.addEventListener('click', () => openPopup(aboutPopapPlace));
aboutButton.addEventListener('click', () => openPopup(aboutPopapProfile));
formElement.addEventListener('submit', handleFormSubmit);


renderCards();