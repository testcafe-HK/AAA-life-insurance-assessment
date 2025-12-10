const { Selector } = require('testcafe');

class InventoryPage {
  constructor() {
    this.inventoryContainer = Selector('#inventory_container');
    this.addFirstBtn = Selector('.inventory_item button').nth(0);
    this.cartLink = Selector('.shopping_cart_link');
    this.cartItem = Selector('.cart_item');
    this.checkoutBtn = Selector('#checkout');
  }

  async addFirstItem(t) {
    await t
      .expect(this.inventoryContainer.exists).ok('Inventory page is not visible')
      .click(this.addFirstBtn);
  }

  async goToCart(t) {
    await t.click(this.cartLink);
  }

  async checkout(t) {
    await t
      .expect(this.checkoutBtn.exists).ok('Checkout button not visible')
      .click(this.checkoutBtn);
  }
}

module.exports = new InventoryPage();
