import menuPage from "./menupage.js";

import homePage from "./homepage.js";

import contactPage from "./contactpage.js";

let navBar = (function () {
    homePage(); // Makes Homepage the default page

    // - Left
    let content = document.querySelector("#content");
    let nav = document.createElement("nav");
    let navLeft = document.createElement("div");
    navLeft.classList.add("nav-left");
    let logo = document.createElement("img");
    logo.setAttribute("src", "../assets/logo.png");
    logo.setAttribute("alt", "Restaurant Logo");
    logo.setAttribute("width", "48px");
    // - Middle
    let navMiddle = document.createElement("div");
    navMiddle.classList.add("nav-middle");
    let homeButton = document.createElement("a");
    homeButton.textContent = "Home";
    homeButton.classList.add("active-page");
    homeButton.setAttribute("href", "#");
    homeButton.addEventListener("click", function () {
        content.textContent = "";
        homePage();
        homeButton.classList.add("active-page");
        menuButton.classList.remove("active-page");
        contactButton.classList.remove("active-page");
    });
    let menuButton = document.createElement("a");
    menuButton.textContent = "Menu";
    menuButton.setAttribute("href", "#");
    menuButton.addEventListener("click", function () {
        content.textContent = "";
        menuPage();
        menuButton.classList.add("active-page");
        homeButton.classList.remove("active-page");
        contactButton.classList.remove("active-page");
    });
    let contactButton = document.createElement("a");
    contactButton.textContent = "Contact Us";
    contactButton.setAttribute("href", "#");
    contactButton.addEventListener("click", function () {
        content.textContent = "";
        contactPage();
        contactButton.classList.add("active-page");
        menuButton.classList.remove("active-page");
        homeButton.classList.remove("active-page");
    });

    // - Right
    let navRight = document.createElement("div");
    navRight.classList.add("nav-right");
    let orderButton = document.createElement("button");
    orderButton.textContent = "Order";

    // - Nav Appending

    navLeft.appendChild(logo);
    navMiddle.appendChild(homeButton);
    navMiddle.appendChild(menuButton);
    navMiddle.appendChild(contactButton);
    navRight.appendChild(orderButton);

    nav.appendChild(navLeft);
    nav.appendChild(navMiddle);
    nav.appendChild(navRight);
    let body = document.querySelector("body");
    body.prepend(nav);
    return {
        nav,
        navLeft,
        navMiddle,
        navRight,
        homeButton,
        menuButton,
        contactButton,
        orderButton,
        logo,
    };
})();
