document.addEventListener('DOMContentLoaded', () => {
    // --- Your existing video selection code ---
    const videos = [
        "https://files.catbox.moe/vy665x.mp4",
        "https://files.catbox.moe/bg7hdv.mp4",
        "https://files.catbox.moe/l9yi9r.mp4",
        "https://files.catbox.moe/elg9zl.mp4",
        "https://files.catbox.moe/es017e.mp4"
    ];
    const randInd = Math.floor(Math.random() * videos.length);
    const videoSrc = videos[randInd]; // Renamed 'x' to 'videoSrc' to avoid conflict with element ID
    const videoElement = document.getElementById("x");
    if (videoElement) {
        videoElement.src = videoSrc;
    }
    // --- End of your existing video selection code ---


    // --- New profile functionality code ---
    const nameClickables = document.querySelectorAll('.name-clickable');
    const profileContainer = document.getElementById('profile-container');

    // Profile data: image source and redirect link for each name
    const profiles = {
        "lain": {
            image: "lain_profile.png", // Assuming this is Yuta's profile pic from your second image
            text: "omnipresent", // Text below the image
            link: "https://example.com/yuta" // Replace with actual link
        },
        "rot": {
            image: "rot_profile.png", // Placeholder - **UPDATE THIS**
            text: "you left me to rot", // Text for Rosie
            link: "https://example.com/rosie" // Placeholder - **UPDATE THIS**
        },
        "celly": {
            image: "celly_profile.png", // Placeholder - **UPDATE THIS**
            text: "good belly", // Text for Zgmbie
            link: "https://example.com/zgmbie" // Placeholder - **UPDATE THIS**
        },
        "juggy": {
            image: "juggy_profile.png", // Placeholder - **UPDATE THIS**
            text: "juggin' n finessin", // Text for Maoshroom
            link: "https://example.com/maoshroom" // Placeholder - **UPDATE THIS**
        }
    };

    nameClickables.forEach(nameSpan => {
        nameSpan.addEventListener('click', () => {
            const name = nameSpan.dataset.name; // Get the name from the data-name attribute
            const profile = profiles[name];

            if (profile) {
                // Construct the HTML for the profile
                profileContainer.innerHTML = `
                    <a href="${profile.link}" target="_blank"> <img src="${profile.image}" alt="${name}'s Profile Picture">
                    </a>
                    <p>${profile.text}</p>
                `;
                profileContainer.style.display = 'block'; // Show the container
            } else {
                profileContainer.style.display = 'none'; // Hide if no profile data
                profileContainer.innerHTML = ''; // Clear previous content
            }
        });
    });
    // --- End of new profile functionality code ---
});