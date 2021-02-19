// Экспорт класса
export default class Section {
    constructor({renderer}, containerSelector) {
      this._renderer = renderer; 
      
      this._container = document.querySelector(containerSelector);
    }
  
    // Метод перебора элементов карточек в массиве и передачи функции отрисовки их на странице 
    renderItems(items) {
      items.forEach(item => this._renderer(item));
    }
  
    // Добавление элеметов карточек в массив
    addItem(element) {
      this._container.prepend(element);
    }
  }