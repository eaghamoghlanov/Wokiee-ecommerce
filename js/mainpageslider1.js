$(document).ready(function () {

    $("#owl-demo").owlCarousel({

        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 20000,
        autoplayHoverPause: false,
        nav: true,
        navtext: ["ᐸ", "ᐳ"],
        animateIn: 'fadeIn',
        animateOut: 'fadeOut' 

    });

});

window.addEventListener("scroll",function(){
    if(window.scrollY>50){
        document.querySelector("#header").classList.add("sticky")
    }
    else{
        document.querySelector("#header").classList.remove("sticky")
    }
});

$(".modal-fullscreen").on('show.bs.modal', function () {
    setTimeout( function() {
      $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    },0);
  });
  $(".modal-fullscreen").on('hidden.bs.modal', function () {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  });
  
  setTimeout(function() {
      $('#fsModal').modal('show');
  }, 2000);
