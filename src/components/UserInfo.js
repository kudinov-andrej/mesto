

export default class UserInfo {
    constructor({ userNameSelector, userInfoSelector }) {
      this._userNameElement = document.querySelector(userNameSelector);
      this._userInfoElement = document.querySelector(userInfoSelector);
    }
  
    getUserInfo() {
      return {
        name: this._userNameElement.textContent,
        about: this._userInfoElement.textContent
        
      };
      
    }
  
    setUserInfo(data) {
      this._userNameElement.textContent = data.name;
      this._userInfoElement.textContent = data.about;
    }
  }
  