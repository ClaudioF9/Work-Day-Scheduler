//create variables
let dateAndTime = $("#currentDay");


//create function to display time-------------------
let currentTime = moment().format("dddd, MMMM Do");

function timeDisplay() {
dateAndTime.text(currentTime);
}
timeDisplay();
//---------------------------------------------------