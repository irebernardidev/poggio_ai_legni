window.onscroll = function() {

  const navbar = document.querySelector('.navbar');
  
  // Navbar color change 
  if(document.documentElement.scrollTop > 500) {
    navbar.classList.remove('top');
    // Rest of navbar color change code
  } else {
    navbar.classList.add('top');
  }

  // Logo toggle
  if(navbar.classList.contains('top')) {
    navbar.querySelector('.logo-yellow').style.display = 'block';
    navbar.querySelector('.logo-black').style.display = 'none';

  } else {
    navbar.querySelector('.logo-black').style.display = 'block';
    navbar.querySelector('.logo-yellow').style.display = 'none';
  }

  // Scroll to top button visibility
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollTop").style.display = "block";
  } else {  
    document.getElementById("scrollTop").style.display = "none";
  }

};