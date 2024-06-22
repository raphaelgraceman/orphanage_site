//advert slide
addEventListener("load", () => {
    var index = 0;
    const slides = document.querySelectorAll(".advert-slides");
    const hideslides = "slides-hidden", count = slides.length;

    nextSlide();
    function nextSlide(){
        slides[(index ++) % count].classList.add(hideslides);
        slides[index % count].classList.remove(hideslides);
        setTimeout(nextSlide, 4000);
    }
})

//Hero Slides
addEventListener("load", () => {
    var index = 0;
    const slides = document.querySelectorAll(".slides");
    const hideslides = "slides-hidden", count = slides.length;

    nextSlide();
    function nextSlide(){
        slides[(index ++) % count].classList.add(hideslides);
        slides[index % count].classList.remove(hideslides);
        setTimeout(nextSlide, 3000);
    }
})
//Regulate initial poppups
setTimeout(() => document.getElementById("pop-message").style.display = "none", 6000);
setTimeout(() => document.getElementById("hero_image").style.display = "none");
setTimeout(() => document.getElementById("hero_image").style.display = "block", 3000);


//Accessing the welcome_banner DOM 
document.getElementById("welcome_banner").style.background = "red";


//Change back to normal after 3 second
setTimeout(() => document.getElementById("welcome_banner").style.display = "none");
setTimeout(() => document.getElementById("welcome_banner").style.display = "block", 6000);
setTimeout(() => document.getElementById("welcome_banner").style.background = "", 8000);

setTimeout(() => document.getElementById("welcome_banner").style.marginTop = "1px", 6000);


//Access the hamburger and the navimenu
//store the selected elements that we are going to use.
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

//Add a click event istener to the hamburger button and 
// use a callback function that toggles the list element's 
// list of classes
hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});

//Display the Current Date of the Home Region
const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
//month long details
const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Äugust",
    "September",
    "October",
    "November",
    "December"
];
const todaysdate = new Date();
const dayName = daynames[todaysdate.getDay()];
const monthName = monthNames[todaysdate.getMonth()];
const year = todaysdate.getFullYear();
document.getElementById("currentyear").textContent = year;
const currentdate = " " + dayName + " - "+" "+ monthName  +" " + " "+ todaysdate.getDate() + ", " + todaysdate.getFullYear();

document.getElementById("currentdate").textContent = currentdate;
document.getElementById("currentDate").textContent = currentdate;
