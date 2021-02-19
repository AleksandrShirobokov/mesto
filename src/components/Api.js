export default class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }

    getInitialCards() {
        return fetch("https://mesto.nomoreparties.co/v1/cohort-20/cards/", {
            method:"GET",
            headers: {
                authorization:'3fe373ef-33cc-49b3-8f02-e54eba1f506e',
                "content-type":'application/json'
            }
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            }   
            return Promise.reject(`Ошибка:${res.status}`);
        }) 
    }

    postNewCard(data) {
        return fetch("https://mesto.nomoreparties.co/v1/cohort-20/cards/", {
            method:'POST',
            headers: {
                authorization:'3fe373ef-33cc-49b3-8f02-e54eba1f506e',
                "content-type":'application/json'},
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка:${res.status}`);
        })
    }

    getUserInfoMe() {
        return fetch("https://mesto.nomoreparties.co/v1/cohort-20/users/me", {
            headers: {
                authorization:'3fe373ef-33cc-49b3-8f02-e54eba1f506e',
                "content-type":'application/json'
            }
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка:${res.status}`);
        })
    }

    changeUserInfo(data) {
        return fetch("https://mesto.nomoreparties.co/v1/cohort-20/users/me", {
            method: 'PATCH',
            headers: {
                authorization:'3fe373ef-33cc-49b3-8f02-e54eba1f506e',
                "content-type":'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка:${res.status}`);
        })
    }    

    editAvatar(data) {
        return fetch("https://mesto.nomoreparties.co/v1/cohort-20/users/me/avatar", {
            method: 'PATCH',
            headers: {
                authorization:'3fe373ef-33cc-49b3-8f02-e54eba1f506e',
                "content-type":'application/json'
            },
            body:JSON.stringify({
                avatar: data.link
            })
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка:${res.status}`);
        })
    }

    putLike(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-20/cards/likes/${cardId}`, {
            method:'PUT',
            headers:{
                authorization:'3fe373ef-33cc-49b3-8f02-e54eba1f506e',
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка:${res.status}`);
        })
    }
    deleteLike(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-20/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers:{
                authorization:'3fe373ef-33cc-49b3-8f02-e54eba1f506e',
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка:${res.status}`);
        })
    }

    delCard(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-20/cards/${cardId}`, {
            method:'DELETE',
            headers:{
                authorization:'3fe373ef-33cc-49b3-8f02-e54eba1f506e',
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка:${res.status}`);
        })
    }

}    