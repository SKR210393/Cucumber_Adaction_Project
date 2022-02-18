$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking Functionality",
  "description": "",
  "id": "hotel-booking-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-functionality;login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Lunch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"\u003cusername\u003e\" In User Name Field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"\u003cpassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Click On The Login Button And It Navigate To The Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "hotel-booking-functionality;login-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "hotel-booking-functionality;login-page;;1"
    },
    {
      "cells": [
        "New",
        "n123"
      ],
      "line": 14,
      "id": "hotel-booking-functionality;login-page;;2"
    },
    {
      "cells": [
        "Old",
        "o123"
      ],
      "line": 15,
      "id": "hotel-booking-functionality;login-page;;3"
    },
    {
      "cells": [
        "Current",
        "C123"
      ],
      "line": 16,
      "id": "hotel-booking-functionality;login-page;;4"
    },
    {
      "cells": [
        "Saravanakumar",
        "New123"
      ],
      "line": 17,
      "id": "hotel-booking-functionality;login-page;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 718600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-functionality;login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Lunch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"New\" In User Name Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"n123\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Click On The Login Button And It Navigate To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Lunch_The_Application()"
});
formatter.result({
  "duration": 3341934000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_User_Name_Field(String)"
});
formatter.result({
  "duration": 111310600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "n123",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 74075200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Login_Button_And_It_Navigate_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 331204600,
  "status": "passed"
});
formatter.after({
  "duration": 107900,
  "status": "passed"
});
formatter.before({
  "duration": 53100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-functionality;login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Lunch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"Old\" In User Name Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"o123\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Click On The Login Button And It Navigate To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Lunch_The_Application()"
});
formatter.result({
  "duration": 252870700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Old",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_User_Name_Field(String)"
});
formatter.result({
  "duration": 68290300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "o123",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 98004900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Login_Button_And_It_Navigate_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 296629900,
  "status": "passed"
});
formatter.after({
  "duration": 41400,
  "status": "passed"
});
formatter.before({
  "duration": 84800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-functionality;login-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Lunch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"Current\" In User Name Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"C123\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Click On The Login Button And It Navigate To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Lunch_The_Application()"
});
formatter.result({
  "duration": 245537200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Current",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_User_Name_Field(String)"
});
formatter.result({
  "duration": 66662200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C123",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 78517200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Login_Button_And_It_Navigate_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 304919500,
  "status": "passed"
});
formatter.after({
  "duration": 50400,
  "status": "passed"
});
formatter.before({
  "duration": 48300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-functionality;login-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Lunch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"Saravanakumar\" In User Name Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"New123\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Click On The Login Button And It Navigate To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Lunch_The_Application()"
});
formatter.result({
  "duration": 246846000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Saravanakumar",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_User_Name_Field(String)"
});
formatter.result({
  "duration": 76001700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New123",
      "offset": 16
    }
  ],
  "location": "Step_Def.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 94278700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Login_Button_And_It_Navigate_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 719935400,
  "status": "passed"
});
formatter.after({
  "duration": 157500,
  "status": "passed"
});
formatter.before({
  "duration": 90100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search Hotel Page",
  "description": "",
  "id": "hotel-booking-functionality;search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@sanitityTest1"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user Select The Location In DropDown",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user Select The Hotel In DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Select The RoomType In DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Select The NumberOfRoom In DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user Enter The Date in Check In Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user Enter The Date in Check Out Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user Select The Adult Per Room Count In DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Select The Children Per Room Count In DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user Click The Search Button And It Navigates To the Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Select_The_Location_In_DropDown()"
});
formatter.result({
  "duration": 290714400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Hotel_In_DropDown()"
});
formatter.result({
  "duration": 185102200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_RoomType_In_DropDown()"
});
formatter.result({
  "duration": 186510100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_NumberOfRoom_In_DropDown()"
});
formatter.result({
  "duration": 186957100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_Date_in_Check_In_Date_Field()"
});
formatter.result({
  "duration": 112873100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_Date_in_Check_Out_Date_Field()"
});
formatter.result({
  "duration": 107284100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Adult_Per_Room_Count_In_DropDown()"
});
formatter.result({
  "duration": 171047700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Children_Per_Room_Count_In_DropDown()"
});
formatter.result({
  "duration": 138274800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_The_Search_Button_And_It_Navigates_To_the_Select_Hotel_Page()"
});
formatter.result({
  "duration": 551654500,
  "status": "passed"
});
formatter.after({
  "duration": 60900,
  "status": "passed"
});
formatter.before({
  "duration": 40700,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Select Hotel Page",
  "description": "",
  "id": "hotel-booking-functionality;select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@sanitityTest2"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "user Click The RadioButton And Select The Hotel For Booking",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user Click The Continue Button And It Navigate to the Booking Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Click_The_RadioButton_And_Select_The_Hotel_For_Booking()"
});
formatter.result({
  "duration": 64820300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_The_Continue_Button_And_It_Navigate_to_the_Booking_Page()"
});
formatter.result({
  "duration": 503921900,
  "status": "passed"
});
formatter.after({
  "duration": 43700,
  "status": "passed"
});
formatter.before({
  "duration": 42900,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Book A Hotel Page",
  "description": "",
  "id": "hotel-booking-functionality;book-a-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@sanitityTest3"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "user Enter The FirstName In First Name Field",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user Enter The LastName In Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user Enter The Address In Billing Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user Enter The Card Number In Credit Card Number Field",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user Select The Credit Card Type In DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user Select The Expiry Month In The DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user Select The Year In DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user Enter The CVVNumber In The CVV Number Field",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user Click The Book Now Button And It Navigate To The Hotel Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Enter_The_FirstName_In_First_Name_Field()"
});
formatter.result({
  "duration": 72574900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_LastName_In_Last_Name_Field()"
});
formatter.result({
  "duration": 69839000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_Address_In_Billing_Address_Field()"
});
formatter.result({
  "duration": 75218500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_Card_Number_In_Credit_Card_Number_Field()"
});
formatter.result({
  "duration": 71125300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Credit_Card_Type_In_DropDown()"
});
formatter.result({
  "duration": 189197000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Expiry_Month_In_The_DropDown()"
});
formatter.result({
  "duration": 207802900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_The_Year_In_DropDown()"
});
formatter.result({
  "duration": 324019700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_The_CVVNumber_In_The_CVV_Number_Field()"
});
formatter.result({
  "duration": 65381700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_The_Book_Now_Button_And_It_Navigate_To_The_Hotel_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 71604000,
  "status": "passed"
});
formatter.after({
  "duration": 44000,
  "status": "passed"
});
formatter.before({
  "duration": 36500,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Hotel Booking Confirmation Page",
  "description": "",
  "id": "hotel-booking-functionality;hotel-booking-confirmation-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@sanitityTest4"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "user Take ScreenShot Of Booking Confirmation Page",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user Click The MyItinerary Button And It Navigate To The Booked Itinerary Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Take_ScreenShot_Of_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 119800200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_The_MyItinerary_Button_And_It_Navigate_To_The_Booked_Itinerary_Page()"
});
formatter.result({
  "duration": 7765293500,
  "status": "passed"
});
formatter.after({
  "duration": 85600,
  "status": "passed"
});
});