import { browser, by, element } from 'protractor';

export class showTableLayout {
    navigateTo() {
        return browser.get('/showtable');
    }

    getModalBasicTitle(){
        return element(by.id('modal-basic-title'));
    }

    getAddButton(){
        return element(by.id('addbutton'));
    }

    getSaveButton(){
        return element(by.id('saveButton'));
    }

    getCancelButton(){
        return element(by.id('cancelButton'));
    }

    getIdTextBox(){
        return element(by.name('id'));
    }

    getFnameTextBox(){
        return element(by.name('fname'));
    }

    getLnameTextBox(){
        return element(by.name('lname'));
    }

    getEmailTextBox(){
        return element(by.name('email'));
    }

    

}