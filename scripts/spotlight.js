const spotlightContainer =
    document.querySelector('#spotlight-container');

const url =
    'data/members.json';

async function getSpotlights() {

    try {

        const response = await fetch(url);

        if (response.ok) {

            const data = await response.json();

            displaySpotlights(data.members);

        } else {

            throw Error(await response.text());

        }

    } catch (error) {

        console.error(error);

    }

}

function displaySpotlights(members) {

    const qualifiedMembers = members.filter((member) =>
        member.membership === 2 ||
        member.membership === 3
    );

    const shuffledMembers =
        [...qualifiedMembers].sort(() => Math.random() - 0.5);

    const selectedMembers =
        shuffledMembers.slice(0, 3);

    spotlightContainer.innerHTML = '';

    selectedMembers.forEach((member) => {

        const card =
            document.createElement('section');

        card.classList.add('spotlight-card');

        card.innerHTML = `
            <img
                src="images/${member.image}"
                alt="${member.name} logo"
                width="150"
                height="150"
                loading="lazy"
            >

            <h3>${member.name}</h3>

            <p>${member.address}</p>

            <p>${member.phone}</p>

            <p>
                <a
                    href="${member.website}"
                    target="_blank"
                    rel="noopener"
                >
                    ${member.website}
                </a>
            </p>

            <p>
                ${
                    member.membership === 3
                        ? 'Gold Member'
                        : 'Silver Member'
                }
            </p>
        `;

        spotlightContainer.appendChild(card);

    });

}

getSpotlights();