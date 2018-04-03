$(document).ready(function() {
/* LIGHT EFFECT*/
  function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}
  document.addEventListener('mousemove', update)
  document.addEventListener('touchmove', update)


}); //end
  

    /*MODAL */
    $(function () {
      $('.md-trigger').on('click', function() {
        $('.md-modal').addClass('md-show');
      });
      $('.md-close1').on('click', function() {
        $('.md-modal').removeClass('md-show');
      });

      $('.md-trigger-2').on('click', function() {
        $('.md-modal-2').addClass('md-show');
      });
      $('.md-close1').on('click', function() {
        $('.md-modal-2').removeClass('md-show');
      });

      $('.md-trigger-3').on('click', function() {
        $('.md-modal-3').addClass('md-show');
      });
      $('.md-close1').on('click', function() {
        $('.md-modal-3').removeClass('md-show');
      });

      $('.md-trigger-4').on('click', function() {
        $('.md-modal-4').addClass('md-show');
      });
      $('.md-close1').on('click', function() {
        $('.md-modal-4').removeClass('md-show');
      });
    }); // end modal
/*
  $(document).ready(function(){
    $(".navT").on("click", function(){
      $(this).toggleClass("active");
      $("#menu").toggleClass("open");
      $(".content").toggleClass("shift");  
    });
  
});
    $(document).ready(function(){
    $(".nav_dos").on("click", function(){
      $(this).toggleClass("active");
      $("#menu_dos").toggleClass("open");
      $(".content").toggleClass("shift");  
    });
  
});
*/
  $(".menu-toggle").on('click', function() {
    $(this).toggleClass("on");
    $('.menu-section').toggleClass("on");
    $("nav ul").toggleClass('hidden');
  });
   $(".menu-toggle-two").on('click', function() {
    $(this).toggleClass("on");
    $('.menu-section-two').toggleClass("on");
    $("nav ul").toggleClass('hidden');
  });
   $(".menu-toggle_three").on('click', function() {
    $(this).toggleClass("on");
    $('.menu-section_three').toggleClass("on");
    $("nav ul").toggleClass('hidden');
  });

