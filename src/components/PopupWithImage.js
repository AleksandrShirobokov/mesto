// Импорт попапа в карточку
import Popup from './Popup.js'

// Экспорт попапа с картинкой, наследуемый от попапа 
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupTitle = this._popupSelector.querySelector('.popup__subtitle');
        this._popupFullImage = this._popupSelector.querySelector('.popup__image');
    }

    // Метод передачи значений карточки попапу с картинкой, открытие попапа с картинкой
    open(name, link) {
        this._popupTitle.textContent = name;
        this._popupFullImage.src = link;
        this._popupFullImage.alt = name;
        super.open();
    }
}