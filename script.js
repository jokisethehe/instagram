// State Management
const state = {
    currentAccount: 'pwetianaa__',
    currentScreen: 'login', // Tambahan tracking screen untuk musik
    theme: 'dark',
    isLoggedIn: false,
    activeSlides: {}, 
    autoPlayIntervals: {}
};

// Data Masterpiece
const accounts = {
    'pwetianaa__': {
        username: 'pwetianaa__',
        fullName: 'anaa',
        profilePic: 'assets/first/foto1.png',
        bio: "Can't decide...\n@azkamsptra_",
        bgm: 'assets/first/sza-good-days.mp3', 
        postsCount: 3,
        followers: '1.209',
        following: '1.033',
        stories: [
            { username: 'Your story', img: 'assets/first/foto1.png', isYourStory: true },
            { username: 'putri.ayuu', img: 'assets/teman1.png', isLive: true },
            { username: 'salsabila_99', img: 'assets/teman2.png' },
            { username: 'dimas.pratama', img: 'assets/teman3.png' },
            { username: 'nisa.imut', img: 'assets/teman4.png' },
            { username: 'cintiaa.x', img: 'assets/teman5.png' },
            { username: 'rendy_boy', img: 'assets/teman6.png' }
        ],
        dms: [
            { user: 'putri.ayuu', img: 'assets/teman1.png', msg: 'Foto yang tadi bagus!', time: '2h', note: 'Ready for...' },
            { user: 'salsabila_99', img: 'assets/teman2.png', msg: 'Hahahaha bener juga', time: '5h', note: 'I\'ll drop dead' },
            { user: 'dimas.pratama', img: 'assets/teman3.png', msg: 'P', time: '1h', note: 'mau punya cowo ga sii' },
            { user: 'nisa.imut', img: 'assets/teman4.png', msg: 'Sent a reel by azkamsptra_', time: '7h', note: 'duh mas boy' },
            { user: 'cintiaa.x', img: 'assets/teman5.png', msg: '4+ new messages', time: '16h', isUnread: true },
            { user: 'rendy_boy', img: 'assets/teman6.png', msg: '🙄🙄🙄🙄🙄🙄', time: '5d' }
        ],
        posts: [
            {
                id: 'p0',
                username: 'pwetianaa__',
                profilePic: 'assets/first/foto1.png',
                type: 'scrapbook',
                music: 'SZA · Good Days',
                likes: '1.234',
                isLiked: false,
                caption: 'a day in my life 🎀',
                time: '1 HOUR AGO',
                slides: [
                    {
                        img: 'assets/first/foto1.png',
                        elements: [
                            { type: 'text', content: 'A Day in Bandung', font: 'font-dancing', top: '10%', left: '10%', delay: '0s' },
                            { type: 'video', src: 'assets/first/live-me.mp4', top: '20%', left: '55%', width: '120px', height: '180px', delay: '0.2s', rotation: '5deg' },
                            { type: 'image', src: 'assets/first/icon-fotoku.png', top: '55%', left: '5%', width: '100px', delay: '0.4s', rotation: '-10deg' },
                            { type: 'image', src: 'assets/first/icon-kamera.png', top: '25%', left: '15%', width: '60px', delay: '0.5s', rotation: '-15deg' },
                            { type: 'spotify', top: '75%', left: '25%', delay: '0.6s' },
                            { type: 'image', src: 'assets/first/icon-musicbar.png', top: '15%', left: '40%', width: '120px', delay: '0.7s', rotation: '0deg' }
                        ]
                    },
                    {
                        img: 'assets/first/foto2.png',
                        elements: [
                            { type: 'video', src: 'assets/first/live-cafe.mp4', top: '15%', left: '10%', width: '140px', height: '140px', delay: '0.1s', rotation: '-5deg', borderRadius: '50%' },
                            { type: 'text', content: 'Cafe Hopping \n& Good Reads', font: 'font-playfair', top: '10%', left: '50%', delay: '0.2s' },
                            { type: 'image', src: 'assets/first/foto-bingkai.png', top: '45%', left: '45%', width: '150px', delay: '0.3s', rotation: '8deg' },
                            { type: 'image', src: 'assets/first/icon-kopi.png', top: '55%', left: '15%', width: '70px', delay: '0.5s', rotation: '12deg' },
                            { type: 'image', src: 'assets/first/icon-coklat.png', top: '70%', left: '25%', width: '60px', delay: '0.6s', rotation: '-5deg' },
                            { type: 'image', src: 'assets/first/icon-buku.png', top: '35%', left: '55%', width: '80px', delay: '0.7s', rotation: '-10deg' },
                            { type: 'airdrop', top: '75%', left: '10%', delay: '0.8s' }
                        ]
                    },
                    {
                        img: 'assets/first/foto3.png',
                        elements: [
                            { type: 'video', src: 'assets/first/live-bike.mp4', top: '20%', left: '20%', width: '200px', height: '250px', delay: '0.1s', rotation: '2deg' },
                            { type: 'text', content: 'Next Chapter...', font: 'font-homemade', top: '12%', left: '15%', delay: '0.3s' },
                            { type: 'image', src: 'assets/first/icon-wisuda.png', top: '65%', left: '10%', width: '100px', delay: '0.4s', rotation: '-15deg' },
                            { type: 'image', src: 'assets/first/icon-bunga.png', top: '55%', left: '60%', width: '90px', delay: '0.5s', rotation: '15deg' },
                            { type: 'image', src: 'assets/first/icon-laptop.png', top: '75%', left: '45%', width: '110px', delay: '0.6s', rotation: '5deg' },
                            { type: 'image', src: 'assets/first/icon-emoticon.png', top: '40%', left: '65%', width: '80px', delay: '0.7s', rotation: '0deg' },
                            { type: 'gmaps', top: '80%', left: '15%', delay: '0.8s' }
                        ]
                    }
                ]
            },
            {
                id: 'p1',
                username: 'putri.ayuu',
                profilePic: 'assets/teman1.png',
                type: 'standard',
                music: 'NIKI · Take A Chance With Me',
                likes: '852',
                isLiked: false,
                caption: 'weekend vibes 🌿',
                time: '2 HOURS AGO',
                slides: [{ img: 'assets/second/foto4.jpg', elements: [] }]
            },
            {
                id: 'p2',
                username: 'salsabila_99',
                profilePic: 'assets/teman2.png',
                type: 'standard',
                music: 'NewJeans · Ditto',
                likes: '1.102',
                isLiked: false,
                caption: 'cozy afternoon ☕',
                time: '5 HOURS AGO',
                slides: [{ img: 'assets/second/foto5.jpg', elements: [] }]
            }
        ],
        highlights: [
            { id: 'h1', title: 'Me', img: 'assets/first/foto1.png' },
            { id: 'h2', title: 'Vibes', img: 'assets/first/foto2.png' }
        ]
    },
    'anaa.mov': {
        username: 'anaa.mov',
        fullName: 'Ana',
        profilePic: 'assets/first/foto-bingkai.png',
        bio: "just ana 🎀\nspam dump here!",
        bgm: 'assets/second/wave-to-earth-seasons.mp3', 
        postsCount: 7,
        followers: '856',
        following: '432',
        stories: [
            { username: 'Your story', img: 'assets/first/foto-bingkai.png', isYourStory: true },
            { username: 'putri.ayuu', img: 'assets/teman1.png' },
            { username: 'salsabila_99', img: 'assets/teman2.png' },
            { username: 'cintiaa.x', img: 'assets/teman5.png' }
        ],
        dms: [
            { user: 'putri.ayuu', img: 'assets/teman1.png', msg: 'Na, besok jadi jalan?', time: '1h', note: 'lagi pengen seblak' },
            { user: 'salsabila_99', img: 'assets/teman2.png', msg: 'Lucu bgt fotonyaaa', time: '2h', isUnread: true, note: 'Tidur woy' },
            { user: 'cintiaa.x', img: 'assets/teman5.png', msg: 'Wkwk bener juga sih', time: '1d' }
        ],
        posts: Array.from({length: 7}, (_, i) => ({
            id: `s${i}`,
            username: 'anaa.mov',
            profilePic: 'assets/first/foto-bingkai.png',
            type: 'standard',
            music: 'Wave to Earth · Seasons',
            likes: `${Math.floor(Math.random() * 5000)}`,
            isLiked: false,
            caption: `Vibes ${i+1} ✨`,
            time: `${i+2} HOURS AGO`,
            slides: [{ img: `assets/second/foto${(i % 8) + 4}.jpg`, elements: [] }]
        })),
        highlights: []
    }
};

