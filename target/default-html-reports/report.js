$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/NextUp_filter.feature");
formatter.feature({
  "name": "Next Up Filter",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "name": "verify available list of valid Sports",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.SpotLight.steps.NextUpFilter.i_am_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i select the Next Up Sports Filter",
  "keyword": "When "
});
formatter.match({
  "location": "com.SpotLight.steps.NextUpFilter.i_select_the_Next_Up_Sports_Filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i can see an available list of valid Sports to filter by",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.SpotLight.steps.NextUpFilter.i_can_see_an_available_list_of_valid_Sports_to_filter_by(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertTrue(Assert.java:53)\n\tat com.SpotLight.steps.NextUpFilter.i_can_see_an_available_list_of_valid_Sports_to_filter_by(NextUpFilter.java:34)\n\tat ✽.i can see an available list of valid Sports to filter by(file:///Users/elyarabdullah/Desktop/SpotLight/src/test/resources/features/NextUp_filter.feature:6)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "verify number of each available sport list",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "i am on home page",
  "keyword": "Given "
});
formatter.step({
  "name": "i should see all the \"\u003csport category\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "i select \"\u003csport category\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "i should only see  Sport List for the selected \"\u003csport category\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "sport category"
      ]
    },
    {
      "cells": [
        "MLB"
      ]
    },
    {
      "cells": [
        "Lacrosse"
      ]
    },
    {
      "cells": [
        "Soccer"
      ]
    },
    {
      "cells": [
        "KBO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verify number of each available sport list",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.SpotLight.steps.NextUpFilter.i_am_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see all the \"MLB\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SpotLight.steps.VerifySportListFilter.i_should_see_all_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i select \"MLB\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.SpotLight.steps.VerifySportListFilter.i_select(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should only see  Sport List for the selected \"MLB\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SpotLight.steps.VerifySportListFilter.i_should_only_see_Sport_List_for_the_selected(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verify number of each available sport list",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.SpotLight.steps.NextUpFilter.i_am_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see all the \"Lacrosse\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SpotLight.steps.VerifySportListFilter.i_should_see_all_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i select \"Lacrosse\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.SpotLight.steps.VerifySportListFilter.i_select(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: Lacrosse\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027elyars-MacBook-Pro.local\u0027, ip: \u0027172.20.10.5\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5.1\u0027, java.version: \u002717\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\n\tat com.SpotLight.pages.BasePage.selectEachSportCategory(BasePage.java:55)\n\tat com.SpotLight.steps.VerifySportListFilter.i_select(VerifySportListFilter.java:17)\n\tat ✽.i select \"Lacrosse\"(file:///Users/elyarabdullah/Desktop/SpotLight/src/test/resources/features/NextUp_filter.feature:17)\n",
  "status": "failed"
});
formatter.step({
  "name": "i should only see  Sport List for the selected \"Lacrosse\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SpotLight.steps.VerifySportListFilter.i_should_only_see_Sport_List_for_the_selected(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verify number of each available sport list",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.SpotLight.steps.NextUpFilter.i_am_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see all the \"Soccer\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SpotLight.steps.VerifySportListFilter.i_should_see_all_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i select \"Soccer\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.SpotLight.steps.VerifySportListFilter.i_select(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should only see  Sport List for the selected \"Soccer\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SpotLight.steps.VerifySportListFilter.i_should_only_see_Sport_List_for_the_selected(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verify number of each available sport list",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.SpotLight.steps.NextUpFilter.i_am_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see all the \"KBO\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SpotLight.steps.VerifySportListFilter.i_should_see_all_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i select \"KBO\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.SpotLight.steps.VerifySportListFilter.i_select(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: KBO\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027elyars-MacBook-Pro.local\u0027, ip: \u0027172.20.10.5\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.5.1\u0027, java.version: \u002717\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\n\tat com.SpotLight.pages.BasePage.selectEachSportCategory(BasePage.java:55)\n\tat com.SpotLight.steps.VerifySportListFilter.i_select(VerifySportListFilter.java:17)\n\tat ✽.i select \"KBO\"(file:///Users/elyarabdullah/Desktop/SpotLight/src/test/resources/features/NextUp_filter.feature:17)\n",
  "status": "failed"
});
formatter.step({
  "name": "i should only see  Sport List for the selected \"KBO\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SpotLight.steps.VerifySportListFilter.i_should_only_see_Sport_List_for_the_selected(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", "screenshot");
formatter.after({
  "status": "passed"
});
});