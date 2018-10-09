import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getNameTextBox(){
    return element(by.id('nameText'));
  }

  getSubmitButton(){
    return element(by.id('submitButton'));
  }
  getHeading(){
    return element(by.id('heading'));
  }
}
