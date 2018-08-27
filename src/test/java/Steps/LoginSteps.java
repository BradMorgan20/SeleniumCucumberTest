package Steps;
import Selenium.ClassGlobals;
import Selenium.WebDriverSetup;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.WebDriver;

import java.net.MalformedURLException;

import static org.junit.Assert.fail;


public class LoginSteps extends ClassGlobals {
    private WebDriverSetup webDriverSetup;
    private WebDriver driver;
    Scenario scenario;

    @Before
    public void initiateSetup() throws MalformedURLException{
        webDriverSetup = new WebDriverSetup();
        webDriverSetup.setUp();
        driver = webDriverSetup.driver();

    }

    @Given("I am Bob")
    public void iAmBob() throws Throwable {
        driver.get("http://www.facebook.com");
        Thread.sleep(3000);
        System.out.println("I AM BOB");
        fail("It failed");
    }

    @And("I want to login")
    public void iWantToLogin() throws Throwable {
       System.out.println("I Want to Login");
    }

    @Then("I can access the splash page")
    public void iCanAccessTheSplashPage() throws Throwable {
        System.out.println("I can access the splash page");
        driver.quit();
    }
}
