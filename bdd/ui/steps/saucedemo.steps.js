const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CheckoutPage = require('../pages/CheckoutPage');

Given('I am on the SauceDemo login page', async (t) => {
  await LoginPage.open(t);
});

When('I log in as a standard user', async (t) => {
  await LoginPage.loginAs(t, 'standard_user', 'secret_sauce');
});

When('I add the first product to the cart', async (t) => {
  await InventoryPage.addFirstItem(t);
});

When('I navigate to the cart', async (t) => {
  await InventoryPage.goToCart(t);
});

When('I start the checkout', async (t) => {
  await InventoryPage.checkout(t);
});

// 🔧 FIXED: use array destructuring for step args
When(
  'I enter checkout information with first name {string}, last name {string}, and postal code {string}',
  async (t, [firstName, lastName, zip]) => {
    await CheckoutPage.enterInfo(t, firstName || '', lastName || '', zip || '');
  }
);

When('I continue to the checkout overview page', async (t) => {
  await CheckoutPage.continue(t);
});

When('I finish the checkout', async (t) => {
  await CheckoutPage.finish(t);
});

// ✅ No params – fine as-is
Then('I should see the order completion message', async (t) => {
  await t.expect(CheckoutPage.completeHeader.exists).ok('Order completion message not found');
});

// 🔧 FIXED: single-arg step also uses array destructuring
Then('I should see a checkout error {string}', async (t, [msg]) => {
  await t
    .expect(CheckoutPage.error.exists).ok('Expected an error message but none was shown')
    .expect(CheckoutPage.error.innerText).contains(msg);
});
