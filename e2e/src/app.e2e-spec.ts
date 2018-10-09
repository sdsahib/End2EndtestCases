import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to e2etesting!');
  });

  it('should have the text box and Button', () => {
    page.navigateTo();
    expect(page.getNameTextBox()).toBeTruthy();
    expect(page.getSubmitButton()).toBeTruthy();
  });

  it('should display name in h1 on change on textbox value', ()=> {
    page.navigateTo();
    page.getNameTextBox().clear();
    
    page.getNameTextBox().sendKeys('Sahib');

    const heading = page.getHeading().getText();

    browser.sleep(2000);

    expect(heading).toEqual('Sahib');

  });

});
