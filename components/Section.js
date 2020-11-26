// Экспорт класса
export default class Section {
    constructor({ items, renderer }, containerSelector) {
      this._renderedItems = items;
      this._renderer = renderer; 
      
      this._container = document.querySelector(containerSelector);
    }
  
    // Метод перебора элементов карточек в массиве и передачи функции отрисовки их на странице 
    renderItems() {
      this._renderedItems.forEach(item => this._renderer(item));
    }
  
    // Добавление элеметов карточек в массив
    addItem(element) {
      this._container.prepend(element);
    }
  }