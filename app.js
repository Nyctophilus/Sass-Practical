const bladeIcon = document.querySelector(".blades"),
  headerNav = document.querySelector("header .navbar");

bladeIcon.onclick = click;
headerNav.onclick = click;

function click() {
  bladeIcon.classList.toggle("toggle");
  headerNav.classList.toggle("toggle");
}

// img slider

const imgBullents = document.querySelectorAll(
    ".slider .bullets li"
  ),
  imgsArr = document.querySelectorAll(
    ".slider .slider-imgs li"
  );

imgBullents.forEach((bullet) => {
  bullet.onclick = function () {
    imgBullents.forEach((b) =>
      b.classList.remove("active")
    );

    this.classList.add("active");

    imagesSlide(this.dataset.i);
  };
});

function imagesSlide(imgIndex) {
  imgsArr.forEach((img) => {
    img.classList.remove("active");

    imgsArr[imgIndex].classList.add("active");
  });
}
