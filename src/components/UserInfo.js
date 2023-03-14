

export default class UserInfo {
    constructor({ userNameSelector, userInfoSelector, userUrlSelector}) {
      this._userNameElement = document.querySelector(userNameSelector);
      this._userInfoElement = document.querySelector(userInfoSelector);
      this._userUrlElement = document.querySelector(userUrlSelector);
    }
  
    getUserInfo() {
      return {
        name: this._userNameElement.textContent,
        about: this._userInfoElement.textContent,
        link: this._userUrlElement.src
      };
      
    }
  
    setUserInfo(data) {
      this._userNameElement.textContent = data.name;
      this._userInfoElement.textContent = data.about;
      
    }

    changeAvatarPicture(data) {
      this._userUrlElement.src = data.link;
    }
    
  }
  