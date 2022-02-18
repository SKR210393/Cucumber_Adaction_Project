Feature: Hotel Booking Functionality

@smokeTest
Scenario Outline: Login Page

Given user Lunch The Application
When user Enter The "<username>" In User Name Field 
And user Enter The "<password>" In Password Field
Then user Click On The Login Button And It Navigate To The Search Hotel Page

Examples: 

|username|password|
|New|n123|
|Old|o123|
|Current|C123|
|Saravanakumar|New123|

@sanitityTest1
Scenario: Search Hotel Page
When user Select The Location In DropDown
And user Select The Hotel In DropDown
And user Select The RoomType In DropDown
And user Select The NumberOfRoom In DropDown
And user Enter The Date in Check In Date Field
And user Enter The Date in Check Out Date Field
And user Select The Adult Per Room Count In DropDown
And user Select The Children Per Room Count In DropDown
Then user Click The Search Button And It Navigates To the Select Hotel Page

@sanitityTest2
Scenario: Select Hotel Page
When user Click The RadioButton And Select The Hotel For Booking
Then user Click The Continue Button And It Navigate to the Booking Page

@sanitityTest3
Scenario: Book A Hotel Page
When user Enter The FirstName In First Name Field
And user Enter The LastName In Last Name Field
And user Enter The Address In Billing Address Field
And user Enter The Card Number In Credit Card Number Field
And user Select The Credit Card Type In DropDown
And user Select The Expiry Month In The DropDown
And user Select The Year In DropDown
And user Enter The CVVNumber In The CVV Number Field
Then user Click The Book Now Button And It Navigate To The Hotel Booking Confirmation Page

@sanitityTest4
Scenario: Hotel Booking Confirmation Page
When user Take ScreenShot Of Booking Confirmation Page
Then user Click The MyItinerary Button And It Navigate To The Booked Itinerary Page

@regressionTest
Scenario: Hotel Booked Itinerary Page
When user Take ScreenShot Of Booked Itinerary Page
Then user Click The Logout Button And It Logout The User From Adactin Web Application Page