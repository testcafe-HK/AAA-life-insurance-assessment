const { Selector } = require('testcafe');

class CheckoutPage {
  constructor() {
    this.firstName = Selector('#first-name');
    this.lastName = Selector('#last-name');
    this.postalCode = Selector('#postal-code');
    this.continueBtn = Selector('#continue');
    this.finishBtn = Selector('#finish');
    this.error = Selector('[data-test="error"]');
    this.completeHeader = Selector('.complete-header');
  }

  // async enterInfo(t, fn, ln, zip) {
  //   if (fn !== undefined) {
  //     await t.typeText(this.firstName, fn, { replace: true });
  //   }
  //   if (ln !== undefined) {
  //     await t.typeText(this.lastName, ln, { replace: true });
  //   }
  //   if (zip !== undefined) {
  //     await t.typeText(this.postalCode, zip, { replace: true });
  //   }
  // }

  // bdd/ui/pages/CheckoutPage.js
async enterInfo(t, fn, ln, zip) {
  if (fn) {
    await t.typeText(this.firstName, String(fn), { replace: true });
  }
  if (ln) {
    await t.typeText(this.lastName, String(ln), { replace: true });
  }
  if (zip) {
    await t.typeText(this.postalCode, String(zip), { replace: true });
  }
}

  async continue(t) {
    await t.click(this.continueBtn);
  }

  async finish(t) {
    await t.click(this.finishBtn);
  }
}

module.exports = new CheckoutPage();
