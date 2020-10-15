
let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__button-edit');
let closeButton = document.querySelector('.popup__close');
let closeButtonCard = document.querySelector('.popup-image__close');
let nameInput = document.querySelector('.profile__title');
let addNameInput = document.querySelector('.popup__input-text_type_name');
let jobInput = document.querySelector('.profile__subtitle');
let addJobInput = document.querySelector('.popup__input-text_type_job');
let formElement = document.querySelector('.popup__form');
let formImage = document.querySelector('.popup-image__form');
let addButton = document.querySelector('.profile__button-add');
let popupImage = document.querySelector('.popup-image');
const list = document.querySelector('.elements');
const addImage = document.querySelector('.popup-image__save');
let inputLink = document.querySelector('.popup-image__input-text_type_job');
let inputName = document.querySelector('.popup-image__input-text_type_name');
const template = document.querySelector('.template');

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
    },
];



const renderList = () => {

    const items = initialCards.map(e => getItems(e.link, e.name))

    list.append(...items)
};

const handlerRemove = (evt) => {
    evt.target.parentElement.remove();
}

const addLike = (evt) => {
    evt.target.classList.toggle('element__image-like_active');
}



const getItems = (link, name) => {

    const card = template.content.cloneNode(true);
    card.querySelector('.element__title').innerText = name;
    card.querySelector('.element__image').src = link;
    card.querySelector('.element__image').alt = name;

    let likeButton = card.querySelector('.element__image-like');
    let deleteButton = card.querySelector('.element__delete');
    const img = card.querySelector('.element__image');

    img.addEventListener('click', openPopupExtra);
    deleteButton.addEventListener('click', handlerRemove);
    likeButton.addEventListener('click', addLike)

    return card;
};

const bindHandlers = () =>
    addImage.addEventListener('click', () => {
        const item = {
            name: inputName.value,
            link: inputLink.value,
        };

        initialCards.push(item);
        console.log(initialCards);

        list.prepend(getItems(item.link, item.name));
        CardUpdate()

        inputLink.value = '';
        inputName.value = '';
    })

renderList();
bindHandlers();


function openPopup() {
    popup.classList.add('popup_opened');
    addNameInput.value = nameInput.textContent;
    addJobInput.value = jobInput.textContent;
}

function openPopupImage() {
    popupImage.classList.add('popup_opened');
}

function closePopupImage() {
    popupImage.classList.remove('popup_opened')
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameInput.textContent = addNameInput.value;
    jobInput.textContent = addJobInput.value;
    closePopup();
}

function formSubmitHandlerImage(evt) {
    evt.preventDefault();
    closePopupImage();
}

const extraImage = document.querySelector('.popup-extra__image');
const extraPopup = document.querySelector('.popup-extra');

function openPopupExtra() {
    extraPopup.classList.add('popup_opened');
    // console.log(getItem(card))
    // console.log(extraPopup);
}

const extraClose = document.querySelector('.popup-extra__close');
function closePopupExtra() {
    extraPopup.classList.remove('popup_opened');
}

extraClose.addEventListener('click', closePopupExtra);

closeButtonCard.addEventListener('click', closePopupImage);
addButton.addEventListener('click', openPopupImage);
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
formImage.addEventListener('submit', formSubmitHandlerImage);

const extraTitle = document.querySelector('.popup-extra__title');

function CardUpdate() {
    const allCard = document.querySelectorAll('.element');
    allCard.forEach(e => e.addEventListener('click', () => {

        let getText = e.children[2].innerText; //получаем заголовок
        let getImg = e.children[0].src //поулчаем ссылку на изображение
        extraImage.src = getImg;
        extraTitle.innerText = getText;

        console.log(getImg);
        console.log(getText);
        console.log(e);

    }))
}

CardUpdate();