// Cursor changes color over pink section
$(".section.pink-section").on("mouseenter mouseleave", function () {
  $(".cursor-dot").toggleClass("green");
});

// Cursor becomes invisible over the Spotlight section
$("#green1").on("mouseenter mouseleave", function () {
  $(".cursor-dot").toggleClass("invisible");
});
