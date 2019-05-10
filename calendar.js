"use strict";

/* Set the date displayed in the calender */
var thisDay = new Date();

/* Write the calendar to the element with the id "calendar" */
document.getElementById("newCalendar").innerHTML = createCalendar(thisDay);

//function to generate the calendar table
function createCalendar(calDate) {
    var calendarHTML = "<span class='b'><table id='calendar_table'>";
    calendarHTML += calCaption(calDate);
    calendarHTML += calWeekdayRow();
    calendarHTML += calDays(calDate);
    calendarHTML += "</table> </spam>";
    return calendarHTML;
}

function calCaption(calDate) {
    var monthName = ["January", "february", "march", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //determine the curent month
    var thisMonth = calDate.getMonth();

    //Determine the current year
    var thisYear = calDate.getFullYear();

    // Write the caption
    return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";

}

function calWeekdayRow() {
    var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var rowHTML = "<tr>";

    for (var i = 0; i < dayName.length; i++) {
        rowHTML += "<th class='calendar_weekdays'>" + dayName[i] + "</th>";
    }

    rowHTML += "</tr>";
    return rowHTML;
}

function daysInMonth(calDate) {
    var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var thisYear = calDate.getFullYear();
    var thisMonth = calDate.getMonth();

    if (thisYear % 4 === 0) {
        if ((thisYear % 100 != 0) || (thisYear % 400 === 0)) {
            dayCount[1] = 29;
        }
    }

    return dayCount[thisMonth];
}

function calDays(calDate) {
    
    var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
    var weekDay = day.getDay();  
    
    var htmlCode = "<tr>";
    for (var i = 0; i < weekDay; i++){
        htmlCode += "<td></td>";
    }
    
    var totalDays = daysInMonth(calDate);
    
    var highlightDay = calDate.getDate();
    for (i = 1; i <= totalDays; i++){
        day.setDate(i);
        weekDay = day.getDay();
        
        if (weekDay === 0) htmlCode += "<tr>";
        if(i === highlightDay){
        htmlCode += "<td class='calendar_dates' id='calendar_today'>" + i + "</td>";
        } else {
            htmlCode += "<td class='calendar_dates'>" + i + "</td>";
        }
        if (weekDay === 6) htmlCode += "</tr>";
    }
    return htmlCode;
}
