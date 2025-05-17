const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    }
    else {
        menu.classList.add("hide");
    }
}

handleResize()
window.addEventListener("resize", handleResize);

const gallery = document.querySelector(".gallery");
const imageViewerModal = document.querySelector(".image-viewer-modal");
const closeModalBtn = document.querySelector(".close-viewer");

gallery.addEventListener("click", (event) => {
    console.log("clicked");
    const clickedElement = event.target;
    const clickedImage = event.target.closest('img');
    console.log("result of closest(img): ", clickedImage)
    const lowResSrc = clickedImage.src;
    const imageAlt = clickedImage.alt;
    if (lowResSrc != null) {
        console.log("clicked on norris");
    }
    const parts = lowResSrc.split("sm");
    if (parts.length == 2) {
        console.log("norris split")
    }
    const highResSrc = parts[0] + 'full' + parts[1];
    if (highResSrc != null) {
        console.log("norris high res")
    }
    const modalImage = document.querySelector(".modal-image");
    modalImage.src = highResSrc;
    if (modalImage.src == highResSrc) {
        console.log("modalImage is high res")
    }
     console.log(`Image src set to: ${modalImage.src}`);
modalImage.alt = imageAlt;
imageViewerModal.showModal();
}
)

closeModalBtn.addEventListener("click", function(event) {
    imageViewerModal.close();
    console.log('Modal closed by button');
})

imageViewerModal.addEventListener('click', (event) => {
  if (event.target === imageViewerModal) {
    imageViewerModal.close();
  }
})

