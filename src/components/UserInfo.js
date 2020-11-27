// Экспорт класса информации о пользователе
export default class UserInfo {
    constructor(nameSelector, aboutNameSelector) {
        this._nameSelector = nameSelector;
        this._aboutNameSelector = aboutNameSelector;
    }

    // Публичный метод, который возвращает объект с данными пользователя
    getUserInfo() {
        this._profileInfo = {};
        this._profileInfo.name = this._nameSelector.textContent;
        this._profileInfo.job = this._aboutNameSelector.textContent;

        return this._profileInfo;
    }

    // Публичный метод, который принимает новые данные пользователя и добавляет их на страницу
    setUserInfo({name, job}) {
        this._nameSelector.textContent = name;
        this._aboutNameSelector.textContent = job;
    }
}