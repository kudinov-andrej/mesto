const aboutButton = document.querySelector('.profile__edit-button');
const aboutPopap = document.querySelector('.popap');
const aboutButtonClose = document.querySelector('.popap__button-close');
const aboutformName = document.querySelector('.popap__form-name');
const aboutformProfession = document.querySelector('.popap__form-profession');
const aboutSave = document.querySelector('.popap__button');
const aboutName = document.querySelector('.profile__name');
const aboutProfession = document.querySelector('.profile__profession');
const formElement = document.querySelector('.popap__form');


aboutButton.addEventListener('click', () => {
    aboutPopap.classList.add('popap_opened');
});

aboutButtonClose.addEventListener('click', () => {
    aboutPopap.classList.remove('popap_opened');
});



function handleFormSubmit (evt) {
    evt.preventDefault(); 

    aboutName.textContent = aboutformName.value;
    aboutProfession.textContent = aboutformProfession.value;

};

aboutSave.addEventListener('click', () => {
    aboutPopap.classList.remove('popap_opened');
});


formElement.addEventListener('submit', handleFormSubmit); 