const screens = {
    splash: document.getElementById('splash-screen'),
    login: document.getElementById('login-screen'),
    main: document.getElementById('main-app'),
    profile: document.getElementById('profile-screen'),
    dm: document.getElementById('dm-screen')
};

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (screens.splash) screens.splash.classList.add('hidden');
        if (screens.login) screens.login.classList.remove('hidden');
    }, 2000);
    initApp();
});

function initApp() {
    setupEventListeners();
    renderAllData();
}

function renderAllData() {
    renderStories();
    renderFeed();
    renderDMs();
    renderProfile();
}

function setupEventListeners() {
    const loginSwitchBtn = document.getElementById('login-switch-btn');
    if (loginSwitchBtn) {
        loginSwitchBtn.addEventListener('click', () => {
            state.currentAccount = state.currentAccount === 'pwetianaa__' ? 'anaa.mov' : 'pwetianaa__';
            const acc = accounts[state.currentAccount];
            document.getElementById('login-username').innerText = acc.username;
            document.getElementById('login-pic').src = acc.profilePic;
        });
    }

    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            state.isLoggedIn = true;
            renderAllData(); 
            showScreen('main'); // Music will trigger inside showScreen
        });
    }

    document.getElementById('nav-home').addEventListener('click', () => showScreen('main'));
    document.getElementById('nav-profile').addEventListener('click', () => {
        renderProfile();
        showScreen('profile');
    });

    const profileSwitcherTrigger = document.getElementById('profile-switcher-trigger');
    const accountSwitcherModal = document.getElementById('account-switcher-modal');
    if (profileSwitcherTrigger && accountSwitcherModal) {
        profileSwitcherTrigger.addEventListener('click', () => {
            renderAccountSwitcher();
            accountSwitcherModal.classList.remove('hidden');
            setTimeout(() => accountSwitcherModal.classList.add('active'), 10);
        });
    }
    document.getElementById('account-switcher-overlay').addEventListener('click', () => {
        accountSwitcherModal.classList.remove('active');
        setTimeout(() => accountSwitcherModal.classList.add('hidden'), 300);
    });

    document.getElementById('settings-btn').addEventListener('click', () => {
        const modal = document.getElementById('settings-modal');
        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.add('active'), 10);
    });
    document.getElementById('settings-overlay').addEventListener('click', closeSettings);
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('logout-btn').addEventListener('click', () => {
        closeSettings();
        state.isLoggedIn = false;
        showScreen('login');
        
        // Matiin musik pas logout
        const music = document.getElementById('bg-music');
        if(music) {
            music.pause();
            music.currentTime = 0;
        }
    });

    document.getElementById('dm-btn').addEventListener('click', () => showScreen('dm'));
    document.getElementById('dm-back').addEventListener('click', () => showScreen('main'));

    document.addEventListener('click', (e) => {
        if (e.target.closest('.airdrop-card') || e.target.closest('.spotify-slide-widget') || e.target.closest('.dm-camera')) {
            showAlert('', 'eitss gabisa dipencet');
        }
    });
}

