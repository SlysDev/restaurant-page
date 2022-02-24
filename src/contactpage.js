export default function contactPage() {
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
