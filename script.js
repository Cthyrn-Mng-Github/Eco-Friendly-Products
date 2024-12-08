//Function to navigate between product pages
function navigateTo(page) {
    window.parent.display.location.href = page;
}
// Function to show product details
function showDetails(id) {
    const details = document.getElementById(id);
    details.style.display = details.style.display === "block" ? "none" : "block";
}
