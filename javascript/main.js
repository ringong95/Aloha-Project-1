

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

$('.emailsub').on('submit', function(event) 
{
  var farttrue = false;
   event.preventDefault();
   if ( $($(".emailsub input[name=emailbox]")).val() == '' ) {
      alert('You missed the field.');
      farttrue = true;
   } else {
      alert('Thanks for subscribing!');
   }
   if (farttrue = true){
    fartscroll()
   }
});
});



