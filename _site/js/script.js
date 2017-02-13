//imageslider
$(document).ready( function (){
  $('.loop').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      items:1,
  })
  $(".burger-button").click(function(){
       $(".burger-button").toggleClass("active");
       $(".burger-menu").slideToggle();
     });
})
// //Step 1: create a variable to keep count of how many images are hidden
// var numberOfHiddenPhotos = 0;
//
// //Step 2: decide how long we want each photo to show for
// setInterval(function(){
// //Step 3: Show/hide each Photo
// //If the variable is equal to 0
// if (numberOfHiddenPhotos === 0) {
//   //Hide the top photo
// $(".photo-3").fadeOut();
// //Set the number of hidden photos to 1
// numberOfHiddenPhotos = 1;
// //Else if the numberOfHiddenPhotos is equal to 1
//
// } else if (numberOfHiddenPhotos === 1) {
//   //Hide the second photo
// $(".photo-2").fadeOut();
// numberOfHiddenPhotos = 2;
//
// //Else if number is equal to 2
// } else if (numberOfHiddenPhotos === 2) {
//   //Fade photo 3 and photo 2 back in
//   $(".photo-3").fadeIn();
//   $(".photo-2").fadeIn();
//   // Update numberOfHiddenPhotos
//   numberOfHiddenPhotos = 0;
// }
// }, 2000);


//End of document ready
