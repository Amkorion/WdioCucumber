Feature: The WebdriverIO Website search function

  Scenario: As a user, I want use search function 

    Given I am on webdriverio page
    When I click on search
    Then I type text to search
    Then Go to first search result

      
