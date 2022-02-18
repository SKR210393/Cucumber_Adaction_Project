package com.Adactin.sd;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;

import com.Adactin.Cucumber.Project.Base_Class;
import com.Helper.File.Adactin_Page_Object_Manager;
import com.TestRunner.Runner_Class;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Def extends Base_Class {
	@Before
	public void before_Hooks(Scenario s) {
		String status = s.getName();
		System.out.println("Status : " + status);
	}

	@After
	public void after_Hooks(Scenario s1) throws Throwable {
		String status1 = s1.getStatus();
		System.out.println("Status : " + status1);
		if (s1.isFailed()) {
			takeSnap("C:\\Users\\Saravana\\eclipse-workspace\\Adactin.Cucumber.Project\\Pictures\\snap1.png");
		}
	}

	public static WebDriver driver = Runner_Class.driver;
	Adactin_Page_Object_Manager pom = new Adactin_Page_Object_Manager(driver);

	@Given("^user Lunch The Application$")
	public void user_Lunch_The_Application() throws Throwable {
		getURL("https://adactinhotelapp.com/");
	}

	@When("^user Enter The \"([^\"]*)\" In User Name Field$")
	public void user_Enter_The_In_User_Name_Field(String username) throws Throwable {
		sendValues(pom.getInstanceLogin().getUsername(), username);
	}

	@When("^user Enter The \"([^\"]*)\" In Password Field$")
	public void user_Enter_The_In_Password_Field(String password) throws Throwable {
		sendValues(pom.getInstanceLogin().getPassword(), password);
	}

	@Then("^user Click On The Login Button And It Navigate To The Search Hotel Page$")
	public void user_Click_On_The_Login_Button_And_It_Navigate_To_The_Search_Hotel_Page() throws Throwable {
		clickMethod(pom.getInstanceLogin().getLogin());
	}

	@When("^user Select The Location In DropDown$")
	public void user_Select_The_Location_In_DropDown() throws Throwable {
		dropDown(pom.getInstanceSearch().getLocation(), "byIndex", "3");
	}

	@When("^user Select The Hotel In DropDown$")
	public void user_Select_The_Hotel_In_DropDown() throws Throwable {
		dropDown(pom.getInstanceSearch().getHotels(), "byIndex", "2");
	}

	@When("^user Select The RoomType In DropDown$")
	public void user_Select_The_RoomType_In_DropDown() throws Throwable {
		dropDown(pom.getInstanceSearch().getRoomType(), "byindex", "3");
	}

	@When("^user Select The NumberOfRoom In DropDown$")
	public void user_Select_The_NumberOfRoom_In_DropDown() throws Throwable {
		dropDown(pom.getInstanceSearch().getRoomNos(), "byIndex", "2");
	}

	@When("^user Enter The Date in Check In Date Field$")
	public void user_Enter_The_Date_in_Check_In_Date_Field() throws Throwable {
		clear(pom.getInstanceSearch().getFromDate());
		sendValues(pom.getInstanceSearch().getFromDate(), "17/02/2022");
	}

	@When("^user Enter The Date in Check Out Date Field$")
	public void user_Enter_The_Date_in_Check_Out_Date_Field() throws Throwable {
		clear(pom.getInstanceSearch().getToDate());
		sendValues(pom.getInstanceSearch().getToDate(), "18/02/2022");
	}

	@When("^user Select The Adult Per Room Count In DropDown$")
	public void user_Select_The_Adult_Per_Room_Count_In_DropDown() throws Throwable {
		dropDown(pom.getInstanceSearch().getAdultRoom(), "byIndex", "3");
	}

	@When("^user Select The Children Per Room Count In DropDown$")
	public void user_Select_The_Children_Per_Room_Count_In_DropDown() throws Throwable {
		dropDown(pom.getInstanceSearch().getChildRoom(), "byIndex", "1");
	}

	@Then("^user Click The Search Button And It Navigates To the Select Hotel Page$")
	public void user_Click_The_Search_Button_And_It_Navigates_To_the_Select_Hotel_Page() throws Throwable {
		clickMethod(pom.getInstanceSearch().getSearch());
	}

	@When("^user Click The RadioButton And Select The Hotel For Booking$")
	public void user_Click_The_RadioButton_And_Select_The_Hotel_For_Booking() throws Throwable {
		clickMethod(pom.getInstanceSelect().getSelect());
	}

	@Then("^user Click The Continue Button And It Navigate to the Booking Page$")
	public void user_Click_The_Continue_Button_And_It_Navigate_to_the_Booking_Page() throws Throwable {
		clickMethod(pom.getInstanceSelect().getClickContinue());
	}

	@When("^user Enter The FirstName In First Name Field$")
	public void user_Enter_The_FirstName_In_First_Name_Field() throws Throwable {
		sendValues(pom.getInstanceBooking().getFirstName(), "Saravana");
	}

	@When("^user Enter The LastName In Last Name Field$")
	public void user_Enter_The_LastName_In_Last_Name_Field() throws Throwable {
		sendValues(pom.getInstanceBooking().getLastName(), "kumar");
	}

	@When("^user Enter The Address In Billing Address Field$")
	public void user_Enter_The_Address_In_Billing_Address_Field() throws Throwable {
		sendValues(pom.getInstanceBooking().getAddress(), "PO 123, New Street, Brisbane- 12345");
	}

	@When("^user Enter The Card Number In Credit Card Number Field$")
	public void user_Enter_The_Card_Number_In_Credit_Card_Number_Field() throws Throwable {
		sendValues(pom.getInstanceBooking().getCardNumber(), "1234567890123456");
	}

	@When("^user Select The Credit Card Type In DropDown$")
	public void user_Select_The_Credit_Card_Type_In_DropDown() throws Throwable {
		dropDown(pom.getInstanceBooking().getCcType(), "byIndex", "3");
	}

	@When("^user Select The Expiry Month In The DropDown$")
	public void user_Select_The_Expiry_Month_In_The_DropDown() throws Throwable {
		dropDown(pom.getInstanceBooking().getExpMonth(), "byIndex", "4");
	}

	@When("^user Select The Year In DropDown$")
	public void user_Select_The_Year_In_DropDown() throws Throwable {
		dropDown(pom.getInstanceBooking().getExpYear(), "byIndex", "12");
	}

	@When("^user Enter The CVVNumber In The CVV Number Field$")
	public void user_Enter_The_CVVNumber_In_The_CVV_Number_Field() throws Throwable {
		sendValues(pom.getInstanceBooking().getCvv(), "123");
	}

	@Then("^user Click The Book Now Button And It Navigate To The Hotel Booking Confirmation Page$")
	public void user_Click_The_Book_Now_Button_And_It_Navigate_To_The_Hotel_Booking_Confirmation_Page()
			throws Throwable {
		clickMethod(pom.getInstanceBooking().getBookNow());
		implicitWait(30, TimeUnit.SECONDS);
	}

	@When("^user Take ScreenShot Of Booking Confirmation Page$")
	public void user_Take_ScreenShot_Of_Booking_Confirmation_Page() throws Throwable {
		takeSnap("C:\\Users\\Saravana\\eclipse-workspace\\Adactin.Cucumber.Project\\Pictures\\snap2.png");
	}

	@Then("^user Click The MyItinerary Button And It Navigate To The Booked Itinerary Page$")
	public void user_Click_The_MyItinerary_Button_And_It_Navigate_To_The_Booked_Itinerary_Page() throws Throwable {
		clickMethod(pom.getInstanceOrder().getOrderHistory());
		sleep(2000);
	}

	@When("^user Take ScreenShot Of Booked Itinerary Page$")
	public void user_Take_ScreenShot_Of_Booked_Itinerary_Page() throws Throwable {
		takeSnap("C:\\Users\\Saravana\\eclipse-workspace\\Adactin.Cucumber.Project\\Pictures\\snap3.png");
	}

	@Then("^user Click The Logout Button And It Logout The User From Adactin Web Application Page$")
	public void user_Click_The_Logout_Button_And_It_Logout_The_User_From_Adactin_Web_Application_Page()
			throws Throwable {
		clickMethod(pom.getInstanceOrder().getLogOut());
	}

}
