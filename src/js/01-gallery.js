// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector('.gallery');

function createGalleryItems(items) {
    return items.map(({ preview, original, description }) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `).join('');}
    
    gallery.style.listStyle = "none";

gallery.innerHTML = createGalleryItems(galleryItems);
      var lightbox = new SimpleLightbox('.gallery a',{
    captionDelay: 250,
    captionsData: "alt",
    captionPosition: 'bottom',
 
 });

console.log(galleryItems);
