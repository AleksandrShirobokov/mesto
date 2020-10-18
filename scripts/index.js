const editButton = document.querySelector('.profile__button-edit');
const nameInput = document.querySelector('.profile__title');
const jobInput = document.querySelector('.profile__subtitle');
const addButton = document.querySelector('.profile__button-add');

const popupEdit = document.querySelector('.popup_type_edit');
const closeButton = document.querySelector('.popup__close');
const addNameInput = document.querySelector('.popup__input-text_type_name');
const addJobInput = document.querySelector('.popup__input-text_type_job');
const formEdit = document.querySelector('.popup__form_edit');

const popupNewCard = document.querySelector('.popup_type_new-card');
const closeButtonNewCard = document.querySelector('.popup__close_new-card');
const formNewCard = document.querySelector('.popup__form_new-card');
const addNewCard = document.querySelector('.popup__save_new-card');
const inputLink = document.querySelector('.popup__input-text_type_link');
const inputTitle = document.querySelector('.popup__input-text_type_title');

const popupPicture = document.querySelector('.popup__image');           // картинка в попапе
const popupImage = document.querySelector('.popup_type_image');         // попап открытия картинки
const popupSubtitle = document.querySelector('.popup__subtitle');       // подпись под картинкой
const popupImageClose = document.querySelector('.popup__close_image');  // закрытие попапа

const list = document.querySelector('.elements');

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

    const items = initialCards.map(element => getItems(element))

    list.append(...items)
};

const handlerRemove = (evt) => {
    evt.target.parentElement.remove();
}

const addLike = (evt) => {
    evt.target.classList.toggle('element__image-like_active');
}

const getItems = (data) => {

    const card = template.content.cloneNode(true);
    const cardPicture = card.querySelector('.element__image');
    card.querySelector('.element__title').textContent = data.name;
    cardPicture.src = data.link;
    cardPicture.alt = data.name;

    const likeButton = card.querySelector('.element__image-like');
    const deleteButton = card.querySelector('.element__delete');
    const elementImage = card.querySelector('.element__image');

    
    deleteButton.addEventListener('click', handlerRemove);
    likeButton.addEventListener('click', addLike) 

    elementImage.addEventListener('click', (evt) => {  // функция увеличения картики
        popupPicture.src = evt.target.src;             // текущий источник
        popupSubtitle.textContent = evt.target.alt;    // текущее имя. Добрый день(или ночь)) Корректно ли использовать здесь данный метод? 
        popupPicture.alt = evt.target.name;            // текущий альт
        openPopup('openFullImage');
    });

    return card;
};

const bindHandlers = () => 
    addNewCard.addEventListener('click', () => {
        const item = getItems({
            name: inputTitle.value,
            link: inputLink.value,
        });

        list.prepend(item);
        formNewCard.reset();
    });

renderList();
bindHandlers();

function openPopup(param) {
    if (param === 'addNewCard') {
        popupNewCard.classList.add('popup_opened');
    }

    if (param === 'openFullImage') {
        popupImage.classList.add('popup_opened');
    }

    if (param === 'editProfile') {
        popupEdit.classList.add('popup_opened');
        addNameInput.value = nameInput.textContent;
        addJobInput.value = jobInput.textContent;
    }
}

function closePopup(param) {
    if (param === 'closeNewCard') {
        popupNewCard.classList.remove('popup_opened');
    }

    if (param === 'closeFullImage') {
        popupImage.classList.remove('popup_opened');
    }

    if (param === 'closeEditProfile') {
        popupEdit.classList.remove('popup_opened');
    }
}

function SubmitHandler(evt) {
    evt.preventDefault();
    nameInput.textContent = addNameInput.value;
    jobInput.textContent = addJobInput.value;
    closePopup('closeEditProfile');
}

function SubmitHandlerNewCard(evt) {
    evt.preventDefault();
    closePopup('closeNewCard');
}

popupImageClose.addEventListener('click', () => closePopup('closeFullImage'));
closeButtonNewCard.addEventListener('click', () => closePopup('closeNewCard'));
addButton.addEventListener('click', () => openPopup('addNewCard'));
editButton.addEventListener('click', () => openPopup('editProfile'));
closeButton.addEventListener('click', () => closePopup('closeEditProfile'));
formEdit.addEventListener('submit', SubmitHandler);
formNewCard.addEventListener('submit', SubmitHandlerNewCard);
