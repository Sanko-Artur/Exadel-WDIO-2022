// REMOVE THE BELOW CODE BEFORE START THE EXERCISE
describe('HW-2 task #2', function () {
  const url = 'https://viktor-silakov.github.io/course-sut';
  const inputForLogin = '#login';
  const login = 'walker@jw.com';
  const inputForPassword = '#password';
  const password = 'password';
  const buttonLogin = 'button';
  const spinner = '.spinner-border text-light';
  const methodForDeleteElementWithinDOM =
    'document.querySelector(arguments[0]).remove()';
  const arguments0 =
    '[class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"]';
  const hiddenButton = '//button[contains(text() , "alert")]';

  before(async function () {
    await browser.maximizeWindow();
    await browser.url(url);
    await $(inputForLogin).setValue(login);
    await $(inputForPassword).setValue(password);
    await $(buttonLogin).click();
    await $(spinner).waitForDisplayed({ timeout: 15000, reverse: true });
  });

  it('Удалить sticky - элемент при помощи выполнения Javascript в контексте браузера', async function () {
    await browser.pause(2000);
    await browser.execute(methodForDeleteElementWithinDOM, arguments0);
    await browser.pause(2000);
  });

  it('кликнуть на кнопку используя метод WebdriverIO ', async function () {
    await browser.pause(500);
    await $(hiddenButton).click();
  });

  it('Подтвердить появившийся alert используя browser.acceptAlert() метод', async function () {
    await browser.pause(500);
    await browser.acceptAlert();
    await browser.pause(500);
  });
});

// npx wdio run ./wdio.conf.js
