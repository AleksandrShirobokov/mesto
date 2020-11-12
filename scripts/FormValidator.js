export class FormValidator {
    constructor(set, formElement) {
        this._formElement = formElement;
        this._set = set;
    }

    // Показ ошибки 
    _showError(input) {
        this._errorElement = this._formElement.querySelector(`#${input.id}-error`);
        input.classList.add(this._set.inputErrorClass);
        this._errorElement.textContent = input.validationMessage;
        
    }

    // Скрытие ошибки
    _hideError(input) {
        this._errorElement = this._formElement.querySelector(`#${input.id}-error`);
        input.classList.remove(this._set.inputErrorClass);
        this._errorElement.textContent = '';
        
    }

    // Проверка валидации
    _checkInputValidity(input) {
        if (!input.validity.valid) {
            this._showError(input);
        }
        else {
            this._hideError(input);
        }
    }

    // Неверное поле валидации
    _hasInvalidInput() {
        return this._inputList.some((input) => {
            return !input.validity.valid;
        })
    }

    // Активная кнопка
    activeButton() {
        this._buttonElem.classList.remove(this._set.inactiveButtonClass);
        this._buttonElem.disabled = false; 
    }

    // Неактивная кнопка
    inactiveButton() {
        this._buttonElem.classList.add(this._set.inactiveButtonClass);
        this._buttonElem.disabled = true;
    }

    // Активация и отключение кнопки при верной и неверной валидации
    _toogleButtonState() {
        if (this._hasInvalidInput()) {
            this.inactiveButton();
        } else {
            this.activeButton();
        }
    }

    // Постановка слушателей
    _setEventListeners() {   
        this._inputList = Array.from(this._formElement.querySelectorAll(this._set.inputSelector));  
        this._buttonElem = this._formElement.querySelector(this._set.submitButtonSelector);
        this._toogleButtonState();

        this._inputList.forEach(input => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._toogleButtonState();
            });
        });
    }

    // Активация валидации
    enableValidation() {
       this._formElement.addEventListener('submit', (evt) => {
           evt.preventDefault();
           this.inactiveButton();
       })

       this._setEventListeners();
    }
        
    // Отключение валидации
    disableError() {
        this._inputList.forEach(input => {
        this._hideError(input);        
        })
    }    
};