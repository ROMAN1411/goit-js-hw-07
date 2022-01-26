import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

function makeGallery(items) {
    items.map((item) => {
        const markup =
            `<div class="gallery__item">
                <a class="gallery__link" href="${item.original}">
                    <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                    />
                </a>
            </div>`

        galleryList.insertAdjacentHTML("beforeend", markup);
    })
}
makeGallery(galleryItems)
console.log(galleryList)

galleryList.addEventListener('click', onPictureContainerClick);
function onPictureContainerClick(evt) {
      evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    const bigPicture = evt.target.dataset.source
    console.log(bigPicture)

    const modal = basicLightbox.create(`<img src='${bigPicture}'>`);
    modal.show()

    document.addEventListener('keydown', closedModalOfEsc);

    function closedModalOfEsc(evt) {
        if (evt.key === 'Escape') {
            modal.close();
        }
    }
}