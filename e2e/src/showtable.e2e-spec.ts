
import { showTableLayout } from './showtable.po';
import { browser } from 'protractor';


describe('Show Table Router Outlet Test', () => {
    let page: showTableLayout
    var EC = browser.ExpectedConditions;
    beforeEach(() => {
        page = new showTableLayout();
    });

    it('should open the modal on click of Add New Button', () => {
        page.navigateTo();
        page.getShowTableMenuLink().click();

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

    it('should save the detail of the user on click of save in Modal', () => {
        page.navigateTo();
    
        page.getAddButton().click();

        expect(page.getModalBasicTitle()).toBeTruthy();
        expect(page.getModalBasicTitle().getText()).toEqual('Add Profile');
        expect(page.getIdTextBox()).toBeTruthy();
        page.getIdTextBox().sendKeys('1');

        var fname = 'Sahib';
        var lname = 'Singh';
        var email = 'sahisingh@teksystems.com';

        expect(page.getFnameTextBox()).toBeTruthy();
        page.getFnameTextBox().sendKeys(fname);

        expect(page.getLnameTextBox()).toBeTruthy();
        page.getLnameTextBox().sendKeys(lname);

        expect(page.getEmailTextBox()).toBeTruthy();
        page.getEmailTextBox().sendKeys(email);

        expect(page.getSaveButton()).toBeTruthy();
        page.getSaveButton().click();

        expect(page.getCancelButton()).toBeTruthy();
        page.getCancelButton().click();
        

        
    });

    it('should contain the saved values in the table', ()=>{
        page.navigateTo();
        var fname = 'Sahib';
        var lname = 'Singh';
        var email = 'sahisingh@teksystems.com';
        expect(page.getCells().get(12)).toBeTruthy();
        expect(page.getCells().get(12).getText()).toBe(fname);

        expect(page.getCells().get(13)).toBeTruthy();
        expect(page.getCells().get(13).getText()).toBe(lname);

        expect(page.getCells().get(14)).toBeTruthy();
        expect(page.getCells().get(14).getText()).toBe(email);
    });

    it('should edit the user value on edit button', ()=>{
        page.navigateTo();



        var id = '1';
        var fname = 'Ankit';
        var lname = 'Passi';
        var email = 'ankit@teksystems.com';

        page.getEditButton('Edit_1').click();
        
        
        expect(page.getModalBasicTitle()).toBeTruthy();
        expect(page.getModalBasicTitle().getText()).toEqual('Profile update');
        expect(page.getIdTextBox()).toBeTruthy();
        page.getIdTextBox().clear();
        page.getIdTextBox().sendKeys(id);

        expect(page.getFnameTextBox()).toBeTruthy();
        page.getFnameTextBox().clear();
        page.getFnameTextBox().sendKeys(fname);


        expect(page.getLnameTextBox()).toBeTruthy();
        page.getLnameTextBox().clear();
        page.getLnameTextBox().sendKeys(lname);

        expect(page.getEmailTextBox()).toBeTruthy();
        page.getEmailTextBox().clear();
        page.getEmailTextBox().sendKeys(email);

        page.getUpdateButton().click();

        browser.sleep(2000);

        expect(page.getCells().get(0)).toBeTruthy();
        expect(page.getCells().get(0).getText()).toBe(fname);

        expect(page.getCells().get(1)).toBeTruthy();
        expect(page.getCells().get(1).getText()).toBe(lname);

        expect(page.getCells().get(2)).toBeTruthy();
        expect(page.getCells().get(2).getText()).toBe(email);
        
    });

    it('deleting the sample test user created',()=>{
        
    });

});