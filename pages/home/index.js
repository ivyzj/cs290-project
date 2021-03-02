// Carousel implmentation is inspired by:
// https://www.w3schools.com/howto/howto_js_slideshow.asp

setNavButtonActive('Home');


const IMAGES_URLS = [
  "./pages/home/images/01.jpg",
  "./pages/home/images/02.jpg",
  "./pages/home/images/03.jpg",
  "./pages/home/images/04.jpg",
  "./pages/home/images/05.jpg",
];

const YOUTUBE_URLS = [
  "https://www.youtube.com/embed/wOUqb5syHr4?controls=0",
  "https://www.youtube.com/embed/y-Wj685wPIY?controls=0",
  "https://www.youtube.com/embed/setJXT-K2CQ?controls=0",
];

const CAROUSEL_IMAGE_CLASS = "carousel-image";
const CAROUSEL_DOT_CLASS = "carousel-dot";

const YoutubeContainer = document.getElementById("YoutubeContainer");
const ImageContainer = document.getElementById("ImageContainer");
const DotContainer = document.getElementById("DotContainer")

let currentImageIndex = 0;
let currentTimeout = null;

// Add images and dots
function addImages() {
  for (let i = 0; i < IMAGES_URLS.length; i++) {
    img = document.createElement("img");
    img.src = IMAGES_URLS[i];
    img.style.width = "100%";
    img.style.display = "none";
    img.className = CAROUSEL_IMAGE_CLASS + " fade";
    ImageContainer.appendChild(img);

    dot = document.createElement("span");
    dot.className = CAROUSEL_DOT_CLASS;
    dot.onclick = function () {
      jumpToImage(i);
    }
    DotContainer.appendChild(dot);
  }
}

// Add youtube videos
function addYoutubeVideos() {
  YOUTUBE_URLS.forEach((url) => {
    const ALLOW_FEATURES =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    const Iframe = document.createElement("iframe");
    Iframe.width = 320;
    Iframe.height = 240;
    Iframe.src = url;
    Iframe.setAttribute("frameborder", "0");
    Iframe.setAttribute("allow", ALLOW_FEATURES);
    Iframe.setAttribute("class", "youtube-tile");

    YoutubeContainer.appendChild(Iframe);
  });

}

function getNumberOfImages() {
  return document.getElementsByClassName(CAROUSEL_IMAGE_CLASS).length;
}

function showNextImage() {
  // Stop timer temporarily
  stopSlideShowTimer();

  currentImageIndex++;
  if (currentImageIndex > getNumberOfImages() - 1) {
    currentImageIndex = 0;
  }

  showImage(currentImageIndex);
  startSlideShowTimer();
}

function showPrevImage() {
  // Stop timer temporarily
  stopSlideShowTimer();

  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = getNumberOfImages() - 1;
  }

  showImage(currentImageIndex);

  startSlideShowTimer();
}

function jumpToImage(index) {
  // Stop timer temporarily
  stopSlideShowTimer();

  if (index >= 0 && index < getNumberOfImages()) {
    currentImageIndex = index;
    showImage(currentImageIndex);
  }

  startSlideShowTimer();
}

function startSlideShowTimer() {
  // https://www.w3schools.com/jsref/met_win_cleartimeout.asp
  currentTimeout = setTimeout(slideshowTimeout, 3000);
}

function stopSlideShowTimer() {
  clearTimeout(currentTimeout);
}

function slideshowTimeout() {
  console.log("Slideshow timeout. Current image index: %d", currentImageIndex);
  showNextImage();
}

function showImage(index) {

  console.log("Show image index: %d", index);

  const images = document.getElementsByClassName(CAROUSEL_IMAGE_CLASS);

  // Hide all images
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  // Show one image
  images[index].style.display = "block";

  // Make all dots inactive
  const dots = document.getElementsByClassName(CAROUSEL_DOT_CLASS);
  console.log(dots)
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active")
  }

  // Make one dot active
  dots[index].classList.add("active")

}


// Add elements
addImages();
addYoutubeVideos();

// Start slide show timer
showImage(0);
startSlideShowTimer();
