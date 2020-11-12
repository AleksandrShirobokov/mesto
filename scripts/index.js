// Импорт валидации
import {FormValidator} from './FormValidator.js';

// Иморт карточки
import {Card} from './Card.js';

// Импорт переменных
import {
    config,
    initialCards,
    overlay,
    editButton,
    nameInput,
    jobInput,
    addButton,
    popupEdit,
    closeButtonEdit,
    addNameInput,
    addJobInput,
    formEdit,
    popupNewCard,
    closeButtonNewCard,
    formNewCard,
    addNewCard,
    inputLink,
    inputTitle,
    popupPicture,
    popupImage,
    popupSubtitle,
    popupImageClose,
    list,
    cardSelector,
    ESC_CODE
} from './utils.js';

// Функция создания карточки 
function createCard(data) {
    const newCard = new Card(data, cardSelector, fullImage);
    list.prepend(newCard.generateCard()); 
} 

// Функция открытия изображения
function fullImage(data) {
    popupPicture.src = data.link;              // передача источника объекта дата
    popupPicture.alt = data.name;              // передача имени объекта дата к альту  
    popupSubtitle.textContent = data.name;     // передача имени объекта дата к подписи картинки 
    openPopup(popupImage)  
}

// Универсальная функция для открытия попапа
function openPopup(popup) {                  
    popup.classList.add('popup_opened'); 
    document.addEventListener('keyup', closeOnEsc); 
}

// Унииверсальная функция для закрытия попапа
function closePopup(popup) {                
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', closeOnEsc); 
}

// Закрытие по оверлею
const onClickOverlayListener = (evt) => {
    if(evt.target === evt.currentTarget) {
    closePopup(evt.target);
    }
}
overlay.forEach(evt => evt.addEventListener('click',onClickOverlayListener))

// Функция закрытия попапа по клавише 'Escape'
function closeOnEsc(evt) {
    if(evt.key === ESC_CODE) {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

// Функция передачи значений из попапа в профиль
function submitHandlerEditProfile(evt) {
    evt.preventDefault();
    nameInput.textContent = addNameInput.value;
    jobInput.textContent = addJobInput.value;
    closePopup(popupEdit);
}

// Функция передачи значений из попапа в карточку, создание карточки 
function submitHandlerNewCard(evt) {
    evt.preventDefault();
    const item = {
            name: inputTitle.value,
            link: inputLink.value,
        };
    //создание карточки
    createCard(item);           
    closePopup(popupNewCard);
};  

// Слушатель анонимной функции, которая принимает функцию закрытия конкретного попапа, установленного в качестве параметра функции
popupImageClose.addEventListener('click', () => closePopup(popupImage));        

// Слушатель анонимной функции, которая принимает функцию открытия конкретного попапа, установленного в качестве параметра функции
closeButtonNewCard.addEventListener('click', () => closePopup(popupNewCard));   

// Слушатель анонимной функции, работающей с передачей значений из профиля в попап изменения профиля
addButton.addEventListener('click', () => {                                     
    openPopup(popupNewCard);
    addNewCard.classList.add('popup__button_invalid');
    addNewCard.disabled = true;
    inputLink.value = '';
    inputTitle.value = '';
});

// Слушатель для кнопки открытия профиля
editButton.addEventListener('click', () => {     
    addJobInput.value = jobInput.textContent;
    addNameInput.value = nameInput.textContent;
    openPopup(popupEdit);
}); 

// Слушатель кнопки закрытия профиля
closeButtonEdit.addEventListener('click', () => closePopup(popupEdit));

// Слушатели отправки формы
formEdit.addEventListener('submit', submitHandlerEditProfile);
formNewCard.addEventListener('submit', submitHandlerNewCard);

// Валидация для формы с изменением профиля
const editProfileValidation = new FormValidator(config, popupEdit);

// Валидация для формы с добавлением карточки
const addCardValidation = new FormValidator(config, popupNewCard);

// Отключение валидации для профиля
editProfileValidation.enableValidation();

// Отключение валидфции для карточки
addCardValidation.enableValidation();

// Массив с новыми карточками
initialCards.forEach(createCard);




