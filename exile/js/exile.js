document.addEventListener('DOMContentLoaded', () => {
    const nameClickables = document.querySelectorAll('.name-clickable');
    const profileContainer = document.getElementById('profile-container');

    // Profile data for the "exile" page
    const profiles = {
        "lain": {
            image: "harm\js\lain_profile.jpg", // **UPDATE THIS PATH**
            text: "omnipresent",
            link: "https://example.com/lain" // **UPDATE THIS LINK**
        },
        "rot": {
            image: "harm\js\rot_profile.jpg", // **UPDATE THIS PATH**
            text: "you left me to rot",
            link: "https://example.com/rot" // **UPDATE THIS LINK**
        },
        "celly": {
            image: "harm\js\celly_profile.jpg", // **UPDATE THIS PATH**
            text: "good belly",
            link: "https://example.com/celly" // **UPDATE THIS LINK**
        },
        "juggy": {
            image: "harm\js\juggy_profile.jpg", // **UPDATE THIS PATH**
            text: "juggin' n finessin",
            link: "https://example.com/juggy" // **UPDATE THIS LINK**
        }
    };

    nameClickables.forEach(nameSpan => {
        nameSpan.addEventListener('click', () => {
            const name = nameSpan.dataset.name;
            const profile = profiles[name];

            if (profile) {
                profileContainer.innerHTML = `
                    <a href="${profile.link}" target="_blank">
                        <img src="${profile.image}" alt="${name}'s Profile Picture">
                    </a>
                    <p>${profile.text}</p>
                `;
                profileContainer.style.display = 'block';
            } else {
                profileContainer.style.display = 'none';
                profileContainer.innerHTML = ''; // Clear previous content
            }
        });
    });
});