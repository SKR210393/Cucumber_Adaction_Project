package com.Adactin.Pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Order_History_Page {


	private WebDriver driver;

	public Order_History_Page(WebDriver driver2) {

		this.driver = driver2;
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//input[@name='my_itinerary']")
	private WebElement orderHistory;
	
	@FindBy(xpath = "//a[text()='Logout']")
	private WebElement logOut;

	public WebElement getOrderHistory() {
		return orderHistory;
	}
	
	public WebElement getLogOut() {
		return logOut;
	}

}
