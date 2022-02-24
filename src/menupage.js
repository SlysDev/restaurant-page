export default function menuPage() {
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
