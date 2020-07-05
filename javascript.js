
var slideIndex = 1;


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




function addHoverClass(x) {
  x.classList.add("ahover");
}

function removeHoverClass(x) {
  x.classList.remove("ahover");
}


function changeimage(url,el)
{
el.src = url;
}







$("#form1").submit(function(){
  var name=$("#name").val();
  var email=$("#email").val();
  var mymessage=$("#mymessage").val();
  if(name=="" || email=="" || mymessage=="") 
  { 
    $("#message").show();
    $("#message").text("All fields are required please fill all information.");
    $("#message").css("color","red");
    return false;

  }
   else
  { 
    $("#message").show();
    $("#message").text("Thanks for contacting us.");
    $("#message").css("color","green");
    $("#form1")[0].reset();
  return false;
  }

});



$("#form2").submit(function(){
  var fname=$("#fname").val();
  var lname=$("#lname").val();
  var email=$("#email").val();
  var comments=$("#comments").val();
  if(fname=="" || lname=="" || email=="" || comments=="")
  {
    $("#message").show();
    $("#message").text("All fields are required please fill all information.");
    $("#message").css("color","red");
    return false;
  }
   else
  {
    
    $("#message").show();
    $("#message").text("Thanks for contacting us.");
    $("#message").css("color","green");
    $("#form2")[0].reset();
    return false;
  }

});



function showtable1()
{ 
$("#table1").show("slow");
$("#table2").hide();
}


function showtable2()
{
$("#table2").show("slow");
$("#table1").hide();
}











function marquee(a, b) {
    var width = b.width();
    var start_pos = a.width();
    var end_pos = -width;

    function scroll() {
        if (b.position().left <= -width) {
            b.css('left', start_pos);
            scroll();
        }
        else {
            time = (parseInt(b.position().left, 10) - end_pos) *
                (10000 / (start_pos - end_pos)); 
            b.animate({
                'left': -width
            }, time, 'linear', function() {
                scroll();
            });
        }
    }

    b.css({
        'width': width,
        'left': start_pos
    });
    scroll(a, b);
    
    b.mouseenter(function() {     
        b.stop();                 
        b.clearQueue();           
    });                           
    b.mouseleave(function() {     
        scroll(a, b);             
    });                           
    
}

$(document).ready(function() {
    marquee($('#display'), $('#text'));  
});



