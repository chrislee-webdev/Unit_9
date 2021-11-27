const cardFadeIn = document.getElementById("card");

cardFadeIn.addEventListener('mouseenter', () => {
  cardFadeIn.style.opacity = .25;
})

cardFadeIn.addEventListener('mouseleave', () => {
  cardFadeIn.style.opacity = 1;
})


