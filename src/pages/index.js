// Импорт главного файла стилей
import './index.css'; 

// Иморт карточки
import Card from '../components/Card.js';

// Импорт попапа с формами
import PopupWithForm from '../components/PopupWithForm.js';

// Импорт попапа с открытием картинки
import PopupWithImage from '../components/PopupWithImage.js';

// Импорт вставки элементов в разметку
import Section from '../components/Section.js';

// Импорт информации о пользователе
import UserInfo from '../components/UserInfo.js';

// Импорт валидации
import FormValidator from '../components/FormValidator.js';

// Импорт удаления карточки
import PopupWithDel from '../components/PopupWithDel.js';

// Импорт Апи
import Api from '../components/Api.js';

// Импорт переменных
import {
    config,
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
    avatar,
    popupAvatar,
    changeAvatarButton,
    popupDeleteSelector
} from '../utils/constants.js';

// Переменная айди
let userId;

//Переменная Апи
const api = new Api({
    url:"https://mesto.nomoreparties.co/v1/cohort-20",
    headers: {
        authorization:'3fe373ef-33cc-49b3-8f02-e54eba1f506e',
        "content-type":'application/json'
    } 
})    

// Переменная с классом открытия картинки
const fullImage = new PopupWithImage(popupImage);

// Переменная с информацией о пользователе
const userInfo = new UserInfo(nameInput, jobInput, avatar);

// Переменная с удалением карточки
const popupDelete = new PopupWithDel(popupDeleteSelector, {
    handleFormSubmit: (cardId) => {
        popupDelete.renderLoading(true);
        api.delCard(cardId)
        .then(() => {
            popupDelete.deleteCard(); 
            popupDelete.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupDelete.renderLoading(false);
        })
    }
})

// Промис с информацией пользователя и карточками
Promise.all([
    api.getUserInfoMe(),
    api.getInitialCards()
])
.then((values) => {
    const [userData, cardsData] = values;
    userInfo.setUserInfo(userData);
    userInfo.setAvatar(userData);
    userId = userData._id;
    cardList.renderItems(cardsData.reverse());
})
.catch(err => console.log(err));

// Переменная с добавлением разметки карточки
const cardList = new Section({ 
    renderer: (data) => {
        cardList.addItem(addNewCard(data))},}, 
list);

// Переменная с карточкой
const addNewCard = (data) => {
    const card = new Card(
        data, 
        cardSelector, 
        (name, link) => {
            fullImage.open(name, link)
        },
        api,
        userId, {
        handleDeleteClick: () => {
            popupDelete.open(card, data._id)
        }
        });
    return card.generateCard()
}

// Переменная с формой добавления новой карточки
const popupAddCard = new PopupWithForm(popupNewCard, {
    handleFormSubmit:(data) => {
        popupAddCard.renderLoading(false)
        api.postNewCard(data)
        .then((data)=> {
            cardList.addItem(addNewCard(data));
            popupAddCard.close();
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            popupAddCard.renderLoading(true);
        })
    }
});

// Переменная с формой изменения профиля
const popupEditProfile = new PopupWithForm(
    popupEdit, 
    ({handleFormSubmit:(data) => {
        popupEditProfile.renderLoading(false)
        api.changeUserInfo(data)
        .then((data) => {
            userInfo.setUserInfo(data);
            popupEditProfile.close();
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            popupEditProfile.renderLoading(true);
        })
    }})
)

// Переменная с формой изменения аватара
const popupEditAvatar = new PopupWithForm(
    popupAvatar,
    ({handleFormSubmit:(data) => {
        popupEditAvatar.renderLoading(false)
        api.editAvatar(data)
        .then((data) => {
            userInfo.setAvatar(data);
            popupEditAvatar.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupEditAvatar.renderLoading(true);
        })
    }})
)

// Переменная открытия попапа изменения аватара
const changeAvatar = () => {
    popupEditAvatar.open();
}

// Переменная открытия попапа с формой добавления информации о пользователе, переданной из профиля
const editProfileInfo = () => {
    const actualInfo = userInfo.getUserInfo();
    addNameInput.value = actualInfo.name;
    addJobInput.value = actualInfo.about;
    popupEditProfile.open();
}

// Переменная открытия поппапа с формой добавления новой карточки
const editCardInfo = () => {
    popupAddCard.open();
}

// Валидация для формы изменения аватара
const editProfileAvatar = new FormValidator(config, popupAvatar);

// Валидация для формы с изменением профиля
const editProfileValidation = new FormValidator(config, popupEdit);

// Валидация для формы с добавлением карточки
const addCardValidation = new FormValidator(config, popupNewCard);

// Отключение валидации для аватара
editProfileAvatar.enableValidation();

// Отключение валидации для профиля
editProfileValidation.enableValidation();

// Отключение валидфции для карточки
addCardValidation.enableValidation();

// Слушатель для кнопки открытия попапа изменения аватара
changeAvatarButton.addEventListener('click', changeAvatar);

// Слушатель для кнопки открытия попапа добавления новой карточки
addButton.addEventListener('click', editCardInfo);

// Слушатель для кнопки открытия попапа с изменением профиля
editButton.addEventListener('click', editProfileInfo);

// Слушатель для открытия полноразмерного изображения
fullImage.setEventListeners();

// Слушатель удаления
popupDelete.setEventListeners();

// Слушатель с переменной формы добавления новой карточки
popupAddCard.setEventListeners();

// Слушатель с переменной формы добавления нового профиля
popupEditProfile.setEventListeners();

// Слушатель с переменной формы добавления нового аватара
popupEditAvatar.setEventListeners();