export class Card {
    constructor(data, cardSelector, fullImage) {
        this._data = data;
        this._cardSelector = cardSelector;
        this._fullImage = fullImage;
    }
    
    // Получение шаблона карточки
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector) 
            .content
            .cloneNode(true);

            return cardElement;
    }
    
    // Удаление карточки
    _handlerRemove(evt) {
        evt.target.closest('.element').remove();
    }

    // Добавление лайка
    _addLike(evt) {
        evt.target.classList.toggle('element__image-like_active');
    }

    // Постановка слушателей(лайк, удаление карточки, открытие полного изображение) 
    _setEventListeners() {
        this._element.querySelector('.element__image-like').addEventListener('click', this._addLike);
        this._element.querySelector('.element__delete').addEventListener('click', this._handlerRemove);
        
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._fullImage(this._data);
        })
    }

    // Генерация карточки
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._elementImage = this._element.querySelector('.element__image');
        this._element.querySelector('.element__title').textContent = this._data.name;
        this._elementImage.src = this._data.link;
        this._elementImage.alt = this._data.name;
        
        return this._element;
    }

}