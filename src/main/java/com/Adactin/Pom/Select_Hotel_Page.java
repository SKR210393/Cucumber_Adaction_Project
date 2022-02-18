package com.Adactin.Pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Select_Hotel_Page {


	private WebDriver driver;

	public Select_Hotel_Page(WebDriver driver2) {

		this.driver = driver2;
		PageFactory.initElements(driver, this);
	}

	@FindBy(name = "radiobutton_0")
	private WebElement select;

	public WebElement getSelect() {
		return select;
	}
	@FindBy(name="continue")
	private WebElement clickContinue;

	public WebElement getClickContinue() {
		return clickContinue;
	}


}
