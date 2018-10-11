
import { showTableLayout } from './showtable.po';
import { browser } from 'protractor';


describe('Show Table Router Outlet Test', () => {
    let page: showTableLayout

    beforeEach(() => {
        page = new showTableLayout();
    });

    it('should open the modal on click of Add New Button',() =>{
        page.navigateTo();

        page.getAddButton().click();
        
        expect(page.getModalBasicTitle()).toBeTruthy();
        expect(page.getModalBasicTitle().getText()).toEqual('Add Profile');
        expect(page.getIdTextBox()).toBeTruthy();
        expect(page.getFnameTextBox()).toBeTruthy();
        expect(page.getLnameTextBox()).toBeTruthy();
        expect(page.getEmailTextBox()).toBeTruthy();
        
        expect(page.getSaveButton()).toBeTruthy();
        expect(page.getCancelButton()).toBeTruthy();
        browser.sleep(2000);
    });
});