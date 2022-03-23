// REMOVE THE BELOW CODE BEFORE START THE EXERCISE
describe('HW-2 task #1', function () {
  const url = 'https://viktor-silakov.github.io/course-sut';
  const inputForLogin = '#login';
  const login = 'walker@jw.com';
  const inputForPassword = '#password';
  const password = 'password';
  const buttonLogin = 'button';
  const spinner = '.spinner-border text-light';
  const userLabel = '#user-label';
  const nicknameOfUser = 'John Walker';
  const attrOfElement = 'title';
  const sideBarMenu = '//nav[@id="sidebarMenu"]/*/ul[@id="first-nav-block"]/li';
  const cssProperty = 'background-color';
  const color = 'rgba(255,0,0,1)';

  before(async function () {
    await browser.maximizeWindow();
    await browser.url(url);
    await $(inputForLogin).setValue(login);
    await $(inputForPassword).setValue(password);
    await $(buttonLogin).click();
  });

  // it('Открыть url https://viktor-silakov.github.io/course-sut/', async function () {
  //   await browser.maximizeWindow();
  //   await browser.url(url);
  // });

  // it('Войти в приложения используя учетные данные ', async function () {
  //   await $(inputForLogin).setValue(login);
  //   await $(inputForPassword).setValue(password);
  //   await $(buttonLogin).click();
  // });

  it('проверить исчезновение preloader', async function () {
    await $(spinner).waitForDisplayed({ reverse: true });
  });

  // какая из проверок нужна была для пункта: "проверить действительно ли пользователь с таким логином вошел в систему" ?
  it('проверить действительно ли пользователь с таким логином вошел в систему #1', async function () {
    const elem = await $(userLabel);
    await expect(elem).toHaveTextContaining(nicknameOfUser);
  });

  it('проверить действительно ли пользователь с таким логином вошел в систему #2', async function () {
    const elem = await $(userLabel);
    await expect(elem).toHaveAttributeContaining(attrOfElement, login);
  });

  it('Навести курсор мыши поочередно на каждый элемент (li) первого блока sidebar, убедится что при наведении background-color элемента не красный "rgba(255,0,0,1)"', async function () {
    const sideBar = await $$(sideBarMenu);
    for (li of sideBar) {
      await browser.pause(500);
      await $(li).moveTo();
      const styleInfo = await $(li).getCSSProperty(cssProperty);
      if (styleInfo.value === color) {
        throw new Error(`Color was changed to red`);
      }
    }
  });
});

// npx wdio run ./wdio.conf.js
