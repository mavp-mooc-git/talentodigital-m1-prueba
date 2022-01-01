$(function() {
  // Icons in "Quiénes somos" section open tooltips
  // Icons in "Footer" section open tooltips
  $("[data-bs-toggle='tooltip']").tooltip();

  // Cards in "Destacados" section open modal window
  $("#modal").on("shown.bs.modal", function () {
    $("[data-bs-toggle='modal']").on("click")
  })

  // smooth effect for scroll-behavior
  $("a").click(function(){
    var hash = this.hash;
    $("html, body").animate({
      scrollTop: $(hash).offset().top - 80  // navbar height: 51px
    }, 750);
  })

});
