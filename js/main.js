let ourUl = document.querySelector(".our-courses header ul");
let ourLi = document.querySelectorAll(".our-courses header ul li");
ourLi.forEach((el) => {
  el.addEventListener("click", () => {
    ourUl.querySelector(".active").classList.remove("active");
    el.classList.add("active");
  });
});

let bars = document.querySelector(".our-courses header .bars");

bars.addEventListener("click", () => {
  document.querySelector(".our-courses header ul").classList.toggle("toggler");
});

$(document).ready(function(){
  $(".home-content").animate({
    "left": "6%"
  },800)

  $(window).scroll(function(){
    if($(this).scrollTop() > 750){
      $(".course-content-left").css("transform", "translateX(0)");
      $(".course-content-right").css("transform", "translateX(0)");
    } else{
      $(".course-content-left").css("transform", "translateX(-50rem)");
      $(".course-content-right").css("transform", "translateX(50rem)");
    }
  })

  $(window).scroll(function(){
    if($(this).scrollTop() > 3500){
      $(".featured-event-content").css("transform", "translateX(0)");
      $(".event-content-left").css("transform", "translateX(0)");
      $(".event-content-right").css("transform", "translateX(0)");
    } else{
      $(".featured-event-content").css("transform", "translateX(-50rem)");
      $(".event-content-left").css("transform", "translateX(50rem)");
      $(".event-content-right").css("transform", "translateX(50rem)");
    }
  })
})
