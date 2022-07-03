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
    Then   i should see all the "<sport category>"
    When   i select "<sport category>"
    Then   i should only see  Sport List for the selected "<sport category>"
    Examples:
    |sport category|
    | MLB        |
    | Lacrosse   |
    | Soccer     |
    | KBO        |

