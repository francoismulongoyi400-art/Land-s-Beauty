// ==========================================================
// Settings - change the WhatsApp number here (international format, no + or spaces)
// ==========================================================
var WHATSAPP_NUMBER = "27213764390";

// WhatsApp floating button
var waBtn = document.getElementById("whatsappBtn");
waBtn.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" +
  encodeURIComponent("Hello Lande's, I would like to make an enquiry.");

// Mobile menu
var toggle = document.getElementById("navToggle");
var links = document.getElementById("navLinks");
toggle.addEventListener("click", function () { links.classList.toggle("open"); });
links.querySelectorAll("a").forEach(function (a) {
  a.addEventListener("click", function () { links.classList.remove("open"); });
});

// Booking form -> sends request via WhatsApp
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var f = e.target;
  var msg = "Booking request\n" +
    "Name: " + f.name.value + "\n" +
    "Phone: " + f.phone.value + "\n" +
    "Service: " + f.service.value + "\n" +
    "Date: " + f.date.value + "\n" +
    "Time: " + f.time.value;
  window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg), "_blank");
});

// Reveal on scroll
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(function (el) { observer.observe(el); });

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
