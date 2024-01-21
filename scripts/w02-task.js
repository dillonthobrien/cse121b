/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Dillon O'Brien";
var currentYear = new Date().getFullYear();
var profilePicture = "images/me.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
var imageElement = document.querySelector('img[alt="Placeholder Image"]');

/* Step 4 - Adding Content */
nameElement.innerHTML = fullName;
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
var favoriteFoods = ["Pizza", "Chicken", "Ice Cream"];
foodElement.textContent = favoriteFoods;
var additionalFavoriteFood = "Burgers";
favoriteFoods.push(additionalFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;