var backdrop = document.querySelector(".backdrop");
var selectPlanButtons = document.querySelectorAll(".plan button");
var modal = document.querySelector(".modal");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav_item--cta");

var noButton = document.querySelector(".modal button");

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

backdrop.addEventListener("click", function () {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove("open");
  closeModal();
});

if (noButton) {
  noButton.addEventListener("click", closeModal);
}

function closeModal() {
  //   modal.style.display = "none";
  //   backdrop.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", function () {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});

ctaButton.addEventListener('animationstart', function(event) {
  console.log('Animation Started', event);
} )
ctaButton.addEventListener('animationend', function(event) {
  console.log('Animation Ended', event);
} )
ctaButton.addEventListener('animationiteration', function(event) {
  console.log('Animation Iterated', event);
} )