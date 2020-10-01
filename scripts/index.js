let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__button-edit');
let closeButton = document.querySelector('.popup__close');
let nameInput = document.querySelector('.profile__title');
let addNameInput = document.querySelector('.popup__input-text_type_name');
let jobInput = document.querySelector('.profile__subtitle');
let addJobInput = document.querySelector('.popup__input-text_type_job');
let formElement = document.querySelector('form');

function openPopup() {
    popup.classList.add('popup_opened');
    addNameInput.value = nameInput.textContent;
    addJobInput.value = jobInput.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameInput.textContent = addNameInput.value;
    jobInput.textContent = addJobInput.value;
    closePopup();
}
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);