function renderAccountSwitcher() {
    const container = document.getElementById('account-list-container');
    container.innerHTML = '';
    Object.keys(accounts).forEach(accKey => {
        const acc = accounts[accKey];
        const isActive = accKey === state.currentAccount;
        container.innerHTML += `
            <div class="account-switch-item ${isActive ? 'active' : ''}" onclick="switchAccount('${accKey}')">
                <img src="${acc.profilePic}">
                <span>${acc.username}</span>
                <i class="fa-solid fa-circle-check check-icon"></i>
            </div>
        `;
    });
    container.innerHTML += `
        <div class="account-switch-item" onclick="showAlert('🙈', 'Fitur Add Account belum aktif')">
            <div style="width:45px; height:45px; border-radius:50%; border:1px solid var(--border-color); display:flex; justify-content:center; align-items:center; font-size:20px;"><i class="fa-solid fa-plus"></i></div>
            <span>Add Instagram account</span>
        </div>
    `;
}

function switchAccount(accKey) {
    state.currentAccount = accKey;
    const modal = document.getElementById('account-switcher-modal');
    modal.classList.remove('active');
    setTimeout(() => modal.classList.add('hidden'), 300);
    
    renderAllData(); 
    
    // GANTI & MAININ MUSIK SESUAI AKUN
    const music = document.getElementById('bg-music');
    if (music) {
        music.src = accounts[state.currentAccount].bgm;
        if (state.currentScreen === 'main') {
            music.play().catch(e => console.log("Audio play blocked", e));
        } else {
            music.pause();
        }
    }

    showAlert('', `Switched to ${state.currentAccount}`);
}

