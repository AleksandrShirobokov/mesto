// Импорт попапа в карточку
import Popup from './Popup.js'

// Экспорт попапа с формой, наследуемый от попапа 
export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formPopup = this._popupSelector.querySelector('.popup__form');
        // Создание массива для всех инпутов в форме
        this._inputPopup = Array.from(this._formPopup.querySelectorAll('.popup__input'));
    }

    // Получение значений инпутов
    _getInputValues() {
        this._formValues = {};
        // Перебор инпутов в массиве
        this._inputPopup.forEach((input) => {this._formValues[input.name] = input.value});
        return this._formValues;
    }

    // Отмена события по умолчанию и добавление сабмита формы
    _submitHandler(evt) {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
        this.close();
    }

    // Добавление слушателя
    setEventListeners() {
        super.setEventListeners();
        this._formPopup.addEventListener('submit', this._submitHandler.bind(this));
    }

    // Сброс и закрытие формы
    close() {
        this._formPopup.reset();
        super.close();
    }
}