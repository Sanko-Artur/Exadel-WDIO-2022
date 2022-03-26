// REMOVE THE BELOW CODE BEFORE START THE EXERCISE

const url = 'https://viktor-silakov.github.io/course-sut';
const inputForLogin = '#login';
const login = 'walker@jw.com';
const inputForPassword = '#password';
const password = 'password';
const buttonLogin = 'button';
const spinner = '.spinner-border text-light';
const userLabel = '#user-label';
const attrOfElement = 'title';
const sideBarMenuSelector = '//ul[@id="first-nav-block"]/li';
const cssProperty = 'background-color';
const color = 'rgba(255,0,0,1)';

describe('HW-2 task #1', function () {
  before(async function () {
    await browser.maximizeWindow();
    await browser.url(url);
    await $(inputForLogin).setValue(login);
    await $(inputForPassword).setValue(password);
    await $(buttonLogin).click();
  });

  it('проверить исчезновение preloader', async function () {
    await $(spinner).waitForDisplayed({ timeout: 15000, reverse: true });
  });

  it('проверить действительно ли пользователь с таким логином вошел в систему', async function () {
    await $(userLabel).waitForDisplayed({ timeout: 15000 });
    const elem = await $(userLabel);
    await expect(elem).toHaveAttributeContaining(attrOfElement, login);
  });

  it('Навести курсор мыши поочередно на каждый элемент (li) первого блока sidebar, убедится что при наведении background-color элемента не красный "rgba(255,0,0,1)"', async function () {
    await $(sideBarMenuSelector).waitForDisplayed({ timeout: 15000 });
    const sideBarItems = await $$(sideBarMenuSelector);
    for (sideBarItem of sideBarItems) {
      await sideBarItem.moveTo();
      const styleInfo = await sideBarItem.getCSSProperty(cssProperty);
      if (styleInfo.value === color) {
        throw new Error(
          `Color was changed to red for element: ${sideBarItem.selector} with index: ${sideBarItem.index}`
        );
      }
    }
  });
});

// npx wdio run ./wdio.conf.js
