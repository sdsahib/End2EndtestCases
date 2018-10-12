import { MainLayoutPage } from './mainlayout.po';
import { browser } from 'protractor';
import { async } from 'rxjs/internal/scheduler/async';


describe('workspace-project App', () => {
  let page: MainLayoutPage;
  const EC = browser.ExpectedConditions;
  beforeEach(() => {
    page = new MainLayoutPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toEqual('Sample Testing application');
  // });

  // it('should have the show table tag', () => {
  //   page.navigateTo();
  //   expect(page.getShowTableMenuLink().getText()).toEqual('Show Table');
  // });

  // it('should load the child routes on click of Show table menu ', () => {

  //   page.navigateTo();

  //   page.getShowTableMenuLink().click();

  //   expect(page.getAddButton()).toBeTruthy();




  // });
  // it('should have the text box and Button', () => {
  //   page.navigateTo();
  //   expect(page.getNameTextBox()).toBeTruthy();
  //   expect(page.getSubmitButton()).toBeTruthy();
  // });

  // it('should display name in h1 on change on textbox value', ()=> {
  //   page.navigateTo();
  //   page.getNameTextBox().clear();

  //   page.getNameTextBox().sendKeys('Sahib');

  //   const heading = page.getHeading().getText();

  //   browser.sleep(2000);

  //   expect(heading).toEqual('Sahib');

  // });

});
