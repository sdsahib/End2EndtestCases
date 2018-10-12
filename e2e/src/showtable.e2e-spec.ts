
import { showTableLayout } from './showtable.po';
import { browser } from 'protractor';


describe('Show Table Router Outlet Test', () => {
    let page: showTableLayout
    var EC = browser.ExpectedConditions;
    beforeEach(() => {
        page = new showTableLayout();
    });

    // it('should open the modal on click of Add New Button', () => {
    //     page.navigateTo();
    //     page.getShowTableMenuLink().click();

    //     page.getAddButton().click();

    //     expect(page.getModalBasicTitle()).toBeTruthy();
    //     expect(page.getModalBasicTitle().getText()).toEqual('Add Profile');
    //     expect(page.getIdTextBox()).toBeTruthy();
    //     expect(page.getFnameTextBox()).toBeTruthy();
    //     expect(page.getLnameTextBox()).toBeTruthy();
    //     expect(page.getEmailTextBox()).toBeTruthy();

    //     expect(page.getSaveButton()).toBeTruthy();
    //     expect(page.getCancelButton()).toBeTruthy();
    //     browser.sleep(2000);
    // });

    it('should save the detail of the user on click of save in Modal', () => {
        page.navigateTo();
        page.getShowTableMenuLink().click();
        page.getAddButton().click();

        expect(page.getModalBasicTitle()).toBeTruthy();
        expect(page.getModalBasicTitle().getText()).toEqual('Add Profile');
        expect(page.getIdTextBox()).toBeTruthy();
        page.getIdTextBox().sendKeys('1');

        expect(page.getFnameTextBox()).toBeTruthy();
        page.getFnameTextBox().sendKeys('Sahib');

        expect(page.getLnameTextBox()).toBeTruthy();
        page.getLnameTextBox().sendKeys('Singh');

        expect(page.getEmailTextBox()).toBeTruthy();
        page.getEmailTextBox().sendKeys('sahisingh@teksystems.com');

        expect(page.getSaveButton()).toBeTruthy();
        page.getSaveButton().click();

        expect(page.getCancelButton()).toBeTruthy();
        page.getCancelButton().click();
        

        browser.wait(EC.textToBePresentInElement(page.getCells().get(0), 'id'), 500000);
        



        
        
    });
});