function closeSettings() {
    const modal = document.getElementById('settings-modal');
    modal.classList.remove('active');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

function showAlert(emoji, text) {
    const alert = document.getElementById('custom-alert');
    alert.querySelector('.alert-emoji').innerText = emoji;
    alert.querySelector('.alert-text').innerText = text;
    alert.classList.add('show');
    setTimeout(() => alert.classList.remove('show'), 2000);
}

function showScreen(screenKey) {
    state.currentScreen = screenKey;
    
    Object.keys(screens).forEach(key => {
        if (screens[key]) screens[key].classList.add('hidden');
    });
    if (screens[screenKey]) screens[screenKey].classList.remove('hidden');

    document.querySelectorAll('.bottom-nav i, .bottom-nav img').forEach(el => el.classList.remove('active'));
    if (screenKey === 'main') document.getElementById('nav-home').classList.add('active');
    if (screenKey === 'profile') document.getElementById('nav-profile').classList.add('active');
    
    const bottomNav = document.getElementById('bottom-nav');
    if (screenKey === 'main' || screenKey === 'profile') {
        bottomNav.classList.remove('hidden');
    } else {
        bottomNav.classList.add('hidden');
    }

    // -- LOGIC MUSIK PLAY/PAUSE --
    const music = document.getElementById('bg-music');
    if (music && state.isLoggedIn) {
        if (screenKey === 'main') {
            // Set sumber file lagu kalo misal belum sama
            const currentBgm = accounts[state.currentAccount].bgm;
            if (music.getAttribute('src') !== currentBgm) {
                music.src = currentBgm;
            }
            music.play().catch(e => console.log("Audio play blocked", e));
        } else {
            // Pause kalo keluar dari main feed (Home)
            music.pause();
        }
    }
}

function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.body.className = `${state.theme}-mode`;
    document.querySelector('#theme-toggle i').className = state.theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
}

function renderStories() {
    const storiesBar = document.getElementById('stories-bar');
    if (!storiesBar) return;
    storiesBar.innerHTML = '';
    
    const currentStories = accounts[state.currentAccount].stories;
    currentStories.forEach(story => {
        storiesBar.innerHTML += `
            <div class="story-item ${story.isYourStory ? 'your-story' : ''}">
                <div class="story-circle-wrapper">
                    <div class="story-circle"><img src="${story.img}"></div>
                    ${story.isYourStory ? '<div class="add-story-btn"><i class="fa-solid fa-plus"></i></div>' : ''}
                    ${story.isLive ? '<div class="live-badge">LIVE</div>' : ''}
                </div>
                <span class="story-username">${story.username}</span>
            </div>
        `;
    });
}

