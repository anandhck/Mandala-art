const bookwrokbtn = document.getElementById('book-workshop-btn');
const benifitsbox = document.getElementById('benifits-box');
const navtabsform = document.getElementById('tabs');
const benifitsbtn = document.getElementById('benifits-btn');



bookwrokbtn.addEventListener('click', () => {

    if (navtabsform.style.display === 'none') {
        // 👇️ this SHOWS the form
        navtabsform.style.display = 'block';
        benifitsbox.style.display = 'none';
    } else {
        // 👇️ this HIDES the form
        navtabsform.style.display = 'none';

    }
});


benifitsbtn.addEventListener('click', () => {
    if (benifitsbox.style.display === 'none') {
        // 👇️ this SHOWS the form
        benifitsbox.style.display = 'block';
        navtabsform.style.display = 'none';
    } else {
        // 👇️ this HIDES the form
        benifitsbox.style.display = 'none';
    }
});