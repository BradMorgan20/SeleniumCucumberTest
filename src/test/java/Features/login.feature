@Login
Feature: Login With the bois
  This Feature is to test that general login functionality works as expected.

  Scenario: Bob wants to log in
    Given I am Bob
    And I want to login
    Then I can access the splash page