function renderFeed() {
    const feed = document.getElementById('feed');
    if (!feed) return;
    feed.innerHTML = '';

    const allPosts = accounts[state.currentAccount].posts;

    allPosts.forEach((post, postIndex) => {
        const postEl = document.createElement('div');
        postEl.className = 'post';
        postEl.id = `post-${post.id}`;
        state.activeSlides[post.id] = 0;

        let slidesHtml = '';
        post.slides.forEach((slide, idx) => {
            let elementsHtml = '';
            
            if (post.type === 'scrapbook') {
                slide.elements.forEach(el => {
                    const styleStr = `top:${el.top}; left:${el.left}; width:${el.width || 'auto'}; height:${el.height || 'auto'}; transform: rotate(${el.rotation || '0deg'}); transition-delay: ${el.delay || '0s'};`;
                    if (el.type === 'text') {
                        elementsHtml += `<div class="element-wrapper" style="top:${el.top}; left:${el.left};"><div class="handwriting ${el.font} type-target popup-anim hover-zoom" data-text="${el.content}" style="transition-delay: ${el.delay};"></div></div>`;
                    } else if (el.type === 'video') {
                        elementsHtml += `<div class="element-wrapper" style="${styleStr}"><video src="${el.src}" autoplay loop muted playsinline class="scrapbook-video popup-anim hover-zoom" style="border-radius: ${el.borderRadius || '12px'}; transition-delay: ${el.delay};"></video></div>`;
                    } else if (el.type === 'image') {
                        elementsHtml += `<div class="element-wrapper" style="${styleStr}"><img src="${el.src}" class="scrapbook-floating-img popup-anim hover-zoom" style="transition-delay: ${el.delay};"></div>`;
                    } else if (el.type === 'airdrop') {
                        elementsHtml += `<div class="element-wrapper" style="top:${el.top}; left:${el.left};"><div class="airdrop-card popup-anim hover-zoom" style="transition-delay: ${el.delay};"><div style="display:flex; flex-direction:column; align-items:center; gap:5px;"><div style="width:30px; height:30px; background:#007aff; border-radius:50%; display:flex; justify-content:center; align-items:center; color:white; font-size:14px;"><i class="fa-solid fa-wifi"></i></div><div style="font-size:11px; font-weight:600;">AirDrop</div></div><div style="font-size:9px; text-align:center; margin:5px 0; color:#333;">"azkamsptra" would like to share a photo.</div><img src="${slide.img}" style="width:100%; height:70px; border-radius:8px; object-fit:cover;"><div style="display:flex; border-top:1px solid rgba(0,0,0,0.1); margin-top:8px; padding-top:8px;"><div style="flex:1; text-align:center; font-size:12px; color:#007aff; border-right:1px solid rgba(0,0,0,0.1);">Decline</div><div style="flex:1; text-align:center; font-size:12px; color:#007aff; font-weight:700;">Accept</div></div></div></div>`;
                    } else if (el.type === 'spotify') {
                        elementsHtml += `<div class="element-wrapper" style="top:${el.top}; left:${el.left};"><div class="spotify-slide-widget popup-anim hover-zoom" style="transition-delay: ${el.delay};"><div style="display:flex; gap:10px;"><img src="${slide.img}" style="width:45px; height:45px; border-radius:6px; object-fit:cover;"><div style="display:flex; flex-direction:column; justify-content:center;"><div style="font-size:12px; font-weight:700;">${post.music.split(' · ')[1]}</div><div style="font-size:10px; color:#b3b3b3;">${post.music.split(' · ')[0]}</div></div></div><div style="width:100%; height:4px; background:#404040; border-radius:2px; margin-top:10px; position:relative;"><div style="width:65%; height:100%; background:#1db954; border-radius:2px;"></div></div></div></div>`;
                    } else if (el.type === 'gmaps') {
                        elementsHtml += `<div class="element-wrapper" style="top:${el.top}; left:${el.left};"><div class="airdrop-card popup-anim hover-zoom" style="width:160px; padding:0; overflow:hidden; transition-delay: ${el.delay};"><div style="height:60px; background:#e8eaed; display:flex; justify-content:center; align-items:center; color:#5f6368;"><i class="fa-solid fa-map-location-dot" style="font-size:24px;"></i></div><div style="padding:10px;"><div style="font-size:12px; font-weight:600;">Favorite Spot</div><div style="font-size:10px; color:#70757a;">Open 24 hours • 4.5 ★</div><div style="margin-top:8px; height:24px; background:#1a73e8; border-radius:4px; display:flex; align-items:center; justify-content:center; color:white; font-size:10px; font-weight:600;">Directions</div></div></div></div>`;
                    }
                });
            }
            slidesHtml += `<div class="scrapbook-slide"><img src="${slide.img}" class="base-img"><div class="slide-overlay">${elementsHtml}</div></div>`;
        });

        const dotsHtml = post.slides.map((_, i) => `<div class="slide-dot ${i === 0 ? 'active' : ''}"></div>`).join('');

        postEl.innerHTML = `
            <div class="post-header">
                <div class="post-user-info">
                    <div class="post-user-img-wrapper"><img src="${post.profilePic}" class="post-user-img"></div>
                    <div class="post-user-details">
                        <span class="post-username">${post.username}</span>
                        <span class="post-music"><i class="fa-solid fa-music"></i> ${post.music}</span>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
            <div class="post-img-container">
                <div class="scrapbook-scroll-container" data-post-id="${post.id}">${slidesHtml}</div>
            </div>
            <div class="post-actions">
                <div class="post-actions-left">
                    <i class="fa-regular fa-heart like-btn"></i>
                    <i class="fa-regular fa-comment"></i>
                    <i class="fa-regular fa-paper-plane"></i>
                </div>
                ${post.slides.length > 1 ? `<div class="slide-dots">${dotsHtml}</div>` : ''}
                <i class="fa-regular fa-bookmark"></i>
            </div>
            <div class="post-likes-row">Liked by azkamsptra_ and others</div>
            <div class="post-caption"><span class="font-bold">${post.username}</span> ${post.caption}</div>
            <div class="post-time">${post.time}</div>
        `;
        feed.appendChild(postEl);

        setTimeout(() => {
            const firstSlide = postEl.querySelector('.scrapbook-slide');
            if(firstSlide) {
                firstSlide.classList.add('active-slide');
                if (post.type === 'scrapbook') startTypewriter(post.id, 0);
            }
        }, 100);

        if (post.slides.length > 1) {
            setupScrapbookAutoPlay(post.id);
            setupScrollListener(post.id, post.type);
        }
        setupLikeToggle(post.id);
    });
}

