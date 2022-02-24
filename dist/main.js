/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactpage.js":
/*!****************************!*\
  !*** ./src/contactpage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactPage)
/* harmony export */ });
function contactPage() {
    let content = document.querySelector("#content");
    let contactContainer = document.createElement("div");
    contactContainer.classList.add("form-container");
    let contactForm = document.createElement("form");
    let contactTitle = document.createElement("h1");
    contactTitle.textContent = "Contact Us";
    let labelSection = document.createElement("div");
    labelSection.classList.add("form-section");
    let inputSection = document.createElement("div");
    inputSection.classList.add("form-section");
    let nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    nameLabel.setAttribute("for", "contact-name");
    let emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    emailLabel.setAttribute("for", "contact-email");
    let messageLabel = document.createElement("label");
    messageLabel.textContent = "Message:";
    messageLabel.setAttribute("for", "contact-message");
    let nameInput = document.createElement("input");
    nameInput.setAttribute("id", "contact-name");
    nameInput.setAttribute("type", "text");
    let emailInput = document.createElement("input");
    emailInput.setAttribute("id", "contact-email");
    emailInput.setAttribute("type", "text");
    let messageInput = document.createElement("input");
    messageInput.setAttribute("id", "contact-message");
    messageInput.setAttribute("type", "text");

    // Appending
    inputSection.append(nameInput, emailInput, messageInput);
    labelSection.append(nameLabel, emailLabel, messageLabel);
    contactForm.append(labelSection, inputSection);
    contactContainer.append(contactTitle, contactForm);
    content.appendChild(contactContainer);
}


/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePage)
/* harmony export */ });
function homePage() {
    // Creating elements
    let content = document.querySelector("#content");
    let header = document.createElement("header");
    let headerContent = document.createElement("div");
    headerContent.classList.add("header-content");
    let headerTitle = document.createElement("h1");
    headerTitle.textContent = "A modern take on sushi";
    let headerDescription = document.createElement("p");
    headerDescription.textContent =
        "Get a break from urban monotony with our recipes infused with ancient Japanese ingredients.";

    // - Header Appending
    headerContent.appendChild(headerTitle);
    headerContent.appendChild(headerDescription);
    header.appendChild(headerContent);
    content.appendChild(header);
    return { header, headerContent, headerTitle };
}


/***/ }),

