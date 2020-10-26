
function showError(input) {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add('popup__input-text_state_invalid');
}

function hideError(input) {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove('popup__input-text_state_invalid');
}

function toogleButtonState(buttonElem, isActive) {
    if (isActive) {
        buttonElem.classList.remove('popup__button_invalid');
        buttonElem.disabled = false;
    } else {
        buttonElem.classList.add('popup__button_invalid');
        buttonElem.disabled = true;
    }
}

function checkInputValidity(input) {
    if (!input.validity.valid) {
        showError(input);
    }
    else {
        hideError(input);
    }
}

function setEventListeners(formElement, buttonElement) {
    const inputs = Array.from(formElement.querySelectorAll('.popup__input-text'));
   
    inputs.forEach(input => {
        input.addEventListener('input', (evt) => {
            checkInputValidity(evt.target);
            const isAllValid = formElement.checkValidity();
            toogleButtonState(buttonElement, isAllValid);
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
        setEventListeners(form, buttonElement);
        toogleButtonState(buttonElement, form.checkValidity());
    });
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input-text',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  });