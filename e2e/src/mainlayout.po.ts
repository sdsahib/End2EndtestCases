import { browser, by, element } from 'protractor';

export class MainLayoutPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }

  getShowTableMenuLink() {
    return element(by.id('showTable'));
  }

  getAddButton(){
    return element(by.id('addbutton'));
}


}
