$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }
        else{
            $('.navbar').removeClass("sticky")
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    
    })


$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active")
    $('.menu-btn i').toggleClass("active")
})

})



var typeData = new Typed(".role", {
    strings: [
       "Full Stack Developer",
       "Web Developer",
       "Software Developer",
       "Coder",
    ],
    loop: true,
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 800,
  });