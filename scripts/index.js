const overlay = document.querySelectorAll('.popup');

const editButton = document.querySelector('.profile__button-edit');
const nameInput = document.querySelector('.profile__title');
const jobInput = document.querySelector('.profile__subtitle');
const addButton = document.querySelector('.profile__button-add');

const popupEdit = document.querySelector('.popup_type_edit');
const closeButton = document.querySelector('.popup__close');
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

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
];



const renderList = () => {

    const items = initialCards.map(element => getItems(element))

    list.append(...items)
};

const handlerRemove = (evt) => {
    evt.target.parentElement.remove();
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

const getItems = (data) => {

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

const bindHandlers = () => 
    addNewCard.addEventListener('click', () => {
        const item = getItems({
            name: inputTitle.value,
            link: inputLink.value,
        });

        list.prepend(item);
        formNewCard.reset();
    });

renderList();
bindHandlers();

function openPopup(popup) {                 // универсальная функция для открытия попапа 
    popup.classList.add('popup_opened');  
}

function closePopup(popup) {                // унииверсальная функция для закрытия попапа
    popup.classList.remove('popup_opened');
}

// закрытие по оверлею

const onClickOverlayListener = (evt) => {
    if(evt.target === evt.currentTarget) {
    closePopup(evt.target);
}
}

overlay.forEach(evt => evt.addEventListener('click',onClickOverlayListener))


//функция закрытия по Esc

const closeOnEsc = document.addEventListener('keyup', (evt) => {
    if(evt.key === 'Escape') {
       overlay.forEach(evt => {
           closePopup(evt);
       })
    }
}) 

// вторая функция закрытия по esc (Сломалась)

/* const closeOnEsc = document.addEventListener('keyup', (evt) => {
   if (overlay.target.classList.contains('.popup')) {
       closePopup(evt.target)
       console.log('close')
    } 
}) */

function submitHandlerEditProfile(evt) {
    evt.preventDefault();
    nameInput.textContent = addNameInput.value;
    jobInput.textContent = addJobInput.value;
    closePopup(popupEdit);
}

function submitHandlerNewCard(evt) {
    evt.preventDefault();
    closePopup(popupNewCard);
}  

popupImageClose.addEventListener('click', () => closePopup(popupImage));        // вызываю анонимную функцию, которая принимает функцию закрытия конкретного попапа, установленного в качестве параметра функции
closeButtonNewCard.addEventListener('click', () => closePopup(popupNewCard));
addButton.addEventListener('click', () => openPopup(popupNewCard));             // вызываю анонимную функцию, которая принимает функцию открытия конкретного попапа, установленного в качестве параметра функции

editButton.addEventListener('click', () => {     // в качестве колбэка установленна анонимная функция, работающая с передачей значений из профиля в попап изменения профиля
    addJobInput.value = jobInput.textContent;
    addNameInput.value = nameInput.textContent;
    openPopup(popupEdit);
}); 

closeButton.addEventListener('click', () => closePopup(popupEdit));
formEdit.addEventListener('submit', submitHandlerEditProfile);
formNewCard.addEventListener('submit', submitHandlerNewCard);