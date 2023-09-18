document.addEventListener("DOMContentLoaded", function() {
    const itemsPerPage = 6; // Number of items per page
    let currentPage = 1;

    // Function to show/hide items based on the current page
    function updateGallery() {
        const galleryItems = document.querySelectorAll("#gallery > div");
        galleryItems.forEach((item, index) => {
            const page = parseInt(item.getAttribute("data-page"));
            if (page === currentPage) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });

        // Update page numbers
        const totalItems = galleryItems.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const pageNumbers = document.getElementById("pageNumbers");
        pageNumbers.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement("button");
            button.textContent = i;
            button.addEventListener("click", function() {
                currentPage = i;
                updateGallery();
            });
            pageNumbers.appendChild(button);
        }
    }

    // Initialize the gallery
    updateGallery();

    // Handle next and previous buttons
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");

    prevButton.addEventListener("click", function() {
        if (currentPage > 1) {
            currentPage--;
            updateGallery();
        }
    });

    nextButton.addEventListener("click", function() {
        const totalItems = document.querySelectorAll("#gallery > div").length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            updateGallery();
        }
    });


    const galleryItems = document.querySelectorAll(".grid-container div img");
    const imagePreview = document.getElementById("imagePreview");
    const previewImage = document.getElementById("previewImage");
    const closePreview = document.getElementById("closePreview");

    galleryItems.forEach((item, index) => {
        item.addEventListener("click", function() {
            const imageUrl = item.getAttribute("src");
            previewImage.setAttribute("src", imageUrl);
            imagePreview.style.display = "block";
        });
    });

    closePreview.addEventListener("click", function() {
        imagePreview.style.display = "none";
    });

});

function resizeGallery(imagesPerRow) {
    const gallery = document.getElementById('gallery');
    const gridItems = gallery.querySelectorAll('.grid-item');
    const gap = 10; // Adjust the gap as needed

    // Calculate the width for each grid item
    // const itemWidth = `calc((100% - ${gap * (imagesPerRow - 1)}px) / ${imagesPerRow})`;
    const itemWidth = "183px";

    // Update grid styles
    gallery.style.width = '100%';
    gallery.style.height = 'auto';
    // Set the desired width
    gallery.style.display = 'grid';
    gallery.style.gridTemplateColumns = `repeat(${imagesPerRow}, ${itemWidth})`;

    // Update max-width for grid items
    gridItems.forEach((item) => {
        item.style.maxWidth = '100%';
    });
}

function randomGallery(imagesPerRow) {
    const gallery = document.getElementById('gallery');
    const gridItems = gallery.querySelectorAll('.grid-item');
    const gap = 10; // Adjust the gap as needed

    // Calculate the width for each grid item
    const itemWidth = `calc((100% - ${gap * (imagesPerRow - 1)}px) / ${imagesPerRow})`;

    // Update grid styles
    gallery.style.width = '';
    gallery.style.height = '';
    // Set the desired width
    gallery.style.display = '';
    gallery.style.gridTemplateColumns = `repeat(${imagesPerRow}, ${itemWidth})`;

    // Update max-width for grid items
    gridItems.forEach((item) => {
        item.style.maxWidth = '100%';
    });
}