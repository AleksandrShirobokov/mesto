config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input-text',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__input-text_state_invalid',
    errorClass: 'popup__error_visible'
}

enableValidation(config);


function showError(input, config) {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(config.inputErrorClass);
}

function hideError(input, config) {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove(config.inputErrorClass);
}

function toogleButtonState(buttonElem, isActive, config) {
    if (isActive) {
        buttonElem.classList.remove(config.inactiveButtonClass);
        buttonElem.disabled = false;
    } else {
        buttonElem.classList.add(config.inactiveButtonClass);
        buttonElem.disabled = true;
    }
}

function checkInputValidity(input, config) {
    if (!input.validity.valid) {
        showError(input, config);
    }
    else {
        hideError(input, config);
    }
}

function setEventListeners(formElement, buttonElement, config) {   
    const inputs = Array.from(formElement.querySelectorAll(config.inputSelector));  
   
    inputs.forEach(input => {
        input.addEventListener('input', (evt) => {
            checkInputValidity(evt.target, config);
            const isAllValid = formElement.checkValidity();
            toogleButtonState(buttonElement, isAllValid, config);
        });
    });
}

function enableValidation({formSelector, submitButtonSelector}) {
    const forms = Array.from(document.querySelectorAll(formSelector)); 

    forms.forEach((form) => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        const buttonElement = form.querySelector(submitButtonSelector);
        setEventListeners(form, buttonElement, config);
        toogleButtonState(buttonElement, form.checkValidity(), config);
    });
}