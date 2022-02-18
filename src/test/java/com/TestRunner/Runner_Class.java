package com.TestRunner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.Adactin.Cucumber.Project.Base_Class;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src//test//java//com//Adactin//feature", // ---> Feature file path

		glue = "com.Adactin.sd", // ---> Step Definition class

		monochrome = true, // ---- > Boolean Condition - It will remove the Special characters

		dryRun = false, // ---> Boolean Condition - It will check the feature & SD before actual running

		strict = true, // ---> Boolean Condition - It will check the feature & SD during actual running

		tags = ("~@regressionTest"), // ---> to neglect a Scenario use ~(Tilt Symbol) and this syntax

		plugin = { "html:Reports/RunnerReport", // ---> // html:FolderName/ReportName
//				"pretty", //----> To print the report in Console

				"json:JsonReport/cucumberjson.json",

				"com.cucumber.listener.ExtentCucumberFormatter:ExtendReport/Report.html" 
		})

public class Runner_Class {

	public static WebDriver driver;

	@BeforeClass
	public static void set_Up() {
		driver = Base_Class.browserLaunch("chrome");
	}

	@AfterClass
	public static void tear_Down() {

		Base_Class.quitMethod();
	}
}
