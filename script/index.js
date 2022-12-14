const aboutButton = document.querySelector('.profile__edit-button');
const aboutPopap = document.querySelector('.popap');
const aboutButtonClose = document.querySelector('.popap__button-close');
const aboutformName = document.querySelector('.popap__form-info_name');
const aboutformProfession = document.querySelector('.popap__form-info_profession');
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