function setupScrapbookAutoPlay(postId) {
    const container = document.querySelector(`#post-${postId} .scrapbook-scroll-container`);
    if (!container) return;
    const slideCount = container.querySelectorAll('.scrapbook-slide').length;
    state.autoPlayIntervals[postId] = setInterval(() => {
        let nextSlide = (state.activeSlides[postId] + 1) % slideCount;
        scrollToSlide(postId, nextSlide);
    }, 5000); 
    container.addEventListener('touchstart', () => clearInterval(state.autoPlayIntervals[postId]));
    container.addEventListener('mousedown', () => clearInterval(state.autoPlayIntervals[postId]));
}

function scrollToSlide(postId, index) {
    const container = document.querySelector(`#post-${postId} .scrapbook-scroll-container`);
    if (!container) return;
    const slideWidth = container.offsetWidth;
    container.scrollTo({ left: index * slideWidth, behavior: 'smooth' });
}

function setupScrollListener(postId, postType) {
    const container = document.querySelector(`#post-${postId} .scrapbook-scroll-container`);
    if (!container) return;
    container.addEventListener('scroll', () => {
        const index = Math.round(container.scrollLeft / container.offsetWidth);
        if (state.activeSlides[postId] !== index) {
            state.activeSlides[postId] = index;
            const dots = document.querySelectorAll(`#post-${postId} .slide-dot`);
            dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
            const slides = document.querySelectorAll(`#post-${postId} .scrapbook-slide`);
            slides.forEach((slide, i) => slide.classList.toggle('active-slide', i === index));
            if (postType === 'scrapbook') startTypewriter(postId, index);
        }
    });
}

function setupLikeToggle(postId) {
    const postEl = document.getElementById(`post-${postId}`);
    if (!postEl) return;
    const likeBtn = postEl.querySelector('.like-btn');
    if (likeBtn) {
        likeBtn.addEventListener('click', () => {
            likeBtn.classList.toggle('fa-regular');
            likeBtn.classList.toggle('fa-solid');
            likeBtn.classList.toggle('active');
        });
    }
}

