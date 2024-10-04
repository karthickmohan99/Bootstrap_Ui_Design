let scroll_button = document.getElementById("scroll-top");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollTop);

    if (scrollTop > 650) {
        // scroll_button.style.cssText="display:block;transform:translateY(0px)";
        // scroll_button.style.display = "block";
        // scroll_button.style.transform = "translateY(0px)";
        scroll_button.classList.add('show');

    } else {
        // scroll_button.style.display="none"
        scroll_button.classList.remove('show');
    }
}


function backToTop() {

    document.documentElement.scrollTop = 0;
}



// sidebar toggle function
const toggleButton = document.getElementById("sidebarCollapse");
const sidebar = document.getElementById("sidebar");
const closeButton = document.querySelector("#sidebar .close");

toggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("active");
});

closeButton.addEventListener("click", function () {
    sidebar.classList.remove("active");
});




