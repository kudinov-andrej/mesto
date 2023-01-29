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
  console.log(formElementProfile)
  
const aboutFormNewPlase = aboutPopapPlace.querySelector('.popap__form_type_new-place');
const aboutButtonSavePlace = aboutPopapPlace.querySelector('.popap__button');
const aboutInputNewPlace = aboutPopapPlace.querySelector('.popap__input_type_place-name');
const aboutInputNewLink = aboutPopapPlace.querySelector('.popap__input_type_link');
const aboutPopupTypyPhoto = document.querySelector('.popap_typy_photo');
const aboutPopupButtonClose = aboutPopupTypyPhoto.querySelector('.popap__button-close');
const aboutPopupPhotoTitle = aboutPopupTypyPhoto.querySelector('.popap__photo-name');
const aboutPopupPhoto = aboutPopupTypyPhoto.querySelector('.popap__photo');
const popup = document.querySelector('.popap');
const buttonElement = document.querySelector('.popap__button');
const inputElement = formElementProfile.querySelector('.popap__input'); 
 





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
 resetValidition(formElementProfile, config);

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
  cardsContainer.prepend(newCard);
  closePopup(aboutPopapPlace);
  evt.target.reset();
  evt.submitter.classList.add('.popap__button_disabled')
  evt.submitter.disabled = true; 
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
    cardsContainer.prepend(cardHtml);
  })
};
aboutPopapPlace.addEventListener('click', closeByOverlay)
aboutPopupTypyPhoto.addEventListener('click', closeByOverlay)
aboutPopapProfile.addEventListener('click', closeByOverlay)
aboutFormNewPlase.addEventListener('submit', createNewCard);
aboutAddbutton.addEventListener('click', () => openPopup(aboutPopapPlace));
aboutButton.addEventListener('click', () => openPopup(aboutPopapProfile));
aboutButton.addEventListener('click', () => createProfile());
formElementProfile.addEventListener('submit', handleFormSubmit);


renderCards();