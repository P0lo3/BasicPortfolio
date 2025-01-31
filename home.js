


let returnToTopBtn = document.querySelector('.returnToTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        returnToTopBtn.style.display = 'block';
    } else {
        returnToTopBtn.style.display = 'none';
    }
} );

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        returnToTopBtn.style.display = "block";
    } else {
        returnToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
returnToTopBtn.addEventListener('click', function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}