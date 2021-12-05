const images = document.querySelectorAll(".image img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const closeBtn = document.querySelector(".close");
const innerImg = document.querySelector(".gallery__inner img")
const gallery = document.querySelector(".gallery");


var currentIndex = 0;
function galleryShow(){
    if(currentIndex == 0){
        prevBtn.classList.add("hide");
    } else {
        prevBtn.classList.remove("hide");
    }
    if(currentIndex == images.length - 1){
        nextBtn.classList.add("hide");
    } else {
        nextBtn.classList.remove("hide");
    }
    innerImg.src = images[currentIndex].src;
    gallery.classList.add("show");
}

images.forEach((item, index) => {
    item.addEventListener("click", function () {
      currentIndex = index;
      galleryShow();
    });
  });

  closeBtn.addEventListener("click", function () {
      gallery.classList.remove("show")
  });

  document.addEventListener("keydown", (e) => {
    if(e.keyCode == 27){
        gallery.classList.remove("show")
    }

  });

  prevBtn.addEventListener("click", () => {
      if(currentIndex > 0){
          currentIndex--;
          galleryShow();
      }
  })

  nextBtn.addEventListener("click", () => {
    if(currentIndex < images.length - 1){
        currentIndex++;
        galleryShow();
    }
})
