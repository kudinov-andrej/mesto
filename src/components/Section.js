import Api from "./Api.js"


export default class Section {
    constructor({renderer}, selector) {
      this._renderer = renderer; 
      this._container = document.querySelector(selector);
    }
  
    renderItems(items) {
    items.reverse().forEach(item => this._renderer(item))
      
    }
  
    setItem(element) {
      this._container.prepend(element);
    }
  }