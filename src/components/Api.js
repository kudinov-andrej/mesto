export default class Api {
    constructor(basePath, token) {
      this._basePath = basePath;
      this._token = token;
    }
  
    _getHeaders() {
      return {
        "Content-Type": "application/json",
        authorization: this._token,
      };
    }
  
    _getJson(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getCards() {
      return fetch(`${this._basePath}/cards`, {
        headers: this._getHeaders(),
      }).then(this._getJson);
    }

  
    createCard(item) {
      return fetch(`${this._basePath}/cards`, {
        method: "POST",
        headers: this._getHeaders(),
        body: JSON.stringify(item),
      }).then(this._getJson);
    }

    getCurrentUser() {
      return fetch(`${this._basePath}/users/me`, {
        headers: this._getHeaders(),
      }).then(this._getJson);
    }

  
    deleteCard(id) {
      return fetch(`${this._basePath}/cards/${id}`, {
        method: "DELETE",
        headers: this._getHeaders(),
      }).then(this._getJson);
    }
    
  }
  
