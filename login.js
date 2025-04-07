const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach((button) => {
button.addEventListener("click", () => {
const offset = button.dataset.carouselButton === "next" ? 1 : -1;
const slides = button
.closest("[data-carousel]")
.querySelector("[data-slides]");
const activeSlide = slides.querySelector("[data-active]");
let newIndex = [...slides.children].indexOf(activeSlide) + offset;
if (newIndex < 0) newIndex = slides.children.length - 1;
if (newIndex >= slides.children.length) newIndex = 0;
slides.children[newIndex].dataset.active = true;
delete activeSlide.dataset.active;
});
});

//add to cart code
document.getElementById("addtocart").addEventListener("click", function () {
var cartItem = document.createElement("li");
var productName = document.createTextNode("Product Name");
cartItem.appendChild(productName);
document.getElementById("cart-items").appendChild(cartItem);
console.log(cartItem);
});

//login code
document
.getElementById("login-form")
.addEventListener("submit", function (event) {
event.preventDefault();
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
if (!isValidEmail(email)) {
console.log("Invalid email format");
return;
}
fetch("/login", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({ email: email, password: password }),
})
.then((response) => {
if (response.ok) {
alert("Login successful!");
} 
else {
console.log("Invalid email or password");

}
})
.catch((error) => {
console.error("Error:", error);
console.log("An error occurred, please try again later");
});
});

function isValidEmail(email) {
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}