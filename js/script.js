const navbar = document.getElementById('navbar');
   let scrolled = false;

   window.onscroll = function () {
      if (window.pageYOffset > 100) { // Adjusted to 100 for demonstration
         navbar.classList.remove('top');
         navbar.classList.add('scrolled'); // Add class when scrolled
         if (!scrolled) {
            navbar.style.transform = "translateY(-70px)";
         }
         setTimeout(function () {
            navbar.style.transform = "translateY(0)";
            scrolled = true;
         }, 250);
      } else {
         navbar.classList.add('top');
         navbar.classList.remove('scrolled'); // Remove class when not scrolled
         scrolled = false;
      }
   }

   // Smooth Scrolling
   $('#navbar a').on('click', function (e) {
      if (this.hash !== '') {
         e.preventDefault();

         const hash = this.hash;

         $('html, body').animate(
            {
               scrollTop: $(hash).offset().top - 50,
            },
            900
         );
      }
   });

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollTop").style.display = "block";
  } else {
    document.getElementById("scrollTop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById("scrollTop").addEventListener("click", function(event){
  event.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
});
