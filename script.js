// Function to handle the click event on the "View Details" links
function handleViewDetails(event) {
    event.preventDefault();
    var product = event.target.parentNode;
    var productName = product.querySelector("h3").textContent;
    console.log("View details clicked for product:", productName);
}

// Get all the "View Details" links give exemple
var viewDetailsLinks = document.querySelectorAll(".view-details");

// Attach the click event listener to each "View Details" link
viewDetailsLinks.forEach(function (link) {
    link.addEventListener("click", handleViewDetails);
});
// Function to handle the click event on the "Add to Cart" buttons
function handleAddToCart(event) {
    event.preventDefault();
    var product = event.target.parentNode;
    var productName = product.querySelector("h3").textContent;
    console.log("Add to cart clicked for product:", productName);
}

