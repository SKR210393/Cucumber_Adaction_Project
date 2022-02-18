package com.Helper.File;

import org.openqa.selenium.WebDriver;

import com.Adactin.Pom.Booking_Page;
import com.Adactin.Pom.Login_Page;
import com.Adactin.Pom.Order_History_Page;
import com.Adactin.Pom.Search_Hotel_Page;
import com.Adactin.Pom.Select_Hotel_Page;

public class Adactin_Page_Object_Manager {

	public WebDriver driver;
	private Login_Page login;
	private Search_Hotel_Page search;
	private Select_Hotel_Page select;
	private Booking_Page booking;
	private Order_History_Page order;

	public Adactin_Page_Object_Manager(WebDriver driver2) {
		this.driver = driver2;
	}

	public Login_Page getInstanceLogin() {
		if (login == null) {

			login = new Login_Page(driver);
		}
		return login;
	}

	public Search_Hotel_Page getInstanceSearch() {
		if (search == null) {

			search = new Search_Hotel_Page(driver);
		}
		return search;
	}

	public Select_Hotel_Page getInstanceSelect() {
		if (select == null) {
			select = new Select_Hotel_Page(driver);
		}
		return select;
	}

	public Booking_Page getInstanceBooking() {
		if (booking == null) {
			booking = new Booking_Page(driver);
		}
		return booking;
	}

	public Order_History_Page getInstanceOrder() {
		if (order == null) {
			order = new Order_History_Page(driver);
		}
		return order;
	}

}
