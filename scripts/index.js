const overlay = document.querySelectorAll('.popup');

const editButton = document.querySelector('.profile__button-edit');
const nameInput = document.querySelector('.profile__title');
const jobInput = document.querySelector('.profile__subtitle');
const addButton = document.querySelector('.profile__button-add');

const popupEdit = document.querySelector('.popup_type_edit');
const closeButtonEdit = document.querySelector('.popup__close_edit');
const addNameInput = document.querySelector('.popup__input-text_type_name');
const addJobInput = document.querySelector('.popup__input-text_type_job');
const formEdit = document.querySelector('.popup__form_edit');

const popupNewCard = document.querySelector('.popup_type_new-card');
const closeButtonNewCard = document.querySelector('.popup__close_new-card');
const formNewCard = document.querySelector('.popup__form_new-card');
const addNewCard = document.querySelector('.popup__save_new-card');
const inputLink = document.querySelector('.popup__input-text_type_link');
const inputTitle = document.querySelector('.popup__input-text_type_title');

const popupPicture = document.querySelector('.popup__image');           // картинка в попапе
const popupImage = document.querySelector('.popup_type_image');         // попап открытия картинки
const popupSubtitle = document.querySelector('.popup__subtitle');       // подпись под картинкой
const popupImageClose = document.querySelector('.popup__close_image');  // закрытие попапа

const list = document.querySelector('.elements');

const template = document.querySelector('.template');

const renderList = () => {

    const items = initialCards.map(element => createCard(element))

    list.append(...items)
};

const handlerRemove = (evt) => {
    evt.target.closest('.element').remove();
}

const addLike = (evt) => {
    evt.target.classList.toggle('element__image-like_active');
}

const handlePreviewPicture = (data) => {   // функция, работающая с картинкой
popupPicture.src = data.link;              // передача источника объекта дата
popupPicture.alt = data.name;              // передача имени объекта дата к альту  
popupSubtitle.textContent = data.name;     // передача имени объекта дата к подписи картинки 
openPopup(popupImage)                      // функция открытия попапа с картинкой
} 

const createCard = (data) => {

    const card = template.content.cloneNode(true);
    const cardPicture = card.querySelector('.element__image');
    card.querySelector('.element__title').textContent = data.name;
    cardPicture.src = data.link;
    cardPicture.alt = data.name;

    const likeButton = card.querySelector('.element__image-like');
    const deleteButton = card.querySelector('.element__delete');
    const elementImage = card.querySelector('.element__image');

    
    deleteButton.addEventListener('click', handlerRemove);
    likeButton.addEventListener('click', addLike) 

    elementImage.addEventListener('click', () => handlePreviewPicture (data)); // передаю функцию, работающую с картинкой в качестве колбэка
    
    return card;
};
 
renderList();

function openPopup(popup) {                 // универсальная функция для открытия попапа 
    popup.classList.add('popup_opened'); 
    document.addEventListener('keyup', closeOnEsc); 
}

function closePopup(popup) {                // унииверсальная функция для закрытия попапа
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', closeOnEsc); 
}

// закрытие по оверлею

const onClickOverlayListener = (evt) => {
    if(evt.target === evt.currentTarget) {
    closePopup(evt.target);
}
}

overlay.forEach(evt => evt.addEventListener('click',onClickOverlayListener))


//функция закрытия по Esc
const ESC_CODE = 'Escape';

function closeOnEsc(evt) {
    if(evt.key === ESC_CODE) {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

function submitHandlerEditProfile(evt) {
    evt.preventDefault();
    nameInput.textContent = addNameInput.value;
    jobInput.textContent = addJobInput.value;
    closePopup(popupEdit);
}

function submitHandlerNewCard(evt) {
    evt.preventDefault();
    closePopup(popupNewCard);
    const item = createCard({
            name: inputTitle.value,
            link: inputLink.value,
        });

        list.prepend(item);
        formNewCard.reset();
    };  

popupImageClose.addEventListener('click', () => closePopup(popupImage));        // вызываю анонимную функцию, которая принимает функцию закрытия конкретного попапа, установленного в качестве параметра функции
closeButtonNewCard.addEventListener('click', () => closePopup(popupNewCard));
addButton.addEventListener('click', () => {
    openPopup(popupNewCard);
    addNewCard.classList.add('popup__button_invalid');
    addNewCard.disabled = true;
    inputLink.value = '';
    inputTitle.value = '';
    });
                 // вызываю анонимную функцию, которая принимает функцию открытия конкретного попапа, установленного в качестве параметра функции

editButton.addEventListener('click', () => {     // в качестве колбэка установленна анонимная функция, работающая с передачей значений из профиля в попап изменения профиля
    addJobInput.value = jobInput.textContent;
    addNameInput.value = nameInput.textContent;
    openPopup(popupEdit);
}); 

closeButtonEdit.addEventListener('click', () => closePopup(popupEdit));
formEdit.addEventListener('submit', submitHandlerEditProfile);
formNewCard.addEventListener('submit', submitHandlerNewCard);