// Page Scroll Progress Bar
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let documentHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollTop / documentHeight) * 100;
  document.getElementById("progress-bar").style.width = `${scrollPercentage}%`;
});

// menu Toggle Buttons
const toggleBarsEl = document.querySelector(".toggle-bars");
const navEL = document.querySelector(".nav");
const toggleAudio = document.getElementById("toggle-audio");
toggleBarsEl.addEventListener("click", () => {
  toggleBarsEl.classList.toggle("active");
  navEL.classList.toggle("active");
  toggleAudio.currentTime = 0;
  toggleAudio.play();
});

// Mobile P.O.V nav Function
const navOlEl = document.querySelectorAll("#navOl a");
navOlEl.forEach((item) => {
  item.addEventListener("click", () => {
    toggleBarsEl.classList.remove("active");
    navEL.classList.remove("active");
  });
});

// Link Scroll
const scrollLinks = document.querySelectorAll(
  "header a[data-target], footer a[data-target]"
);

scrollLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetID = this.getAttribute("data-target");
    const targetSection = document.getElementById(targetID);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Developer pic
const img = document.getElementById("developer-image");

img.addEventListener("mouseover", () => {
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = "developerImages/anuj.gif";
    img.style.opacity = 1;
  }, 200);
});

img.addEventListener("mouseout", () => {
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = "developerImages/anujlogo.jpg";
    img.style.opacity = 1;
  }, 200);
});

// Contact Button
const contactButton = document.getElementById("navBtn");

contactButton.addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

// Mail Button
const emailButtonEL = document.getElementById("email-button");
const email = "contact.anujghimire@gmail.com";
emailButtonEL.addEventListener("click", () => {
  navigator.clipboard
    .writeText(email)
    .then(() => console.log("Email copied to clipboard"))
    .catch((err) => console.error("Failed to copy email", err));
  document.getElementById("mail-tooltip").classList.add("active");
  setTimeout(() => {
    document.getElementById("mail-tooltip").classList.remove("active");
  }, 1000);
});

// Meeting Booking Button
document.getElementById("book-meeting-button").addEventListener("click", () => {
  window.open("https://calendar.app.google/Q3KwoKbmCbWwVwSv7");
});

// custom mouse
const cursor = document.querySelector(".custom-cursor");

const hoverEL = document.querySelectorAll(
  "header a, footer a,.project-container, .project-language-used button"
);
hoverEL.forEach((el) => {
  if ("ontouchstart" in window) {
    cursor.style.display = "none";
  }
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("custom-cursor");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("custom-cursor");
  });
});

document.addEventListener("contextmenu", (event) => event.preventDefault());
