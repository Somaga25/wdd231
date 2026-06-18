import { getServices }
from "./services.js";

const container =
    document.querySelector("#services-container");
const recentService =
    document.querySelector("#recent-service");

const savedService =
    localStorage.getItem("lastViewedService");

if (savedService) {

    recentService.textContent =
        `Recently Viewed: ${savedService}`;

}

const dialog =
    document.querySelector("#service-details");

const modalTitle =
    document.querySelector("#modal-title");

const modalCategory =
    document.querySelector("#modal-category");

const modalPrice =
    document.querySelector("#modal-price");

const modalStatus =
    document.querySelector("#modal-status");

const modalDescription =
    document.querySelector("#modal-description");
const requestLink =
    document.querySelector("#request-link");

const closeButton =
    document.querySelector("#close-modal");

displayServices();

async function displayServices() {

    const services =
        await getServices();

    services.forEach(service => {

        const card =
            document.createElement("article");

        card.classList.add("service-card");

        card.innerHTML = `
            <img
                src="images/${service.image}"
                alt="${service.name}"
                loading="lazy"
                width="300"
                height="200">

            <h3>${service.name}</h3>

            <p>
                <strong>Category:</strong>
                ${service.category}
            </p>

            <p>
                <strong>Price:</strong>
                ${service.price}
            </p>

            <p>
                <strong>Status:</strong>
                ${service.availability}
            </p>

            <button class="details-btn">
                View Details
            </button>
`;

        const button =
            card.querySelector(".details-btn");

        button.addEventListener("click", () => {

            modalTitle.textContent =
                service.name;

            modalCategory.textContent =
                `Category: ${service.category}`;

            modalPrice.textContent =
                `Price: ${service.price}`;

            modalStatus.textContent =
                `Availability: ${service.availability}`;

            modalDescription.textContent =
                service.description;
            requestLink.href =
                `request.html?service=${encodeURIComponent(service.name)}`;

            localStorage.setItem(
                "lastViewedService",
                service.name
            );

            dialog.showModal();

        });

        container.appendChild(card);

    });

}

closeButton.addEventListener("click", () => {
    dialog.close();
});