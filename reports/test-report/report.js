$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login With the bois",
  "description": "This Feature is to test that general login functionality works as expected.",
  "id": "login-with-the-bois",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 2740683446,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Bob wants to log in",
  "description": "",
  "id": "login-with-the-bois;bob-wants-to-log-in",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am Bob",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I want to login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I can access the splash page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmBob()"
});
formatter.result({
  "duration": 5012941805,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iWantToLogin()"
});
formatter.result({
  "duration": 51540,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iCanAccessTheSplashPage()"
});
formatter.result({
  "duration": 58788094,
  "status": "passed"
});
});