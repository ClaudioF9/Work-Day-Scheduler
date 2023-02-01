//create variables
let dateAndTime = $("#currentDay");
let blockTime = $(".time-block");

let testingTime = $(".hour").attr("id");
console.log(testingTime);


//create function to display time-------------------
let currentTime = moment().format("dddd, MMMM Do");

function timeDisplay() {
dateAndTime.text(currentTime);
}
timeDisplay();
//---------------------------------------------------


//Change backgournd colour------------------------What a mission
let currentHour = moment().format("H");
// let currentHour = "13"; 
$('.description').each(function(){
    var idValue = parseInt($(this).prop('id'));
    if(idValue > currentHour && idValue < currentHour+6){
        $(this).css('background-color','#77dd77');
    }else if(idValue < currentHour && idValue > currentHour-6){
        $(this).css('background-color','#d3d3d3');
    }else if(idValue == currentHour){
        $(this).css('background-color','#ff6961');
    }
});

// console.log(typeof currentHour);



//uses click to allow for text to be typed in----------------------
$(document).ready(function() {
    $('.description').click(function() {
    $(this).attr('contentEditable', 'true');
    });
});

//save to local storage----------------------------------------------
$(".saveBtn").click(function () {
    let text = $(this).prev().text();
    let time = $(this).prev().prev().attr("id");
    localStorage.setItem(time, text);
    console.log(typeof time);
    });

//stores text input in local storage---------------------------------
$(".saveBtn").click(function () {
let text = $(this).prev().text();
let time = $(this).prev().prev().attr("id");
localStorage.setItem(time, text);
});

//retains text input after refresh-------------------------------------
$(document).ready(function() {
    let items = Object.entries(localStorage);
    for (const [time, text] of items) {
    $("#" + time).next().text(text);
    }
    });
