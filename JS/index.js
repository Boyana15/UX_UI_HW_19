console.log ("JS loaded correctly");

// Scroll to About Me Section
$("#about").on("click",function() {
    $("html, body").animate({scrollTop: $(".heroImg").offset().top
}, 2000);
});

// Scroll to Skills Section
$("#skills").on("click",function() {
    $("html, body").animate({scrollTop: $(".mySkills").offset().top
}, 2000);
});

// Scroll to myWork Section
$("#work").on("click",function() {
    $("html, body").animate({scrollTop: $(".myWork").offset().top
}, 2000);
});

//Nav Hover
$( "a" ).hover(function() {
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 500 );
    console.log ("Nav hover triggered");
  });

  //Button Hovers
  $( "button" ).hover(function() {
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 500 );
    console.log ("Button hover triggered");
  });



  