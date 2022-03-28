
var slideIndex = 1;
showSlides(slideIndex);

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


/* 2



*/
    var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active2", "");
  }
  slides[slideIndex2-1].style.display = "block";  
  dots[slideIndex2-1].className += " active2";
}
    /* 3 */

    var slideIndex3 = 1;
    showSlides3(slideIndex3);
    
    function plusSlides3(n) {
      showSlides3(slideIndex3 += n);
    }
    
    function currentSlide3(n) {
      showSlides3(slideIndex3 = n);
    }
    
    function showSlides3(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides3");
      var dots = document.getElementsByClassName("dot3");
      if (n > slides.length) {slideIndex3 = 1}    
      if (n < 1) {slideIndex3 = slides.length}
      for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active3", "");
      }
      slides[slideIndex3-1].style.display = "block";  
      dots[slideIndex3-1].className += " active3";
    }

    /* 4 */

    var slideIndex4 = 1;
    showSlides4(slideIndex4);
    
    function plusSlides4(n) {
      showSlides4(slideIndex4 += n);
    }
    
    function currentSlide4(n) {
        showSlides5(slideIndex4 = n);
      }
    function showSlides4(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides4");
      var dots = document.getElementsByClassName("dot4");
      if (n > slides.length) {slideIndex4 = 1}    
      if (n < 1) {slideIndex4 = slides.length}
      for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active4", "");
      }
      slides[slideIndex4-1].style.display = "block";  
      dots[slideIndex4-1].className += " active4";
    }

    /* 5 */


    var slideIndex5 = 1;
    showSlides5(slideIndex5);
    
    function plusSlides5(n) {
      showSlides5(slideIndex5 += n);
    }
    
    function currentSlide5(n) {
      showSlides5(slideIndex5 = n);
    }
    
    function showSlides5(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides5");
      var dots = document.getElementsByClassName("dot5");
      if (n > slides.length) {slideIndex5 = 1}    
      if (n < 1) {slideIndex5 = slides.length}
      for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active5", "");
      }
      slides[slideIndex5-1].style.display = "block";  
      dots[slideIndex5-1].className += " active5";
    }

   