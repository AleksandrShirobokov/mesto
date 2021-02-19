import Popup from "./Popup.js";

export default class PopupWithDel extends Popup {
    constructor(popupSelector, {handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formPopup = this._popupSelector.querySelector('.popup__form');
        this._confirmButton = this._popupSelector.querySelector('.popup__save');    
        this._submitHandler = this._submitHandler.bind(this);  
        this.close = this.close.bind(this)
    }

        renderLoading(isLoading) {
            if(isLoading) {
                this._confirmButton.textContent = 'Удаление...';
            } else {
                this._confirmButton.textContent = 'Удаление...'
            }
        }

        // Добавление слушателя
        setEventListeners() {
            super.setEventListeners();
            this._formPopup.addEventListener('submit', this._submitHandler);
        }

        // Добавление слушателя
        _submitHandler(evt) {
            evt.preventDefault();
            this._handleFormSubmit(this._cardId);
        }

        open(card, cardId) {
            super.open();
            this.element = card._element;
            this._cardId = cardId;
        }
    
        deleteCard() {
            this.element.remove();
            this.element = null;
        }

        close() {
            super.close();
        }
}