// Импорт клавиши ESC
import {ESC_CODE} from '../utils/constants.js'

// Экспорт по умолчанию
export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popupOpen = 'popup_opened';
        this._closeButton = popupSelector.querySelector('.popup__close');
        this._handleEscClose = this._handleEscClose.bind(this);
        this._close = this.close.bind(this) // Привязываю bind к селектору
    }

// Метод открытия попапа
    open() {
        this._popupSelector.classList.add(this._popupOpen);
        this._popupSelector.addEventListener('click', this._handleOverlayClose.bind(this));
        document.addEventListener('keydown', this._handleEscClose);
    }

// Метод закрытия попапа
    close() {
        this._popupSelector.classList.remove(this._popupOpen);
        document.removeEventListener('keydown', this._handleEscClose);
    }

// Метод закрытия по нажатию на оверлэй
    _handleOverlayClose(evt) {
        if(evt.target === evt.currentTarget) {
            this.close();
        } 
    }

// Метод закрытия по нажатию на клавишу ESC
    _handleEscClose(evt) {
        if(evt.key === ESC_CODE) {
            this.close();
        } 
    }

// Слушатель для кнопки закрытия
    setEventListeners() {
        this._closeButton.addEventListener('click', this.close.bind(this));
    }
}