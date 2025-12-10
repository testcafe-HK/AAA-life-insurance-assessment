@ui
Feature: SauceDemo checkout flow

  @checkout @smoke
  Scenario: Happy path – checkout single item
    Given I am on the SauceDemo login page
    When I log in as a standard user
    And I add the first product to the cart
    And I navigate to the cart
    And I start the checkout
    And I enter checkout information with first name "Harish", last name "Kumar", and postal code "48084"
    And I continue to the checkout overview page
    And I finish the checkout
    Then I should see the order completion message

  @checkout @outline
  Scenario Outline: Successful checkout with different customer data
    Given I am on the SauceDemo login page
    When I log in as a standard user
    And I add the first product to the cart
    And I navigate to the cart
    And I start the checkout
    And I enter checkout information with first name "<firstName>", last name "<lastName>", and postal code "<zip>"
    And I continue to the checkout overview page
    And I finish the checkout
    Then I should see the order completion message

    Examples:
      | firstName | lastName | zip   |
      | Harish    | Kumar    | 48084 |
      | Test      | User     | 90210 |
      | QA        | Engineer | 75001 |

  @checkout @negative
  Scenario Outline: Validation error during checkout
    Given I am on the SauceDemo login page
    When I log in as a standard user
    And I add the first product to the cart
    And I navigate to the cart
    And I start the checkout
    And I enter checkout information with first name "<firstName>", last name "<lastName>", and postal code "<zip>"
    And I continue to the checkout overview page
    Then I should see a checkout error "<errorMessage>"

    Examples:
      | firstName | lastName | zip   | errorMessage                   |
      |           | Kumar    | 48084 | Error: First Name is required  |
      | Harish    |          | 48084 | Error: Last Name is required   |
      | Harish    | Kumar    |       | Error: Postal Code is required |
