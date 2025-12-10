@api
Feature: Booking API

  @smoke
  Scenario: Create a booking successfully
    Given the booking API is reachable
    When I create a booking
    Then the response status code should be 418
