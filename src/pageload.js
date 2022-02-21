export default function pageLoad() {
    // Creating elements
    let content = document.querySelector('#content')
    // Navagation
    // - Left
    let nav = document.createElement('nav');
    let navLeft = document.createElement('div');
    navLeft.classList.add('nav-left');
    let logo = document.createElement('img');
    logo.setAttribute('src', "../assets/logo.png");
    logo.setAttribute('alt', "Restaurant Logo");
    logo.setAttribute('width', "48px");
    // - Middle
    let navMiddle = document.createElement('div');
    navMiddle.classList.add('nav-middle');
    let menuButton = document.createElement('a');
    menuButton.textContent = 'Menu';
    menuButton.setAttribute('href', "#")
    let contactButton = document.createElement('a');
    contactButton.textContent = 'Contact Us';
    contactButton.setAttribute('href', "#");
    
    // - Right
    let navRight = document.createElement('div');
    navRight.classList.add('nav-right');
    let orderButton = document.createElement('button');
    orderButton.textContent = 'Order';
    
    // - Nav Appending
    
    navLeft.appendChild(logo);
    navMiddle.appendChild(menuButton);
    navMiddle.appendChild(contactButton);
    navRight.appendChild(orderButton);
    

    nav.appendChild(navLeft);
    nav.appendChild(navMiddle);
    nav.appendChild(navRight);

        
    // Header
    let header = document.createElement('header');
    let headerContent = document.createElement('div')
    headerContent.classList.add('header-content');
    let headerTitle = document.createElement('h1');
    headerTitle.textContent = "A modern take on sushi";
    let headerDescription = document.createElement('p')
    headerDescription.textContent = "Get a break from urban monotony with our recipes infused with ancient Japanese ingredients.";
    
    // - Header Appending
    headerContent.appendChild(headerTitle);
    headerContent.appendChild(headerDescription);
    header.appendChild(nav);
    header.appendChild(headerContent);
    
    content.appendChild(header);

}


