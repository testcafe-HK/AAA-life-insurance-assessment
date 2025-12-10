const { Selector } = require('testcafe');

class LoginPage {
  constructor() {
    this.username = Selector('#user-name');
    this.password = Selector('#password');
    this.loginBtn = Selector('#login-button');
  }

  async open(t) {
    await t.navigateTo('https://www.saucedemo.com/');
  }

  async loginAs(t, user, pass) {
    await t
      .typeText(this.username, user, { replace: true })
      .typeText(this.password, pass, { replace: true })
      .click(this.loginBtn);
  }
}

module.exports = new LoginPage();