/***/ "./src/menupage.js":
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPage)
/* harmony export */ });
function menuPage() {
    let menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    let itemList = document.createElement("div");
    itemList.classList.add("item-container");
    let sanRollImage = document.createElement("img");
    sanRollImage.setAttribute("src", "../assets/san-roll.jpeg");
    sanRollImage.setAttribute("width", "240px");
    let iakaiCupCakeImage = document.createElement("img");
    iakaiCupCakeImage.setAttribute("src", "../assets/iakai-cupcakes.jpeg");
    iakaiCupCakeImage.setAttribute("width", "240px");
    let rawMushaiImage = document.createElement("img");
    rawMushaiImage.setAttribute("src", "../assets/raw-mushai.jpeg");
    rawMushaiImage.setAttribute("width", "240px");
    let ramaiRollImage = document.createElement("img");
    ramaiRollImage.setAttribute("src", "../assets/ramai-roll.jpeg");
    ramaiRollImage.setAttribute("width", "240px");
    let takaiPlatterImage = document.createElement("img");
    takaiPlatterImage.setAttribute("src", "../assets/takai-platter.jpeg");
    takaiPlatterImage.setAttribute("width", "240px");
    // Titles
    let sanRollTitle = document.createElement("h1");
    sanRollTitle.textContent = "San Roll";
    let iakaiCupCakeTitle = document.createElement("h1");
    iakaiCupCakeTitle.textContent = "Iakai Cupcake";
    let rawMushaiTitle = document.createElement("h1");
    rawMushaiTitle.textContent = "Raw Mushai";
    let takaiPlatterTitle = document.createElement("h1");
    takaiPlatterTitle.textContent = "Takai Platter";
    let ramaiRollTitle = document.createElement("h1");
    ramaiRollTitle.textContent = "Ramai Roll";
    // Item Containers
    let sanRollContainer = document.createElement("div");
    sanRollContainer.classList.add("menu-item-container");
    sanRollContainer.appendChild(sanRollImage);
    sanRollContainer.appendChild(sanRollTitle);
    let iakaiCupCakeContainer = document.createElement("div");
    iakaiCupCakeContainer.classList.add("menu-item-container");
    iakaiCupCakeContainer.appendChild(iakaiCupCakeImage);
    iakaiCupCakeContainer.appendChild(iakaiCupCakeTitle);
    let rawMushaiContainer = document.createElement("div");
    rawMushaiContainer.classList.add("menu-item-container");
    rawMushaiContainer.appendChild(rawMushaiImage);
    rawMushaiContainer.appendChild(rawMushaiTitle);
    let takaiPlatterContainer = document.createElement("div");
    takaiPlatterContainer.classList.add("menu-item-container");
    takaiPlatterContainer.appendChild(takaiPlatterImage);
    takaiPlatterContainer.appendChild(takaiPlatterTitle);
    let ramaiRollContainer = document.createElement("div");
    ramaiRollContainer.classList.add("menu-item-container");
    ramaiRollContainer.appendChild(ramaiRollImage);
    ramaiRollContainer.appendChild(ramaiRollTitle);

    let menuTitle = document.createElement("h1");
    menuTitle.textContent = "Menu";

    itemList.appendChild(sanRollContainer);
    itemList.appendChild(iakaiCupCakeContainer);
    itemList.appendChild(rawMushaiContainer);
    itemList.appendChild(takaiPlatterContainer);
    itemList.appendChild(ramaiRollContainer);
    menuContainer.appendChild(menuTitle);
    menuContainer.appendChild(itemList);
    content.appendChild(menuContainer);
    return { itemList, menuContainer };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menupage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menupage.js */ "./src/menupage.js");
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ "./src/homepage.js");
/* harmony import */ var _contactpage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactpage.js */ "./src/contactpage.js");






