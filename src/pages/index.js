// Импорт главного файла стилей
import './index.css'; 

// Импорт валидации
import FormValidator from '../components/FormValidator.js';

// Импорт вставки элементов в разметку
import Section from '../components/Section.js';

// Иморт карточки
import Card from '../components/Card.js';

// Импорт попапа с открытием картинки
import PopupWithImage from '../components/PopupWithImage.js';

// Импорт попапа с формами
import PopupWithForm from '../components/PopupWithForm.js';

// Импорт информации о пользователе
import UserInfo from '../components/UserInfo.js';

// Импорт переменных
import {
    config,
    initialCards,
    editButton,
    nameInput,
    jobInput,
    addButton,
    popupEdit,
    addNameInput,
    addJobInput,
    popupNewCard,
    popupImage,
    list,
    cardSelector,
} from '../utils/constants.js';

// Переменная с добавлением разметки карточки
const cardList = new Section({
    items: initialCards, 
    renderer: (data) => {
        addNewCard(data)},}, 
list);

// Переменная с классом открытия картинки
const fullImage = new PopupWithImage(popupImage);

// Переменная с карточкой
const addNewCard = (data) => {
    const card = new Card(
        data, 
        cardSelector, 
        (name, link) => {
            fullImage.open(name, link)
        });
    cardList.addItem(card.generateCard())
}

// Переменная с добавлением новой карточки(информации)
const addCardInfo = ({names, jobs}) => {addNewCard({name: names, link: jobs});}

// Переменная с формой добавления новой карточки
const popupAddCard = new PopupWithForm(popupNewCard, addCardInfo);

// Переменная с информацией о пользователе
const userInfo = new UserInfo(nameInput, jobInput);

// Переменная с формой изменения профиля
const popupEditProfile = new PopupWithForm(
    popupEdit, 
    ({name, job}) => {
    userInfo.setUserInfo({
        name, job
    })
});

// Переменная открытия попапа с формой добавления информации о пользователе, переданной из профиля
const editProfileInfo = () => {
    const actualInfo = userInfo.getUserInfo();
    addNameInput.value = actualInfo.name;
    addJobInput.value = actualInfo.job;
    popupEditProfile.open();
}

// Переменная открытия поппапа с формой добавления новой карточки
const editCardInfo = () => {
    popupAddCard.open();
}

// Валидация для формы с изменением профиля
const editProfileValidation = new FormValidator(config, popupEdit);

// Валидация для формы с добавлением карточки
const addCardValidation = new FormValidator(config, popupNewCard);

// Отключение валидации для профиля
editProfileValidation.enableValidation();

// Отключение валидфции для карточки
addCardValidation.enableValidation();

// Слушатель для кнопки открытия попапа добавления новой карточки
addButton.addEventListener('click', editCardInfo);

// Слушатель для кнопки открытия попапа с изменением профиля
editButton.addEventListener('click', editProfileInfo);

// Слушатель для открытия полноразмерного изображения
fullImage.setEventListeners();

// Слушатель с переменной формы добавления новой карточки
popupAddCard.setEventListeners();

// Слушатель с переменной формы добавления нового профиля
popupEditProfile.setEventListeners();

// Рендер карточек
cardList.renderItems();