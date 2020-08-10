import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getListItems() {
    return element.all(by.deepCss('app-root ion-content ion-item'));
  }

  getSearchInput() {
    return element(by.deepCss('app-root ion-header ion-searchbar input'));
  }
}
