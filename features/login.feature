Feature: Login Service

  Scenario Outline: <tc> User <message>
    Given User on the login page
    When User input <username> and <password>
    Then User should see a flash message saying <message>

    Examples:
      | tc             | username     | password         | message             |
      | TC_Login_01_01 | validUser    | validPassword    | Login_successful    |
      | TC_Login_01_02 | validUser    | validpassword    | Invalid_credentials |
      # | TC_Login_01_03 | validUser    | validP@ssword    | Invalid_credentials |
      # | TC_Login_01_04 | v@l!dUser    | v@l!dP@ssword    | Invalid_credentials |
      # | TC_Login_01_05 | v@l!dUser123 | 123v@l!dP@ssword | Invalid_credentials |
      # | TC_Login_01_06 | validuser    | validpassword    | Invalid_credentials |
      # | TC_Login_01_07 | validUser    | validPassw0rd    | Invalid_credentials |
      # | TC_Login_01_08 | valid123     | password123      | Invalid_credentials |
      # | TC_Login_01_09 | 123456788    | 7256545645645    | Invalid_credentials |
      # | TC_Login_01_10 | VALIDUSER    | VALIDPASSWORD    | Invalid_credentials |
      # | TC_Login_01_11 | VALIDuSER    | VALIDpASSWORD    | Invalid_credentials |
      # | TC_Login_01_12 | userUSer     | passwordPassword | Invalid_credentials |
      # | TC_Login_01_13 | validValid   | validValid       | Invalid_credentials |






