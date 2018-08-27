package Runner;

import cucumber.api.CucumberOptions;
import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features= "src/test/java/Features",
        tags="@Login", //CHANGE YOUR TAG HERE FOR WHAT TESTS YOU WISH TO RUN IN THE CORRESPONDING FEATURE FILES
        glue="Steps",
        format = {"pretty", "html:reports/test-report/TestReport1.html"}
        )

public class RunFile{
}
