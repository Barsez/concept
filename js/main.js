$(".logo").click(function() {
   $(this).toggleClass("logo__active")
   $(".navs").slideToggle(500)
})
$(".label").click(function() {
  $(this).toggleClass("label__active")
})
