import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

function makeGallery(items) {
    items.map((item) => {
        const markup =
            `<a class="gallery__item" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
            </a>`

        galleryList.insertAdjacentHTML("beforeend", markup);
    })
}
makeGallery(galleryItems)
console.log(galleryList)

const lightbox = new SimpleLightbox('.gallery__item', {
    captionsData: "alt",
    captionDelay: 250,
    overlayOpacity: 1,
});