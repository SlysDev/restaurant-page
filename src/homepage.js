export default function homePage() {
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
