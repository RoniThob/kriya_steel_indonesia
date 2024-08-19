// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector ('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target))
        navbarNav.classList.remove('active')
})


var slideIndex = 1 
    showSlide(slideIndex);
    
    function nextslide (n) {
        showSlide(slideIndex += n);
    }

    function dotslide (n){
        showSlide(slideIndex = n)
    }

    function showSlide(n) {
        var i ;
        var slides = document.getElementsByClassName("imgslide")
        var dot = document.getElementsByClassName("dot")

        if (n > slides.length) {
            slideIndex = 1
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i <slides.length; i++) {
            slides[i].style.display = "none";
        }
       
        for (i = 0; i <slides.length; i++) {
            dot[i].className= dot [i].className.replace(" aktif", "" );
        }

        slides [slideIndex - 1].style.display = "block";

        dot [slideIndex - 1].className += " aktif";
    }


    function videosliderv(links) {
        document.querySelector(".sliderv").src = links;
    }