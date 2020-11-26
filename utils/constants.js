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
        link: 'https://i.playground.ru/i/07/60/21/00/pix/image.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://libertycity.ru/uploads/download/gtasa_globalmods/fulls/bqmr9pa2cfiad0c2o4fbd43ae3/15443076036186_zima5.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://cs1.gtavicecity.ru/screenshots/9a0d4/2018-03/original/ddc49d580f2f5ad0212eade06c0727a247cfb336/637877-enb2018-3-16-17-25-46-result.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://cs2.gamemodding.com/images/a6a59228e44f9b3d5cffe39015504435e000366ae5438ca0f06f942f382ae127.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://cs1.gtavicecity.ru/screenshots/9a0d4/2013-09/original/db38ee04a17c56d5bcf08b5c310677758181c2ee/76271-1331317640-gta-sa-2012-03-09-20-19-23-96.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://libertycity.ru/uploads/download/gtasa_objects/thumbs/sfmli3bkmv2fni5ubj384cpi35/1572774474150_4.jpg'
    },
];