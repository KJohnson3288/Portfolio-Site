// Slid in animation  Animation
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target); 
    }
});
});

document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));


// Sections to track
const aboutCarousel = document.querySelector('#about-carousel');

observer.observe(aboutCarousel);

const contactSectionLeft = document.querySelector('#contact-section-left');

observer.observe(contactSectionLeft);

const contactSectionRight = document.querySelector('#contact-section-right');

observer.observe(contactSectionRight);


// EmailJS 
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_euiymxt", "template_9ar2em6", this)
    .then(function () {
      showToast("Email sent successfully!", "bg-success");
      document.getElementById("contact-form").reset();
    }, function (error) {
      showToast("Failed to send email. Please try again.", "bg-danger");
    });
});


// Toast helper function
function showToast(message, bgClass) {
  const toastEl = document.getElementById("form-toast");
  const toastBody = document.getElementById("toast-message");

  toastBody.textContent = message;
  toastEl.classList.remove("bg-success", "bg-danger");
  toastEl.classList.add(bgClass);

  const toast = new bootstrap.Toast(toastEl);
  toast.show();
}


