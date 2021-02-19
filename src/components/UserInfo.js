// Экспорт класса информации о пользователе
export default class UserInfo {
    constructor(nameSelector, aboutNameSelector, avatar) {
        this._nameSelector = nameSelector;
        this._aboutNameSelector = aboutNameSelector;
        this._avatar = avatar;
    }

    // Публичный метод, который возвращает объект с данными пользователя
    getUserInfo() {
        this._profileInfo = {};
        this._profileInfo.name = this._nameSelector.textContent;
        this._profileInfo.about = this._aboutNameSelector.textContent;

        return this._profileInfo;
    }

    // Публичный метод, который принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(data) {
        this._nameSelector.textContent = data.name;
        this._aboutNameSelector.textContent = data.about; 
    }

    // Метод получения аватара с сервера
    setAvatar(data) {
        this._avatar.src = data.avatar;
    }

}