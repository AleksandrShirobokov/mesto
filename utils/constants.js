// Переменная с набором аргументов для валидации 
export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__input_state_invalid',
    errorClass: 'popup__error_visible'
} 
// Переменная попапа
export const overlay = document.querySelectorAll('.popup');

// Блок переменных профиля
export const editButton = document.querySelector('.profile__button-edit');
export const nameInput = document.querySelector('.profile__title');
export const jobInput = document.querySelector('.profile__subtitle');
export const addButton = document.querySelector('.profile__button-add');

// Блок переменных попапа изменения профиля
export const popupEdit = document.querySelector('.popup_type_edit');
export const closeButtonEdit = document.querySelector('.popup__close_edit');
export const addNameInput = document.querySelector('.popup__input_type_name');
export const addJobInput = document.querySelector('.popup__input_type_job');
export const formEdit = document.querySelector('.popup__form_edit');

// Блок переменных попапа добавления изображения
export const popupNewCard = document.querySelector('.popup_type_new-card');
export const closeButtonNewCard = document.querySelector('.popup__close_new-card');
export const formNewCard = document.querySelector('.popup__form_new-card');
export const addNewCard = document.querySelector('.popup__save_new-card');
export const inputLink = document.querySelector('.popup__input_type_link');
export const inputTitle = document.querySelector('.popup__input_type_title');

// Блок переменных попапа открытия изображения
export const popupPicture = document.querySelector('.popup__image');           // картинка в попапе
export const popupImage = document.querySelector('.popup_type_image');         // попап открытия картинки
export const popupSubtitle = document.querySelector('.popup__subtitle');       // подпись под картинкой
export const popupImageClose = document.querySelector('.popup__close_image');  // закрытие попапа

// Переменная елементов
export const list = '.elements';

// Переменная шаблона
export const cardSelector = '.template';

// Переменная клавиши 'Escape'
export const ESC_CODE = 'Escape';

// Переменная с массивом элементов карточек
export const initialCards = [
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