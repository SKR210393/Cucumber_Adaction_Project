package com.Adactin.Pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Search_Hotel_Page {

	private WebDriver driver;

	public Search_Hotel_Page(WebDriver driver2) {
		this.driver = driver2;

		PageFactory.initElements(driver, this);
	}

	@FindBy(name = "location")
	private WebElement location;

	@FindBy(name = "hotels")
	private WebElement hotels;

	@FindBy(name = "room_type")
	private WebElement roomType;

	@FindBy(name = "room_nos")
	private WebElement roomNos;

//	@FindBy(name = "datepick_in")
	@FindBy(xpath = "(//input[@class='date_pick'])[1]")
	private WebElement fromDate;

	@FindBy(name = "datepick_out")
	private WebElement toDate;

	@FindBy(name = "adult_room")
	private WebElement adultRoom;

	@FindBy(name = "child_room")
	private WebElement childRoom;

	@FindBy(name = "Submit")
	private WebElement search;

	public WebElement getLocation() {
		return location;
	}

	public WebElement getHotels() {
		return hotels;
	}

	public WebElement getRoomType() {
		return roomType;
	}

	public WebElement getRoomNos() {
		return roomNos;
	}

	public WebElement getFromDate() {
		return fromDate;
	}

	public WebElement getToDate() {
		return toDate;
	}

	public WebElement getAdultRoom() {
		return adultRoom;
	}

	public WebElement getChildRoom() {
		return childRoom;
	}

	public WebElement getSearch() {
		return search;
	}

}
