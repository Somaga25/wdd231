import { places } from "../data/places.mjs";

const cardsContainer =
    document.querySelector("#discover-cards");

displayPlaces();

function displayPlaces() {

    places.forEach((place, index) => {

        const card =
            document.createElement("section");

        card.classList.add("discover-card");
        card.classList.add(`card${index + 1}`);

        const title =
            document.createElement("h2");

        title.textContent =
            place.name;

        const figure =
            document.createElement("figure");

        const image =
            document.createElement("img");

        image.src =
            place.image;

        image.alt =
            place.name;

        image.loading =
            "lazy";

        image.width =
            300;

        image.height =
            200;

        figure.appendChild(image);

        const address =
            document.createElement("address");

        address.textContent =
            place.address;

        const description =
            document.createElement("p");

        description.textContent =
            place.description;

        const button =
            document.createElement("button");

        button.textContent =
            "Learn More";

        card.appendChild(title);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);

        cardsContainer.appendChild(card);

    });

}

/* ---------- VISIT MESSAGE ---------- */

const visitMessage =
    document.querySelector("#visit-message");

const lastVisit =
    localStorage.getItem("lastVisit");

const currentDate =
    Date.now();

if (!lastVisit) {

    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";

}
else {

    const daysBetween =
        Math.floor(
            (currentDate - Number(lastVisit))
            / 86400000
        );

    if (daysBetween < 1) {

        visitMessage.textContent =
            "Back so soon! Awesome!";

    }
    else if (daysBetween === 1) {

        visitMessage.textContent =
            "You last visited 1 day ago.";

    }
    else {

        visitMessage.textContent =
            `You last visited ${daysBetween} days ago.`;

    }

}

localStorage.setItem(
    "lastVisit",
    currentDate
);