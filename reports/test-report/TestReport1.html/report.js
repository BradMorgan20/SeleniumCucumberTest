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
  "duration": 2796621806,
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
  "duration": 4772416295,
  "error_message": "java.lang.AssertionError: It failed\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat Steps.LoginSteps.iAmBob(LoginSteps.java:34)\r\n\tat ✽.Given I am Bob(login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.iWantToLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iCanAccessTheSplashPage()"
});
formatter.result({
  "status": "skipped"
});
});