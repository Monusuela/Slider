console.clear();

window.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector("#slider");

  const sliders = Array.from(slider.children);

  sliders.forEach((sliderItem) => {
    sliderItem.addEventListener("click", (e) => {
      sliders.forEach((item) => {
        item.classList.remove("active");
      });

      sliderItem.classList.add("active");
      slider.style.backgroundImage = `url(${e.target.dataset.imagePath})`;
    })
  })
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 2,
        loop: true,
        responsive: {
            0: {
                items: 2
            },

            570: {
                items:1
            }
        }
    });
})
