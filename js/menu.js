//Menu button to Blue
let trigger1 = $("#btnBlue");
let target = $(".menu-button");
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: trigger1,
    // trigger element - viewport
    start: "top center",
    //end: "bottom bottom",
    onEnter: () => {
      target.addClass("blue");
    },
    onLeaveBack: () => {
      target.removeClass("blue");
    },
  },
});

//Menu button back to Green (Bottom of the page)
let trigger2 = $(".section.pink-section");
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: trigger2,
    // trigger element - viewport
    start: "top center",
    //end: "bottom bottom",
    onEnter: () => {
      target.removeClass("blue");
    },
    onLeaveBack: () => {
      target.addClass("blue");
    },
  },
});

// Toggles
$(".gravity-toggle").on("click", function () {
  let toggleBg = $(this).find(".gravity-toggle-body").css("background-color");
  let circleBg = $(this).find(".gravity-toggle-circle").css("background-color");
  $(this).find(".gravity-toggle-body").css("background-color", circleBg);
  $(this).find(".gravity-toggle-circle").css("background-color", toggleBg);
  $(this).find(".gravity-toggle-circle").toggleClass("switched");
});

// Gravity
let trGrav = $("#gravity");
let tlGrav = gsap.timeline({
  scrollTrigger: {
    trigger: trGrav,
    // trigger element - viewport
    start: "top center",
    //end: "bottom bottom",
    onEnter: () => {
      $(".gravity-element.is--1").addClass("move");
      $(".gravity-element.is--2").addClass("move");
      $(".gravity-element.is--3").addClass("move");
      $(".gravity-element.is--4").addClass("move");
      $(".gravity-element.is--5").addClass("move");
      $(".gravity-element.is--6").addClass("move");
      $(".gravity-element.is--7").addClass("move");
      $(".gravity-element.is--8").addClass("move");
      $(".gravity-element.is--9").addClass("move");
      $(".gravity-element.is--toggle-1").addClass("move");
      $(".gravity-element.is--toggle-2").addClass("move");
      $(".gravity-element.is--toggle-3").addClass("move");
      $(".gravity-element.is--toggle-4").addClass("move");
    },
    onLeaveBack: () => {
      $(".gravity-element.is--1").removeClass("move");
      $(".gravity-element.is--2").removeClass("move");
      $(".gravity-element.is--3").removeClass("move");
      $(".gravity-element.is--4").removeClass("move");
      $(".gravity-element.is--5").removeClass("move");
      $(".gravity-element.is--6").removeClass("move");
      $(".gravity-element.is--7").removeClass("move");
      $(".gravity-element.is--8").removeClass("move");
      $(".gravity-element.is--9").removeClass("move");
      $(".gravity-element.is--toggle-1").removeClass("move");
      $(".gravity-element.is--toggle-2").removeClass("move");
      $(".gravity-element.is--toggle-3").removeClass("move");
      $(".gravity-element.is--toggle-4").removeClass("move");
    },
  },
});

// Count clicks to display popup
var clickCount = 0;
$(".gravity-toggle").click(function () {
  clickCount++;
  if (clickCount % 5 === 0) {
    $(".gravity-popup-wrap").addClass("show");
  }
});
//Hide Popup on BG click
$(".popup-bg").on("click", function () {
  $(".gravity-popup-wrap").removeClass("show");
});

// Ball is rolling down the page
let triggerBall = $(".ball-trigger");
let imgBall = $(".help-ball");

let tlBall = gsap.timeline({
  scrollTrigger: {
    trigger: triggerBall,
    // trigger element - viewport
    start: "top bottom",
    // end: "bottom bottom",
    onEnter: () => {
      imgBall.addClass("animate");
    },
    onLeaveBack: () => {
      imgBall.removeClass("animate");
    },
  },
});

// Constellation reveals points on scroll
let ct1 = $("#pl-pink-1");
let ct2 = $("#pl-pink-2");
let ct3 = $("#pl-pink-3");

let cItem1 = $(".const-item.is--1");
let ctl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ct1,
    // trigger element - viewport
    start: "top bottom",
    //end: "bottom bottom",
    onEnter: () => {
      cItem1.addClass("show");
    },
    onLeaveBack: () => {
      cItem1.removeClass("show");
    },
  },
});

let cItem2 = $(".const-item.is--2");
let ctl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ct1,
    // trigger element - viewport
    start: "top center",
    //end: "bottom bottom",
    onEnter: () => {
      cItem2.addClass("show");
    },
    onLeaveBack: () => {
      cItem2.removeClass("show");
    },
  },
});

let cItem3 = $(".const-item.is--3");
let ctl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ct2,
    // trigger element - viewport
    start: "top bottom",
    //end: "bottom bottom",
    onEnter: () => {
      cItem3.addClass("show");
    },
    onLeaveBack: () => {
      cItem3.removeClass("show");
    },
  },
});

let cItem4 = $(".const-item.is--4");
let ctl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ct2,
    // trigger element - viewport
    start: "top center",
    //end: "bottom bottom",
    onEnter: () => {
      cItem4.addClass("show");
    },
    onLeaveBack: () => {
      cItem4.removeClass("show");
    },
  },
});

let cItem5 = $(".const-item.is--5");
let ctl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ct3,
    // trigger element - viewport
    start: "top bottom",
    //end: "bottom bottom",
    onEnter: () => {
      cItem5.addClass("show");
    },
    onLeaveBack: () => {
      cItem5.removeClass("show");
    },
  },
});