let navBar = (function () {
    (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Makes Homepage the default page

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
        (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        homeButton.classList.add("active-page");
        menuButton.classList.remove("active-page");
        contactButton.classList.remove("active-page");
    });
    let menuButton = document.createElement("a");
    menuButton.textContent = "Menu";
    menuButton.setAttribute("href", "#");
    menuButton.addEventListener("click", function () {
        content.textContent = "";
        (0,_menupage_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
        menuButton.classList.add("active-page");
        homeButton.classList.remove("active-page");
        contactButton.classList.remove("active-page");
    });
    let contactButton = document.createElement("a");
    contactButton.textContent = "Contact Us";
    contactButton.setAttribute("href", "#");
    contactButton.addEventListener("click", function () {
        content.textContent = "";
        (0,_contactpage_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcENlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7O0FDbEJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7Ozs7OztVQ2pFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7O0FBRUE7O0FBRU07O0FBRTNDO0FBQ0EsSUFBSSx3REFBUSxJQUFJOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBUTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3RwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RQYWdlKCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGxldCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcbiAgICBsZXQgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBsZXQgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuICAgIGxldCBsYWJlbFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxhYmVsU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1zZWN0aW9uXCIpO1xuICAgIGxldCBpbnB1dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlucHV0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1zZWN0aW9uXCIpO1xuICAgIGxldCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lOlwiO1xuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjb250YWN0LW5hbWVcIik7XG4gICAgbGV0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZW1haWxMYWJlbC50ZXh0Q29udGVudCA9IFwiRW1haWw6XCI7XG4gICAgZW1haWxMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjb250YWN0LWVtYWlsXCIpO1xuICAgIGxldCBtZXNzYWdlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbWVzc2FnZUxhYmVsLnRleHRDb250ZW50ID0gXCJNZXNzYWdlOlwiO1xuICAgIG1lc3NhZ2VMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjb250YWN0LW1lc3NhZ2VcIik7XG4gICAgbGV0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0LW5hbWVcIik7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGxldCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0LWVtYWlsXCIpO1xuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgbGV0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBtZXNzYWdlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0LW1lc3NhZ2VcIik7XG4gICAgbWVzc2FnZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gICAgLy8gQXBwZW5kaW5nXG4gICAgaW5wdXRTZWN0aW9uLmFwcGVuZChuYW1lSW5wdXQsIGVtYWlsSW5wdXQsIG1lc3NhZ2VJbnB1dCk7XG4gICAgbGFiZWxTZWN0aW9uLmFwcGVuZChuYW1lTGFiZWwsIGVtYWlsTGFiZWwsIG1lc3NhZ2VMYWJlbCk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kKGxhYmVsU2VjdGlvbiwgaW5wdXRTZWN0aW9uKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZChjb250YWN0VGl0bGUsIGNvbnRhY3RGb3JtKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XG4gICAgLy8gQ3JlYXRpbmcgZWxlbWVudHNcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBsZXQgaGVhZGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWNvbnRlbnRcIik7XG4gICAgbGV0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJBIG1vZGVybiB0YWtlIG9uIHN1c2hpXCI7XG4gICAgbGV0IGhlYWRlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaGVhZGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxuICAgICAgICBcIkdldCBhIGJyZWFrIGZyb20gdXJiYW4gbW9ub3Rvbnkgd2l0aCBvdXIgcmVjaXBlcyBpbmZ1c2VkIHdpdGggYW5jaWVudCBKYXBhbmVzZSBpbmdyZWRpZW50cy5cIjtcblxuICAgIC8vIC0gSGVhZGVyIEFwcGVuZGluZ1xuICAgIGhlYWRlckNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuICAgIGhlYWRlckNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyRGVzY3JpcHRpb24pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJDb250ZW50KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgcmV0dXJuIHsgaGVhZGVyLCBoZWFkZXJDb250ZW50LCBoZWFkZXJUaXRsZSB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudVBhZ2UoKSB7XG4gICAgbGV0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGFpbmVyXCIpO1xuICAgIGxldCBpdGVtTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbUxpc3QuY2xhc3NMaXN0LmFkZChcIml0ZW0tY29udGFpbmVyXCIpO1xuICAgIGxldCBzYW5Sb2xsSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHNhblJvbGxJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9hc3NldHMvc2FuLXJvbGwuanBlZ1wiKTtcbiAgICBzYW5Sb2xsSW1hZ2Uuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIyNDBweFwiKTtcbiAgICBsZXQgaWFrYWlDdXBDYWtlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGlha2FpQ3VwQ2FrZUltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL2Fzc2V0cy9pYWthaS1jdXBjYWtlcy5qcGVnXCIpO1xuICAgIGlha2FpQ3VwQ2FrZUltYWdlLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMjQwcHhcIik7XG4gICAgbGV0IHJhd011c2hhaUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICByYXdNdXNoYWlJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9hc3NldHMvcmF3LW11c2hhaS5qcGVnXCIpO1xuICAgIHJhd011c2hhaUltYWdlLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMjQwcHhcIik7XG4gICAgbGV0IHJhbWFpUm9sbEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICByYW1haVJvbGxJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9hc3NldHMvcmFtYWktcm9sbC5qcGVnXCIpO1xuICAgIHJhbWFpUm9sbEltYWdlLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMjQwcHhcIik7XG4gICAgbGV0IHRha2FpUGxhdHRlckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICB0YWthaVBsYXR0ZXJJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9hc3NldHMvdGFrYWktcGxhdHRlci5qcGVnXCIpO1xuICAgIHRha2FpUGxhdHRlckltYWdlLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMjQwcHhcIik7XG4gICAgLy8gVGl0bGVzXG4gICAgbGV0IHNhblJvbGxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBzYW5Sb2xsVGl0bGUudGV4dENvbnRlbnQgPSBcIlNhbiBSb2xsXCI7XG4gICAgbGV0IGlha2FpQ3VwQ2FrZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGlha2FpQ3VwQ2FrZVRpdGxlLnRleHRDb250ZW50ID0gXCJJYWthaSBDdXBjYWtlXCI7XG4gICAgbGV0IHJhd011c2hhaVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHJhd011c2hhaVRpdGxlLnRleHRDb250ZW50ID0gXCJSYXcgTXVzaGFpXCI7XG4gICAgbGV0IHRha2FpUGxhdHRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRha2FpUGxhdHRlclRpdGxlLnRleHRDb250ZW50ID0gXCJUYWthaSBQbGF0dGVyXCI7XG4gICAgbGV0IHJhbWFpUm9sbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHJhbWFpUm9sbFRpdGxlLnRleHRDb250ZW50ID0gXCJSYW1haSBSb2xsXCI7XG4gICAgLy8gSXRlbSBDb250YWluZXJzXG4gICAgbGV0IHNhblJvbGxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNhblJvbGxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1jb250YWluZXJcIik7XG4gICAgc2FuUm9sbENvbnRhaW5lci5hcHBlbmRDaGlsZChzYW5Sb2xsSW1hZ2UpO1xuICAgIHNhblJvbGxDb250YWluZXIuYXBwZW5kQ2hpbGQoc2FuUm9sbFRpdGxlKTtcbiAgICBsZXQgaWFrYWlDdXBDYWtlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpYWthaUN1cENha2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1jb250YWluZXJcIik7XG4gICAgaWFrYWlDdXBDYWtlQ29udGFpbmVyLmFwcGVuZENoaWxkKGlha2FpQ3VwQ2FrZUltYWdlKTtcbiAgICBpYWthaUN1cENha2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaWFrYWlDdXBDYWtlVGl0bGUpO1xuICAgIGxldCByYXdNdXNoYWlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJhd011c2hhaUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWNvbnRhaW5lclwiKTtcbiAgICByYXdNdXNoYWlDb250YWluZXIuYXBwZW5kQ2hpbGQocmF3TXVzaGFpSW1hZ2UpO1xuICAgIHJhd011c2hhaUNvbnRhaW5lci5hcHBlbmRDaGlsZChyYXdNdXNoYWlUaXRsZSk7XG4gICAgbGV0IHRha2FpUGxhdHRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFrYWlQbGF0dGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW0tY29udGFpbmVyXCIpO1xuICAgIHRha2FpUGxhdHRlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWthaVBsYXR0ZXJJbWFnZSk7XG4gICAgdGFrYWlQbGF0dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRha2FpUGxhdHRlclRpdGxlKTtcbiAgICBsZXQgcmFtYWlSb2xsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByYW1haVJvbGxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1jb250YWluZXJcIik7XG4gICAgcmFtYWlSb2xsQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhbWFpUm9sbEltYWdlKTtcbiAgICByYW1haVJvbGxDb250YWluZXIuYXBwZW5kQ2hpbGQocmFtYWlSb2xsVGl0bGUpO1xuXG4gICAgbGV0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcblxuICAgIGl0ZW1MaXN0LmFwcGVuZENoaWxkKHNhblJvbGxDb250YWluZXIpO1xuICAgIGl0ZW1MaXN0LmFwcGVuZENoaWxkKGlha2FpQ3VwQ2FrZUNvbnRhaW5lcik7XG4gICAgaXRlbUxpc3QuYXBwZW5kQ2hpbGQocmF3TXVzaGFpQ29udGFpbmVyKTtcbiAgICBpdGVtTGlzdC5hcHBlbmRDaGlsZCh0YWthaVBsYXR0ZXJDb250YWluZXIpO1xuICAgIGl0ZW1MaXN0LmFwcGVuZENoaWxkKHJhbWFpUm9sbENvbnRhaW5lcik7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUxpc3QpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG4gICAgcmV0dXJuIHsgaXRlbUxpc3QsIG1lbnVDb250YWluZXIgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG1lbnVQYWdlIGZyb20gXCIuL21lbnVwYWdlLmpzXCI7XG5cbmltcG9ydCBob21lUGFnZSBmcm9tIFwiLi9ob21lcGFnZS5qc1wiO1xuXG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdHBhZ2UuanNcIjtcblxubGV0IG5hdkJhciA9IChmdW5jdGlvbiAoKSB7XG4gICAgaG9tZVBhZ2UoKTsgLy8gTWFrZXMgSG9tZXBhZ2UgdGhlIGRlZmF1bHQgcGFnZVxuXG4gICAgLy8gLSBMZWZ0XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgbGV0IG5hdkxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hdkxlZnQuY2xhc3NMaXN0LmFkZChcIm5hdi1sZWZ0XCIpO1xuICAgIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsb2dvLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL2Fzc2V0cy9sb2dvLnBuZ1wiKTtcbiAgICBsb2dvLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlJlc3RhdXJhbnQgTG9nb1wiKTtcbiAgICBsb2dvLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiNDhweFwiKTtcbiAgICAvLyAtIE1pZGRsZVxuICAgIGxldCBuYXZNaWRkbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hdk1pZGRsZS5jbGFzc0xpc3QuYWRkKFwibmF2LW1pZGRsZVwiKTtcbiAgICBsZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcGFnZVwiKTtcbiAgICBob21lQnV0dG9uLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpO1xuICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGhvbWVQYWdlKCk7XG4gICAgICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wYWdlXCIpO1xuICAgICAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtcGFnZVwiKTtcbiAgICAgICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXBhZ2VcIik7XG4gICAgfSk7XG4gICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgbWVudUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiKTtcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBtZW51UGFnZSgpO1xuICAgICAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcGFnZVwiKTtcbiAgICAgICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXBhZ2VcIik7XG4gICAgICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wYWdlXCIpO1xuICAgIH0pO1xuICAgIGxldCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuICAgIGNvbnRhY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XG4gICAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgY29udGFjdFBhZ2UoKTtcbiAgICAgICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXBhZ2VcIik7XG4gICAgICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wYWdlXCIpO1xuICAgICAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtcGFnZVwiKTtcbiAgICB9KTtcblxuICAgIC8vIC0gUmlnaHRcbiAgICBsZXQgbmF2UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hdlJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJuYXYtcmlnaHRcIik7XG4gICAgbGV0IG9yZGVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBvcmRlckJ1dHRvbi50ZXh0Q29udGVudCA9IFwiT3JkZXJcIjtcblxuICAgIC8vIC0gTmF2IEFwcGVuZGluZ1xuXG4gICAgbmF2TGVmdC5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBuYXZNaWRkbGUuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gICAgbmF2TWlkZGxlLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICAgIG5hdk1pZGRsZS5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcbiAgICBuYXZSaWdodC5hcHBlbmRDaGlsZChvcmRlckJ1dHRvbik7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2TGVmdCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdk1pZGRsZSk7XG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdlJpZ2h0KTtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGJvZHkucHJlcGVuZChuYXYpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hdixcbiAgICAgICAgbmF2TGVmdCxcbiAgICAgICAgbmF2TWlkZGxlLFxuICAgICAgICBuYXZSaWdodCxcbiAgICAgICAgaG9tZUJ1dHRvbixcbiAgICAgICAgbWVudUJ1dHRvbixcbiAgICAgICAgY29udGFjdEJ1dHRvbixcbiAgICAgICAgb3JkZXJCdXR0b24sXG4gICAgICAgIGxvZ28sXG4gICAgfTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=