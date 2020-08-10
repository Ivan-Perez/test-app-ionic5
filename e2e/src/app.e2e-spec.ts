import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should not load all the images (virtual scroll)', async () => {
    expect(await page.getListItems().count()).toBeLessThan(1000);
  });

  it('should filter out images by the search term', async () => {
    await page.getSearchInput().sendKeys('1000');
    setImmediate(async () => {
      expect(await page.getListItems().count()).toBe(1);
    });
  });
});
