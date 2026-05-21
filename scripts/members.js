const url = 'data/members.json';

const cards = document.querySelector('#members');

async function getMembersData() {

    const response = await fetch(url);

    const data = await response.json();

    displayMembers(data.members);

}

getMembersData();

const displayMembers = (members) => {

    members.forEach((member) => {

        let card = document.createElement('section');

        let name = document.createElement('h2');

        let address = document.createElement('p');

        let phone = document.createElement('p');

        let website = document.createElement('a');

        let portrait = document.createElement('img');

        let level = document.createElement('p');

        name.textContent = member.name;

        address.textContent = member.address;

        phone.textContent = member.phone;

        level.textContent =
            `Membership Level: ${member.membership}`;

        website.textContent = 'Visit Website';

        website.setAttribute(
            'href',
            member.website
        );

        website.setAttribute(
            'target',
            '_blank'
        );

        portrait.setAttribute(
            'src',
            `images/${member.image}`
        );

        portrait.setAttribute(
            'alt',
            `${member.name} logo`
        );

        portrait.setAttribute(
            'loading',
            'lazy'
        );

        portrait.setAttribute(
            'width',
            '200'
        );

        portrait.setAttribute(
            'height',
            '200'
        );

        card.appendChild(name);

        card.appendChild(portrait);

        card.appendChild(address);

        card.appendChild(phone);

        card.appendChild(level);

        card.appendChild(website);

        cards.appendChild(card);

    });

};

const gridButton = document.querySelector('#grid');

const listButton = document.querySelector('#list');

gridButton.addEventListener('click', () => {

    cards.classList.add('grid');

    cards.classList.remove('list');

});

listButton.addEventListener('click', showList);

function showList() {

    cards.classList.add('list');

    cards.classList.remove('grid');

}