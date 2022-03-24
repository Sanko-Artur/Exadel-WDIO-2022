// REMOVE THE BELOW CODE BEFORE START THE EXERCISE

const url = 'https://viktor-silakov.github.io/course-sut';
const inputForLogin = '#login';
const login = 'walker@jw.com';
const inputForPassword = '#password';
const password = 'password';
const buttonLogin = 'button';
const spinner = '.spinner-border text-light';
const methodForDeleteElementWithinDOM =
  'document.querySelector(arguments[0]).remove()';
const navBar = 'header';
const hiddenButton = '//button[contains(text() , "alert")]';

describe('HW-2 task #2', function () {
  before(async function () {
    await browser.maximizeWindow();
    await browser.url(url);
    await $(inputForLogin).setValue(login);
    await $(inputForPassword).setValue(password);
    await $(buttonLogin).click();
    await $(spinner).waitForDisplayed({ timeout: 15000, reverse: true });
  });

  it('Удалить sticky - элемент при помощи выполнения Javascript в контексте браузера', async function () {
    await $(navBar).waitForDisplayed({ timeout: 15000 });
    await browser.execute(methodForDeleteElementWithinDOM, navBar);
  });

  it('Кликнуть на кнопку используя метод WebdriverIO ', async function () {
    await $(navBar).waitForDisplayed({ timeout: 15000, reverse: true });
    await $(hiddenButton).click();
  });

  it('Подтвердить появившийся alert используя browser.acceptAlert() метод', async function () {
    await browser.pause(500);
    await browser.acceptAlert();
  });
});

// npx wdio run ./wdio.conf.js
