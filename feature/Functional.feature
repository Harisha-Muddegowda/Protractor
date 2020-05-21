Feature: Yahoo search
  Scenario Outline: Log in with given API
    Given I navigates to google
    And searches for '<input>'
    Then I should see '<this>'

Examples:
|input|this|
|test|fail|
|test2|fail|
|test3|fail|
