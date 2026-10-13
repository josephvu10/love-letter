// ============================================
// PAGE NAVIGATION
// ============================================

// Switch to a different page when a Next button
// is clicked. Page numbers start at 1.

function goToPage(pageNumber) {
  const pages = document.querySelectorAll(".page");

  pages.forEach((page) => {
    page.classList.remove("active");
  });

  const targetPage = document.getElementById(
    `page${pageNumber}`
  );

  if (targetPage) {
    targetPage.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}


// ============================================
// YOUR FIVE POLAROID PHOTOS
// ============================================

// HOW TO PERSONALIZE YOUR GALLERY:
//
// 1. Put your photos in the "photos" folder.
// 2. Replace each image path below with your filename.
// 3. Replace each caption with your own message.
//
// Example:
// image: "photos/our-first-date.jpg"
//
// Keep the image paths inside quotation marks.
// You can use JPG, PNG, or WebP images.

const memories = [
  {
    image: "photos/photo3.jpg",
    caption: "mama y papa ♡"
  },
  {
    image: "photos/photo4.jpg",
    caption: "mendocino farms!"
  },
  {
    image: "photos/photo5.jpeg",
    caption: "the real treat was you"
  },
  {
    image: "photos/photo6.jpeg",
    caption: "your favorite vanity"
  },
  {
    image: "photos/photo7.jpeg",
    caption: "i thought this was really cute"
  }
];


// ============================================
// PHOTO CAROUSEL
// ============================================

// This tracks which photo is currently visible.
// Array positions start at 0, so photo 1 = index 0.

let currentPhoto = 0;

function showPhoto() {
  const memory = memories[currentPhoto];

  const image = document.getElementById("galleryImage");
  const caption = document.getElementById("galleryCaption");
  const counter = document.getElementById("photoCounter");

  image.src = memory.image;
  image.alt = `Memory ${currentPhoto + 1} of ${memories.length}`;

  caption.textContent = memory.caption;

  // Example: 01 / 05
  counter.textContent =
    `${String(currentPhoto + 1).padStart(2, "0")} / ` +
    `${String(memories.length).padStart(2, "0")}`;
}


// Move forward or backward through the gallery.
// The modulo calculation makes the gallery loop forever.
//
// From photo 5, Next returns to photo 1.
// From photo 1, Back returns to photo 5.

function movePhoto(direction) {
  currentPhoto =
    (currentPhoto + direction + memories.length) %
    memories.length;

  showPhoto();
}

// Display the initial gallery photo on page load.
showPhoto();