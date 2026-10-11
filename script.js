// js file
// side nav
let show = document.querySelector(".show");
let hide = document.querySelector('.hide');
let nav = document.querySelector('.nav');
// check if it's opened after window load
window.addEventListener('load', function () {
    if (nav.style.left = "0") {
        nav.style.left = "-250px";
    }
})
// 
show.addEventListener("click", function reveal() {
    nav.style.left = "0";
})
hide.addEventListener("click", function close() {
    nav.style.left = "-250px";
})

// slide show
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
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

// show password
function showPassword() {
    let x = document.getElementById("key");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function revealPassword() {
    let y = document.getElementsByClassName("key_show");
    if (y.type === "password") {
        y.type = "text";
    } else {
        y.type = "password";
    }
}

// Open the sidebar
function show_dash() {
    let openDash = document.querySelector("#openDash");
    let closeDash = document.querySelector("#closeDash");
    let aside = document.querySelector("aside");
    // openDash.style.display = "none";
    closeDash.style.display = "flex";
    aside.style.left = "0px";
};

// Close the sidebar
function hide_dash() {
    let openDash = document.querySelector("#openDash");
    let closeDash = document.querySelector("#closeDash");
    let aside = document.querySelector("aside");
    // closeDash.style.display = "none";
    openDash.style.display = "flex";
    aside.style.left = "-270px"; // Change -270px to match your sidebar width
};

// Copy blog link function
function copyText() {
    let copy = document.getElementById("copy");
    navigator.clipboard.writeText(copy.value)
        .then(function () {
            alert("Blog link copied: " + copy.value);
        })
        .catch(function (error) {
            console.error("Failed to copy:", error);
            alert("Failed to copy blog link.");
        });
}
function shareX() {
    let blogUrl = document.getElementById("copy").value;
    let text = "Check out this blog post!";
    let url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text) + "&url=" + encodeURIComponent(blogUrl);
    window.open(url, "_blank", "width=600,height=500");
}
function shareFacebook() {
    let blogUrl = document.getElementById("copy").value;
    let url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(blogUrl);
    window.open(url, "_blank", "width=600,height=500");
}
function shareThreads() {
    let blogUrl = document.getElementById("copy").value;
    let text = "Check out this blog post! " + blogUrl;
    let url = "https://www.threads.net/intent/post?text=" + encodeURIComponent(text);
    window.open(url, "_blank");
}
function shareInstagram() {
    window.open("https://www.instagram.com/", "_blank");
}