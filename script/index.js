const aboutButton = document.querySelector('.profile__edit-button');
const aboutPopapprofile = document.querySelector('.popap_typy_profile');
const aboutPopapplace = document.querySelector('.popap_typy_place');
const aboutButtoncloseplace = aboutPopapplace.querySelector('.popap__button-close');
const aboutButtonClose = document.querySelector('.popap__button-close');
const aboutformName = document.querySelector('.popap__input_type_name');
const aboutformProfession = document.querySelector('.popap__input_type_profession');
const aboutName = document.querySelector('.profile__name');
const aboutProfession = document.querySelector('.profile__profession');
const formElement = document.querySelector('.popap__form');
const aboutAddbutton = document.querySelector('.profile__add-button');


function popapOpen() {
  aboutPopapprofile.classList.add('popap_opened');
  aboutformName.value = aboutName.textContent;
  aboutformProfession.value = aboutProfession.textContent;
}

function popapClose() {
  aboutPopapprofile.classList.remove('popap_opened');
  aboutPopapplace.classList.remove('popap_opened');
};

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    aboutName.textContent = aboutformName.value;
    aboutProfession.textContent = aboutformProfession.value;
    popapClose();

};


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
    

function createCard({name, link})  {
	const card = photoTemplate.cloneNode(true);
	const cardName = card.querySelector('.photo-plase__name');
  const cardLink =  card.querySelector('.photo-plase__image');

  cardName.textContent = name;
  cardLink.src = link;

return card;

};

function renderCards() {
  initialCards.forEach(item => {
    const cardHtml = createCard(item);
    photoCards.append(cardHtml);
  })
}

renderCards();

function addPlace() {

  aboutPopapplace.classList.add('popap_opened');
  aboutformPlacename.value = cardName.textContent;
  aboutformLink.value = cardLink.src;
}

aboutButtoncloseplace.addEventListener('click', popapClose);
aboutAddbutton.addEventListener('click', addPlace);
aboutButtonClose.addEventListener('click', popapClose);
aboutButton.addEventListener('click', popapOpen);
formElement.addEventListener('submit', handleFormSubmit); 