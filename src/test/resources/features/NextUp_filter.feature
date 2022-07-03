@wip
Feature:Next Up Filter
  Scenario: verify available list of valid Sports
    Given i am on home page
    When  i select the Next Up Sports Filter
    Then  i can see an available list of valid Sports to filter by
      | All Sports |
      | KBO        |
      | Lacrosse   |
      | MLB        |
      | Soccer     |


  Scenario Outline: verify number of each available sport list
    Given  i am on home page
    When   i count each "<sport category>"
    And    i select each "<sport category>" on dropdown list
    Then   i compare sorted "<sport category>" with counted in previous step
    Examples:
    |sport category|
    | MLB        |
    | Lacrosse   |
    | Soccer     |
    | KBO        |

