// //preview random border color
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// // Get all elements with the "images" class and set random border colors
// const images = document.querySelectorAll('.images');
// images.forEach(image => {
//     const randomColor = getRandomColor();
//     image.style.borderColor = randomColor;
// });


//imagepreview box
document.addEventListener("DOMContentLoaded", function() {
    // Get references to elements
    const photoGrid = document.querySelector(".photo-grid");
    const selectedImage = document.getElementById("selected-image");

    // Add a click event listener to each image in the photo-grid
    photoGrid.querySelectorAll(".images").forEach(function(image) {
        image.addEventListener("click", function() {
            // Get the source of the clicked image
            const imageUrl = image.getAttribute("src");

            // Set the source of the selected image to the clicked image
            selectedImage.setAttribute("src", imageUrl);
        });
    });
});