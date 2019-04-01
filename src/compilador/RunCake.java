package compilador;
import java.io.File;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.ExtentCucumberFormatter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"src/features"},glue={"etapas"},monochrome=true
,plugin = {"pretty","html:target/cucumber",
		"com.cucumber.listener.ExtentCucumberFormatter"})
public class RunCake {
	
	@BeforeClass
	public static void setup(){
		ExtentCucumberFormatter.initiateExtentCucumberFormatter();
		
		ExtentCucumberFormatter.loadConfig(new File("src/extent-config.xml"));
		
		ExtentCucumberFormatter.addSystemInfo("Browser Name", "Firefox");
		ExtentCucumberFormatter.addSystemInfo("Browser Version","v31.0");
		ExtentCucumberFormatter.addSystemInfo("Selenium Version","v2.53.1");
	}

}
