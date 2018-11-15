import { browser, by, element } from 'protractor';

export class showTableLayout {
    navigateTo() {
        return browser.get('/showtable');
    }


    getShowTableMenuLink() {
        return element(by.id('showTable'));
    }

    getModalBasicTitle() {
        return element(by.id('modal-basic-title'));
    }

    getAddButton() {
        return element(by.id('addbutton'));
    }

    getSaveButton() {
        return element(by.id('saveButton'));
    }

    getUpdateButton(){
        return element(by.id('updateButton'));
    }

    getCancelButton() {
        return element(by.id('cancelButton'));
    }

    getIdTextBox() {
        return element(by.name('id'));
    }

    getFnameTextBox() {
        return element(by.name('fname'));
    }

    getLnameTextBox() {
        return element(by.name('lname'));
    }

    getEmailTextBox() {
        return element(by.name('email'));
    }

    getTable() {
        return element(by.css('table'));
    }

    getRowsValue() {
        return this.getTable().all(by.tagName('tr'))
    }

    getCells() {
        return this.getRowsValue().all(by.tagName('td'));
    }

    getEditButton(id){
        return element(by.id(id));
    }



}