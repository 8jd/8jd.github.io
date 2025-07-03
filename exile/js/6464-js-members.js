const profileDisplay = document.getElementById('profile-display');
const profileLink = document.getElementById('profile-link');
const profilePic = document.getElementById('profile-pic');
const profileDesc = document.getElementById('profile-desc');

const profiles = {
  lain: {
    img: 'images/lain.png',
    desc: 'omnipresent',
    link: 'https://harm.pw'
  },
  rot: {
    img: 'images/rot.png',
    desc: 'you left me to rot',
    link: 'https://numb.lol'
  },
  celly: {
    img: 'images/celly.png',
    desc: 'good belly',
    link: 'https://discord.gg/kms'
  },
  juggy: {
    img: 'images/juggy.png',
    desc: 'juggin\' n finessin',
    link: 'https://tiktok.com/@100mgs'
  }
  
};

Object.values(profiles).forEach(profile => {
  const img = new Image();
  img.src = profile.img;
});

let currentProfile = null;

document.querySelectorAll('.profile-name').forEach(nameEl => {
  nameEl.addEventListener('click', (e) => {
    e.stopPropagation();
    const key = nameEl.dataset.name;
    const profile = profiles[key];

    if (!profile) return;

    if (currentProfile === key) {
      profileDisplay.style.display = 'none';
      profilePic.src = '';
      profileDesc.textContent = '';
      profileLink.removeAttribute('href');
      currentProfile = null;
    } else {
      profilePic.src = profile.img;
      profileDesc.textContent = profile.desc;
      profilePic.alt = `${key} profile picture`;
      profileLink.href = profile.link;
      profileDisplay.style.display = 'flex';
      currentProfile = key;
    }
  });
});