let typeTimeouts = {};
function startTypewriter(postId, slideIndex) {
    if (typeTimeouts[postId]) typeTimeouts[postId].forEach(t => clearTimeout(t));
    typeTimeouts[postId] = [];
    const slides = document.querySelectorAll(`#post-${postId} .scrapbook-slide`);
    const currentSlide = slides[slideIndex];
    if (!currentSlide) return;

    const targets = currentSlide.querySelectorAll('.type-target');
    targets.forEach(target => {
        const text = target.getAttribute('data-text');
        target.innerHTML = '';
        let i = 0;
        function type() {
            if (i < text.length) {
                target.innerHTML = text.substring(0, i + 1) + '<span class="cursor"></span>';
                i++;
                typeTimeouts[postId].push(setTimeout(type, 50));
            } else {
                target.innerHTML = text;
            }
        }
        typeTimeouts[postId].push(setTimeout(type, 500));
    });
}

function renderProfile() {
    const account = accounts[state.currentAccount];
    document.getElementById('profile-pic').src = account.profilePic;
    document.getElementById('nav-profile').src = account.profilePic;
    document.getElementById('profile-username-header').innerText = account.username;
    document.getElementById('profile-full-name').innerText = account.fullName;
    document.getElementById('profile-description').innerText = account.bio;
    document.getElementById('post-count').innerText = account.postsCount;
    document.getElementById('follower-count').innerText = account.followers;
    document.getElementById('following-count').innerText = account.following;

    const highlightsContainer = document.getElementById('highlights');
    if (highlightsContainer) {
        highlightsContainer.innerHTML = `<div class="highlight-item"><div class="highlight-circle-add"><i class="fa-solid fa-plus"></i></div><span>New</span></div>`;
        account.highlights.forEach(h => {
            highlightsContainer.innerHTML += `<div class="highlight-item"><div class="highlight-circle"><img src="${h.img}"></div><span>${h.title}</span></div>`;
        });
    }

    const grid = document.getElementById('profile-grid');
    if (grid) {
        grid.innerHTML = '';
        account.posts.filter(post => post.username === account.username).forEach(post => {
            const postEl = document.createElement('div');
            postEl.className = 'grid-photo';
            postEl.innerHTML = `<img src="${post.slides[0].img}">`;
            postEl.addEventListener('click', () => {
                showScreen('main');
                setTimeout(() => {
                    const targetPost = document.getElementById(`post-${post.id}`);
                    if (targetPost) targetPost.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            });
            grid.appendChild(postEl);
        });
    }
}

function renderDMs() {
    document.getElementById('dm-current-user').innerHTML = `${accounts[state.currentAccount].username} <i class="fa-solid fa-chevron-down text-xs"></i>`;

    const notesContainer = document.getElementById('dm-notes');
    const currentDMs = accounts[state.currentAccount].dms;

    if (notesContainer) {
        notesContainer.innerHTML = `
            <div class="dm-note-item yours">
                <div class="note-bubble">Location off 📍</div>
                <div class="note-user-img">
                    <img src="${accounts[state.currentAccount].profilePic}">
                    <div class="note-add-plus">+</div>
                </div>
                <span>Your note</span>
            </div>
        `;
        currentDMs.forEach(dm => {
            if (dm.note) {
                notesContainer.innerHTML += `
                    <div class="dm-note-item">
                        <div class="note-bubble">${dm.note}</div>
                        <div class="note-user-img"><img src="${dm.img}"></div>
                        <span>${dm.user.split(' ')[0]}</span>
                    </div>
                `;
            }
        });
    }

    const dmList = document.getElementById('dm-list');
    if (dmList) {
        dmList.innerHTML = '';
        currentDMs.forEach(dm => {
            const fontWeight = dm.isUnread ? '800' : '500';
            const fontColor = dm.isUnread ? 'var(--text-color)' : 'var(--gray-text)';
            dmList.innerHTML += `
                <div class="dm-item">
                    <img src="${dm.img}" class="dm-user-img">
                    <div class="dm-info">
                        <div class="dm-username" style="font-weight: ${fontWeight};">${dm.user}</div>
                        <div class="dm-last-msg" style="color: ${fontColor}; font-weight: ${fontWeight};">${dm.msg} · ${dm.time}</div>
                    </div>
                    ${dm.isUnread ? '<div style="width:8px; height:8px; background:var(--primary-color); border-radius:50%; margin-right:10px;"></div>' : ''}
                    <i class="fa-solid fa-camera dm-camera"></i>
                </div>
            `;
        });
    }
}
