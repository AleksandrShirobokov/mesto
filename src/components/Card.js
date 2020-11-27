export default class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
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
    
    // Удаление карточки
    _handlerRemove() {
        this._element.remove();
        this._element = null;
    }

    // Добавление лайка
    _addLike() {
        this._element.querySelector('.element__image-like').classList.toggle('element__image-like_active'); // Нахождение кгопки лайка в самом элементе, добавление стиля
    }

    // Постановка слушателей(лайк, удаление карточки, открытие полного изображение) 
    _setEventListeners() {
        this._element.querySelector('.element__image-like').addEventListener('click', () => {
            this._addLike()
        });
    
        this._element.querySelector('.element__delete').addEventListener('click', () => {
            this._handlerRemove()
        });
            
        this._elementImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
    }

    // Генерация карточки
    generateCard() {
        this._element = this._getTemplate();
        this._elementImage = this._element.querySelector('.element__image');
        this._element.querySelector('.element__title').textContent = this._name;
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._setEventListeners();
            
        return this._element;  // Возврат элемента
    }

}