const aboutButton = document.querySelector('.profile__edit-button');
const aboutPopapProfile = document.querySelector('.popap_typy_profile');
const aboutPopapPlace = document.querySelector('.popap_typy_place');
const aboutButtonclosePlace =  aboutPopapPlace.querySelector('.popap__button-close');
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
const aboutFormNewPlase =  aboutPopapPlace.querySelector('.popap__form');
const aboutButtonSavePlace =  aboutPopapPlace.querySelector('.popap__button');
const aboutInputNewPlace =  aboutPopapPlace.querySelector('.popap__input_type_place-name');
const aboutInputNewLink =  aboutPopapPlace.querySelector('.popap__input_type_link');




function popapOpen() {
  aboutPopapProfile.classList.add('popap_opened');
  aboutformName.value = aboutName.textContent;
  aboutformProfession.value = aboutProfession.textContent;
}

function popapClose() {
  aboutPopapProfile.classList.remove('popap_opened');
   aboutPopapPlace.classList.remove('popap_opened');
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

    

function createCard(element)  {
	const card = photoTemplate.cloneNode(true);
	card.querySelector('.photo-plase__name').textContent = element.name;
  card.querySelector('.photo-plase__image').src = element.link;

  
  const likeButton = card.querySelector('.photo-plase__hard');
  likeButton.addEventListener("click", (evt) => activeHard(evt));

  const aboutDeleteCard = card.querySelector('.photo-plase__delete-button');
  aboutDeleteCard.addEventListener("click", (evt) => deleteCard(evt));


return card;

};

function renderCards() {
  initialCards.forEach(item => {
    const cardHtml = createCard(item);
    photoCards.prepend(cardHtml);
  })
}

renderCards();

function addPlace() {
   aboutPopapPlace.classList.add('popap_opened');
  
}


// создать
function createNewCard (evt) {
  evt.preventDefault();
  const newCard = createCard({name: aboutInputNewPlace.value, link: aboutInputNewLink.value});
  photoCards.prepend(newCard);
  popapClose(aboutPopapPlace);
  evt.target.reset();

};

// удалить
function deleteCard(event) {
	const deleteCard = event.target.closest('.photo-plase').remove();
  
};

// поставить лайк
function activeHard(evt) {
  evt.target.classList.toggle("hard_active");
};




aboutFormNewPlase.addEventListener('submit', createNewCard);
aboutButtonclosePlace.addEventListener('click', popapClose);
aboutAddbutton.addEventListener('click', addPlace);
aboutButtonClose.addEventListener('click', popapClose);
aboutButton.addEventListener('click', popapOpen);
formElement.addEventListener('submit', handleFormSubmit); 
