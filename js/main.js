

// SELECT CLASS
let header = document.getElementById("header");

// CREATE STICKY HEADER
window.onscroll = () => {
    if (this.scrollY > 100) {
        header.classList.add("sticky-header");
    } else {
        header.classList.remove("sticky-header");
    }
}