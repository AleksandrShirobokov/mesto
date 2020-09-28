let popup = document.querySelector('.popup')
let editButton = document.querySelector('.profile__button-edit')
let closeButton = document.querySelector('.popup__close')
editButton.addEventListener('click', openPopup)

function openPopup() {
    popup.style.display = "flex";
}

closeButton.addEventListener('click', closePopup)

function closePopup() {
    popup.style.display = "none";
    addNameInput.value = nameInput.textContent;
    addJobInput.value = jobInput.textContent;
}

let nameInput = document.querySelector('.profile__title')
let addNameInput = document.querySelector('.popup__title-edit')
let jobInput = document.querySelector('.profile__subtitle')
let addJobInput = document.querySelector('.popup__subtitle-edit')
addNameInput.value = nameInput.textContent;
addJobInput.value = jobInput.textContent;

let addProfile = document.querySelector('.popup__save')
addProfile.addEventListener('click', addP);

function addP() {
    nameInput.textContent = addNameInput.value;
    jobInput.textContent = addJobInput.value;
    popup.style.display = "none";
}