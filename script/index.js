const aboutButton = document.querySelector('.profile__edit-button');
const aboutPopap = document.querySelector('.popap');
const aboutButtonClose = document.querySelector('.popap__button-close');
const aboutformName = document.querySelector('.popap__input_type_name');
const aboutformProfession = document.querySelector('.popap__input_type_profession');
const aboutName = document.querySelector('.profile__name');
const aboutProfession = document.querySelector('.profile__profession');
const formElement = document.querySelector('.popap__form');


function popapOpen() {
  aboutPopap.classList.add('popap_opened');
  aboutformName.value = aboutName.textContent;
  aboutformProfession.value = aboutProfession.textContent;
}

function popapClose() {
    aboutPopap.classList.remove('popap_opened');
  
}

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    aboutName.textContent = aboutformName.value;
    aboutProfession.textContent = aboutformProfession.value;
    popapClose();

};

aboutButtonClose.addEventListener('click', popapClose);
aboutButton.addEventListener('click', popapOpen);
formElement.addEventListener('submit', handleFormSubmit); 


/* добавить карточки на страницу */

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

const photoCards = document.querySelector('.plase');
const photoTemplate = document.querySelector('.photo-template')
.content
.querySelector('.photo-plase');

initialCards.forEach(function (element)  {
	const card = photoTemplate.cloneNode(true);

	card.querySelector('.photo-plase__name').textContent = element.name;
  card.querySelector('.photo-plase__image').src = element.link;

photoCards.append(card) 

})