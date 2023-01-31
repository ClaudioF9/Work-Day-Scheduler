//create variables
let dateAndTime = $("#currentDay");


//create function to display time-------------------
let currentTime = moment().format("dddd, MMMM Do");

function timeDisplay() {
dateAndTime.text(currentTime);
}
timeDisplay();
//---------------------------------------------------

//creating the text input
// $(document).ready(function() {
//     $('.description').click(function() {
//       // Check if the description text is not already an input
//       if ($(this).children().length === 0) {
//         // Create an input and set the value to the current text
//         var input = $('<input>').val($(this).text());
//         // Replace the current text with the input
//         $(this).html(input);
//         // Focus on the input so the user can type immediately
//         input.focus();
//       }
//     });
//   });

//uses click to allow for text to be typed in
$(document).ready(function() {
    $('.description').click(function() {
      $(this).attr('contentEditable', 'true');
    });
  });

//save to local storage
$(".saveBtn").click(function () {
    let text = $(this).prev().text();
    let time = $(this).prev().prev().attr("id");
    localStorage.setItem(time, text);
    });

    //not working
    // $(document).ready(function() {
    //     let times = $('.description').prev().attr("id");
    //     let savedText = sessionStorage.getItem(times);
    //     if (savedText) {
    //     $('.description').text(savedText);
    //     }
    //     });

//workign but not idea
    // $(document).ready(function() {
    // let items = Object.entries(localStorage);
    // for (const [time, text] of items) {
    // $("#" + time).next().text(text);
    // }
    // });

// $(document).ready(function() {
//     $(".description").each(function() {
//         let hour = $(this).siblings(".hour").text();
//         let description = localStorage.getItem(hour);
//         $(this).val(description);
//     });
// });
      
      
      
      

// get item if needed
//$(".saveBtn").click(function () {
// let text = $(this).prev().text();
// let time = $(this).prev().prev().attr("id");
// localStorage.setItem(time, text);
// });



// let testTime = moment().format("H");
// console.log(testTime);

// let testId = $("#16");

// console.log(typeof testId);

// let testFinal = JSON.stringify(testId);
// console.log(testFinal);

// console.log(typeof testTime);

// let test = parseInt(testId);
// console.log(test);

// let currentHour = parseInt(moment().format('H'));
// console.log(currentHour);
// console.log(typeof currenthour);

// console.log(testId);

// let textId = testId.text();
// let testStr = textId.toString();

// console.log(testStr);

// let newTest = $("#16");
// let newStr = newTest.toString();
// console.log(newStr);

// let testIng = $("elementSelector").attr("16");
// console.log(testIng);

// let something = $("#17").val("17");
// console.log(something);

// testTwo = $("#13").data("key", "13");
// console.log($("#13").data("value"));

// let tryIng = $("div").attr("id");
// console.log(tryIng);

// let tyrinAgain = $("9").val();
// console.log(tyrinAgain);