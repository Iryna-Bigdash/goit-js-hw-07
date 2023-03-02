import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryImageCard = createGalleriItems(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryImageCard);
galleryContainer.addEventListener("click", onLinkClick);

function createGalleriItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onLinkClick(event) {
  event.preventDefault();
  getURLofLargeImage(event);
  createModalWindov(event);
}

function getURLofLargeImage(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  console.log(event.target.dataset.source);
}

function createModalWindov(event) {
  let imgLargeUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${imgLargeUrl}" width="1280" height="600">
`,
      {
          onShow,
        
  });
    instance.show();

    function onShow(instance){
        window.addEventListener('keydown', onEscKeyPress);
    }
    
    function onEscKeyPress(event) {

        if (event.code === "Escape") {
            instance.close();
            window.removeEventListener("keydown", onEscKeyPress); 
        }
    }
  }
