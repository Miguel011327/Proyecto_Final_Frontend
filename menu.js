var nav = document.getElementById('menucab')

window.addEventListener('scroll', ()=>{
    var scroll = window.scrollY
    if(scroll>35){
        scroll = 0;
    }
})

$("#iconomenu").click(function(){
    $("#menu").slideToggle();
});

//Funición para el boton subir
$(document).ready(function(){
    $("#subir").click(function(){
        $("html,body").animate(
            {
                scrollTop: "0px",
            },
        1000
        );
    });
});

//Acordeon Jquery
$(".acordeon__titulo").click(function(){
     $(".acordeon__titulo").slideToggle();
 });

 window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector(".go-top-container").classList.add("show");
    }else{document.querySelector(".go-top-container").classList.remove("show");
    }
 }

 document.querySelector(".go-top-container").addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
 });

var fondomodal = document.getElementById("modal");
var btn = document.getElementById("Btn");
var cerrar = document.getElementById("cerrarbtn");

btn.onclick = function () {
    fondomodal.style.display = "block";
};
cerrar.onclick = function () {
    fondomodal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == fondomodal) {
    fondomodal.style.display = "none";
    }
};

var fondomodal2 = document.getElementById("modal2");
var btn2 = document.getElementById("Btn2");
var cerrar2 = document.getElementById("cerrarbtn2");

btn2.onclick = function () {
  fondomodal2.style.display = "block";
};
cerrar2.onclick = function () {
  fondomodal2.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == fondomodal2) {
    fondomodal2.style.display = "none";
  }
};

//ACORDEON
$(".titulo1").click(function(){
    $(".contenido1").slideToggle();
    $(".icono1").toggleClass("rotar");
  });

  $(".titulo2").click(function(){
    $(".contenido2").slideToggle();
    $(".icono2").toggleClass("rotar");
  });

  $(".titulo3").click(function(){
    $(".contenido3").slideToggle();
    $(".icono3").toggleClass("rotar");
  });
  $(".titulo4").click(function(){
    $(".contenido4").slideToggle();
    $(".icono4").toggleClass("rotar");
  });
  $(".titulo5").click(function(){
    $(".contenido5").slideToggle();
    $(".icono5").toggleClass("rotar");
  });