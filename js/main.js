// FAQ DROPDOWN JS START
$(function(){
    var dropdown = document.getElementsByClassName("dropdown_btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
  }) 
  // FAQ DROPDOWN JS END 

  // BACK TO TOP BUTTON FUNCTION START
  //==== Back-to-top button
  $(window).on('scroll', function(event) {
    if($(this).scrollTop() > 400){
        $('.back-to-top').fadeIn(200)
    } else{
        $('.back-to-top').fadeOut(200)
    }
});
//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});
// BACK TO TOP BUTTON FUNCTION END

// STICKY HEADER START
$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  
  if(scrolling > 200){
      $('.navbar').addClass('sticky_header');
  }
  else {
       $('.navbar').removeClass('sticky_header');
  }
  });  
// STICKY HEADER END

$(function(){
  // VIDEO PART VENO BOX START
new VenoBox({
  selector: '.my-video-links',
});
// VIDEO PART VENO BOX END
}
)
