// Экспорт класса, коструктор класса 
export default class Card {
    constructor(data, cardSelector, handleCardClick, api, userId,{handleDeleteClick}) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._api = api;
        this._likeId = data.likes;
        this._likes = data.likes.length;
        this._idOwner = data.owner._id;
        this._id = data._id;
        this._userId = userId;
    }

    // Получение шаблона карточки
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector) 
            .content
            .querySelector('.element')
            .cloneNode(true);

            return cardElement;
    }

    // Генерация карточки
    generateCard() {
        this._element = this._getTemplate();
        this._elementImage = this._element.querySelector('.element__image');
        this._element.querySelector('.element__title').textContent = this._name;
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._likeIcon = this._element.querySelector('.element__image-like');
        this._likeNumber = this._element.querySelector('.element__image-like-number');
        this._likeNumber.textContent = this._likes;
        this._setEventListeners();
        this._checkDeleteIcons();
        this.myLikeOnCard(this.checkLikes());
 
        return this._element;  // Возврат элемента
    }

    // Постановка слушателей(лайк, удаление карточки, открытие полного изображение)
    _setEventListeners() {
        this._element.querySelector('.element__delete').addEventListener('click', () => {
            this._handleDeleteClick();
        });

        this._likeIcon.addEventListener('click', () => {
            if(this._likeIcon.classList.contains('element__image-like_active')) {
                this._deleteLikeClick();
                this._offLike();
            } else {
                this._handleLikeClick();
                this._onLike();
            }
        });
            
        this._elementImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
    }
    
    // Удаление карточки
    _handlerRemove() {
        this._element.remove();
        this._element = null;
    }

    // Добавление активной иконки лайка
    _onLike() {
        this._likeIcon.classList.add('element__image-like_active');
    }

    // Удаление активной иконки лайка
    _offLike() {
        this._likeIcon.classList.remove('element__image-like_active');
    }

    // Проверка на наличие кнопки удаления
    _checkDeleteIcons() {
        if(this._idOwner !== this._userId) {
            this._element.querySelector('.element__delete').remove();
        }
    }

    // Добавление лайка
    _handleLikeClick() {
        this._api
        .putLike(this._id)
        .then((res) => {
            this._likes = res.likes.length;
            this._likeNumber.textContent = this._likes;
        })
    }

    // Удаление лайка
    _deleteLikeClick() {
        this._api
        .deleteLike(this._id)
        .then((res) => {
            this._likes = res.likes.length;
            this._likeNumber.textContent = this._likes;
        })
    }

    // Проверка на принадлежность лайка    
    checkLikes() {
        return Boolean(this._likeId.find((obj => obj._id == this._userId)));
    }

    // Проверка на постановку лайка
    myLikeOnCard(myLike) {
        if(myLike) {
            this._onLike();
        }
    } 
}