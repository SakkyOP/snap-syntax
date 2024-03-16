// Figure Cards interactions
$(".fig-corner.is--1").on("click", function () {
  $(".card-wrapper.is--1").css("display", "flex");
});
$(".card-close.is--1").on("click", function () {
  $(".card-wrapper.is--1").css("display", "none");
});

$(".fig-corner.is--2").on("click", function () {
  $(".card-wrapper.is--2").css("display", "flex");
});
$(".card-close.is--2").on("click", function () {
  $(".card-wrapper.is--2").css("display", "none");
});

$(".fig-corner.is--3").on("click", function () {
  $(".card-wrapper.is--3").css("display", "flex");
});
$(".card-close.is--3").on("click", function () {
  $(".card-wrapper.is--3").css("display", "none");
});

$(".fig-corner.is--4").on("click", function () {
  $(".card-wrapper.is--4").css("display", "flex");
});
$(".card-close.is--4").on("click", function () {
  $(".card-wrapper.is--4").css("display", "none");
});

// Menu Button disappears when the card is in view
$(".card-wrapper").on("inview", function (event, isInView) {
  if (isInView) {
    $(".menu-button").addClass("menu-btn-hide");
  } else {
    $(".menu-button").removeClass("menu-btn-hide");
  }
});
