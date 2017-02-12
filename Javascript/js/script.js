// DATA TYPES
// "HELLO WORLD" - String
//1, 382, -2948, -1234 - Integers
// 1.2, 213.543 - Floats
// true, false - Booleans

// Storing Data
// var name = "Laura";

// Functions
//Functions are actions that we can use on on our site

// alert("Fuck Off Pop Up");

// Structuring a Function
function name (parameter1, parameter2){

};
// Instructions to carry out

// jquery
$("a").on("click",function(){

  // Changes CSS porperties
  // $("body").css("background-color", "blue");

  //Show/hide our div
   //$("#sweet-box").hide();
   //$("#sweet-box").show();

  //Fade in/out
   //$("#sweet-box").fadeToggle();

   //Add/Remove classes
   //$("#sweet-box").toggleClass("rainbow");
});

//imageslider

//Step 1: create a variable to keep count of how many images are hidden
var numberOfHiddenPhotos = 0;

//Step 2: decide how long we want each photo to show for
setInterval(function(){
//Step 3: Show/hide each Photo
//If the variable is equal to 0
if (numberOfHiddenPhotos === 0) {
  //Hide the top photo
$(".photo-3").fadeOut();


} 2000);
