var currDay = document.querySelector("#currentDay");
var textBoxInput = document.querySelectorAll(".container #text1");
var timeContainer = document.querySelector(".container #label1");
var saveButton1 = document.querySelector("#save1");


// var createDiv = document.createElement

saveButton1.addEventListener("click", function () {
    localStorage.setItem("text1", textBoxInput.value);

});
console.log(localStorage.getItem("text1"));

//changing format of moment and storing to variable
var liveTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
$("#currentDay").text(liveTime);



//moment time formated to a single digit hr
var thisHour = moment().hour();
console.log(thisHour);

//var x = $("#rowNum1").attr("value");

// var y = document.querySelector("#rowNum1")
// y.getAttribute("value") //returns 9
// y.setAttribute("value", "James")



$(".description").each(function (i, value) {
    var timeBlockVal = parseInt(value.id);
    console.log(timeBlockVal, thisHour)

    if (timeBlockVal === thisHour) {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
    } else if (timeBlockVal > thisHour) {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");

    } else {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    }
})






// signUpButton.addEventListener("click", function(event) {
//     event.preventDefault();

//     var email = document.querySelector("#email").value;
//     var password = document.querySelector("#password").value;

//     if (email === "") {
//       displayMessage("error", "Email cannot be blank");
//     } else if (password === "") {
//       displayMessage("error", "Password cannot be blank");
//     } else {
//       displayMessage("success", "Registered successfully");

//       localStorage.setItem("email", email);
//       localStorage.setItem("password", password);
//       renderLastRegistered();
//     }
//   });

// var objectList: {
//     : ""
// }

//make a counter for i attached to if hours 
//find way for .past,.present,.future to display based on moment hr range

//attach timer ((hr only)) 
//append a div with class names"
{/* <div class="row align-items-center">
            <div class="col-2 timeEl time-block hour">
                9AM
            </div>
            <textarea type ="text" class="col-8">
                
            </textarea>
            <button class="col-2 saveBtn">
               
            </button>
        </div> */}