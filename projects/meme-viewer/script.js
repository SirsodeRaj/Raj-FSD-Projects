// ============================================
// Meme Data (Static Collection)
// ============================================
const MEMES = [
    {
        id: 1,
        title: "Distracted Boyfriend",
        category: "classic",
        description: "A man looking at another woman while his girlfriend looks on in disapproval. Used to represent temptation or shifting interests.",
        image: "https://i.imgflip.com/1ur9b0.jpg",
        views: 1250000
    },
    {
        id: 2,
        title: "Drake Hotline Bling",
        category: "classic",
        description: "Drake disapproving of something in the first panel, then approving of something else in the second panel. Perfect for comparisons.",
        image: "https://i.imgflip.com/30b1gx.jpg",
        views: 1100000
    },
    {
        id: 3,
        title: "Two Buttons",
        category: "reactions",
        description: "A person sweating while trying to decide between two buttons. Represents difficult choices between similar options.",
        image: "https://i.imgflip.com/1g8my4.jpg",
        views: 890000
    },
    {
        id: 4,
        title: "Change My Mind",
        category: "classic",
        description: "Steven Crowder sitting at a table with a sign. Used to present a controversial opinion and challenge others to disagree.",
        image: "https://i.imgflip.com/24y43o.jpg",
        views: 950000
    },
    {
        id: 5,
        title: "Is This a Pigeon?",
        category: "classic",
        description: "An anime character misidentifying a butterfly as a pigeon. Used for people who are completely wrong about something obvious.",
        image: "https://i.imgflip.com/1c1uej.jpg",
        views: 780000
    },
    {
        id: 6,
        title: "Surprised Pikachu",
        category: "animals",
        description: "Pikachu with a shocked expression. Used when someone is surprised by consequences that should have been obvious.",
        image: "https://i.imgflip.com/2kbn1e.jpg",
        views: 1350000
    },
    {
        id: 7,
        title: "This Is Fine",
        category: "reactions",
        description: "A dog sitting in a burning room saying everything is fine. Represents denial or acceptance of a disastrous situation.",
        image: "https://i.imgflip.com/wxica.jpg",
        views: 920000
    },
    {
        id: 8,
        title: "Expanding Brain",
        category: "classic",
        description: "Four levels of an expanding glowing brain. Used to show progressively better or more enlightened ideas.",
        image: "https://i.imgflip.com/1j5wwq.jpg",
        views: 870000
    },
    {
        id: 9,
        title: "They're The Same Picture",
        category: "classic",
        description: "A woman presenting two pictures as being the same. Used to compare two things that appear different but have similarities.",
        image: "https://i.imgflip.com/3lmrig.jpg",
        views: 760000
    },
    {
        id: 10,
        title: "Always Has Been",
        category: "classic",
        description: "Two astronauts in space with a gun, revealing a truth about Earth. Used to expose an obvious fact that was always true.",
        image: "https://i.imgflip.com/46e43q.jpg",
        views: 1050000
    },
    {
        id: 11,
        title: "Cat No Banana",
        category: "animals",
        description: "A cat looking confused at a banana. Used to express confusion or lack of understanding about something.",
        image: "https://i.imgflip.com/1bij.jpg",
        views: 650000
    },
    {
        id: 12,
        title: "Success Kid",
        category: "motivational",
        description: "A baby making a fist pump gesture. Used to celebrate small victories or successes in life.",
        image: "https://i.imgflip.com/1bhk.jpg",
        views: 880000
    },
    {
        id: 13,
        title: "One Does Not Simply",
        category: "classic",
        description: "Boromir from Lord of the Rings. Used to state that something is not as easy as it appears.",
        image: "https://i.imgflip.com/1bij.jpg",
        views: 1020000
    },
    {
        id: 14,
        title: "Grumpy Cat",
        category: "animals",
        description: "The famous grumpy-looking cat. Used to express displeasure, negativity, or sarcastic comments.",
        image: "https://i.imgflip.com/gk5el.jpg",
        views: 940000
    },
    {
        id: 15,
        title: "Roll Safe",
        category: "classic",
        description: "A man tapping his head with a knowing smile. Used for clever (but often flawed) logic or life hacks.",
        image: "https://i.imgflip.com/1h7in3.jpg",
        views: 810000
    },
    {
        id: 16,
        title: "Hide the Pain Harold",
        category: "reactions",
        description: "An elderly man with a forced smile hiding inner pain. Represents suppressing frustration or discomfort.",
        image: "https://i.imgflip.com/1jpgx5.jpg",
        views: 970000
    },
    {
        id: 17,
        title: "Programmer Fights",
        category: "programming",
        description: "A programmer dealing with coding challenges and bugs. Relatable content for developers.",
        image: "https://i.imgflip.com/3bcrpa.jpg",
        views: 720000
    },
    {
        id: 18,
        title: "CSS Positioning",
        category: "programming",
        description: "The struggle of positioning elements with CSS. Every web developer's nightmare.",
        image: "https://i.imgflip.com/2fm2o.jpg",
        views: 690000
    },
    {
        id: 19,
        title: "Code Works Mystery",
        category: "programming",
        description: "When your code works but you don't know why. The confusion of accidental success.",
        image: "https://i.imgflip.com/30b4qx.jpg",
        views: 850000
    },
    {
        id: 20,
        title: "It Works On My Machine",
        category: "programming",
        description: "The classic developer excuse when code breaks in production. The universal truth of development.",
        image: "https://i.imgflip.com/1otk96.jpg",
        views: 780000
    },
    {
        id: 21,
        title: "Dog With Fire",
        category: "animals",
        description: "A dog sitting calmly while everything burns around it. Zen mode activated in chaos.",
        image: "https://i.imgflip.com/1c1uej.jpg",
        views: 860000
    },
    {
        id: 22,
        title: "But That's None of My Business",
        category: "classic",
        description: "Kermit the Frog sipping tea. Used to make a pointed observation while pretending to stay out of it.",
        image: "https://i.imgflip.com/28j2ve.jpg",
        views: 910000
    },
    {
        id: 23,
        title: "Am I The Only One",
        category: "reactions",
        description: "A person in a serious tone asking if they're the only one who thinks something. Used for controversial opinions.",
        image: "https://i.imgflip.com/1c1uej.jpg",
        views: 740000
    },
    {
        id: 24,
        title: "You Know What Really Grinds My Gears",
        category: "reactions",
        description: "Family Guy character expressing annoyance. Used to share pet peeves or frustrations.",
        image: "https://i.imgflip.com/1c1uej.jpg",
        views: 680000
    },
    {
        id: 25,
        title: "Believe In Yourself",
        category: "motivational",
        description: "An inspirational meme encouraging self-confidence and determination. Keep pushing forward!",
        image: "https://i.imgflip.com/1c1uej.jpg",
        views: 920000
    },
    {
        id: 26,
        title: "Hustle Culture",
        category: "motivational",
        description: "The grind never stops. Used ironically to comment on work culture or seriously for motivation.",
        image: "https://i.imgflip.com/1c1uej.jpg",
        views: 750000
    },
    {
        id: 27,
        title: "Debugging Life",
        category: "programming",
        description: "When you spend more time debugging than coding. The eternal struggle of software development.",
        image: "https://i.imgflip.com/2fm2o.jpg",
        views: 810000
    },
    {
        id: 28,
        title: "Copy Paste Stack Overflow",
        category: "programming",
        description: "The reality of modern programming. Most code comes from Stack Overflow answers.",
        image: "https://i.imgflip.com/3bcrpa.jpg",
        views: 950000
    },
    {
        id: 29,
        title: "Cat Typing",
        category: "animals",
        description: "A cat furiously typing on a keyboard. Used to represent frantic work or coding sessions.",
        image: "https://i.imgflip.com/1c1uej.jpg",
        views: 720000
    },
    {
        id: 30,
        title: "Monday Motivation",
        category: "motivational",
        description: "Start your week with positive energy and determination. Make it a great Monday!",
        image: "https://i.imgflip.com/1c1uej.jpg",
        views: 830000
    }
];

// ============================================
// State Management
// ============================================
const state = {
    memes: [...MEMES],
    filteredMemes: [...MEMES],
    currentPage: 1,
    memesPerPage: 12,
    favorites: JSON.parse(localStorage.getItem('memeFavorites')) || [],
    searchQuery: '',
    selectedCategory: 'all',
    currentMeme: null
};

// ============================================
// DOM Elements
// ============================================
const gallery = document.getElementById('memeGallery');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageInfo = document.getElementById('pageInfo');
const noResults = document.getElementById('noResults');
const modal = document.getElementById('memeModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const favoriteBtn = document.getElementById('favoriteBtn');
const copyLinkBtn = document.getElementById('copyLinkBtn');
const downloadBtn = document.getElementById('downloadBtn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const totalMemesEl = document.getElementById('totalMemes');
const shownMemesEl = document.getElementById('shownMemes');
const favoritesEl = document.getElementById('favorites');

// ============================================
// Initialize App
// ============================================
function init() {
    filterMemes();
    updateStats();
    renderGallery();
    setupEventListeners();
}

// ============================================
// Filter & Search
// ============================================
function filterMemes() {
    state.filteredMemes = state.memes.filter(meme => {
        const matchesSearch = state.searchQuery === '' || 
            meme.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            meme.description.toLowerCase().includes(state.searchQuery.toLowerCase());
        
        const matchesCategory = state.selectedCategory === 'all' || 
            meme.category === state.selectedCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    state.currentPage = 1;
    updateStats();
    renderGallery();
}

// ============================================
// Render Gallery
// ============================================
function renderGallery() {
    gallery.innerHTML = '';
    
    const startIndex = (state.currentPage - 1) * state.memesPerPage;
    const endIndex = startIndex + state.memesPerPage;
    const memesToShow = state.filteredMemes.slice(startIndex, endIndex);
    
    if (memesToShow.length === 0) {
        noResults.style.display = 'block';
        document.getElementById('pagination').style.display = 'none';
        return;
    }
    
    noResults.style.display = 'none';
    document.getElementById('pagination').style.display = 'flex';
    
    memesToShow.forEach(meme => {
        const card = createMemeCard(meme);
        gallery.appendChild(card);
    });
    
    updatePagination();
}

// ============================================
// Create Meme Card
// ============================================
function createMemeCard(meme) {
    const card = document.createElement('div');
    card.className = 'meme-card';
    card.setAttribute('data-id', meme.id);
    
    const isFavorite = state.favorites.includes(meme.id);
    
    card.innerHTML = `
        <img class="meme-card-image" src="${meme.image}" alt="${meme.title}" loading="lazy">
        <div class="meme-card-content">
            <h3 class="meme-card-title">${meme.title}</h3>
            <span class="meme-card-category">${meme.category}</span>
        </div>
        <div class="meme-card-footer">
            <span class="meme-views">👁️ ${formatViews(meme.views)}</span>
            <button class="meme-favorite-btn ${isFavorite ? 'active' : ''}" data-id="${meme.id}" aria-label="Toggle favorite">
                ${isFavorite ? '❤️' : '🤍'}
            </button>
        </div>
    `;
    
    // Click card to open modal
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.meme-favorite-btn')) {
            openModal(meme);
        }
    });
    
    // Favorite button
    const favBtn = card.querySelector('.meme-favorite-btn');
    favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(meme.id);
        favBtn.classList.toggle('active');
        favBtn.innerHTML = favBtn.classList.contains('active') ? '❤️' : '🤍';
    });
    
    return card;
}

// ============================================
// Modal Functions
// ============================================
function openModal(meme) {
    state.currentMeme = meme;
    
    modalTitle.textContent = meme.title;
    modalCategory.textContent = meme.category;
    modalImage.src = meme.image;
    modalImage.alt = meme.title;
    modalDescription.textContent = meme.description;
    
    const isFavorite = state.favorites.includes(meme.id);
    updateFavoriteButton(isFavorite);
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModalFunc() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    state.currentMeme = null;
}

function updateFavoriteButton(isFavorite) {
    const btnText = favoriteBtn.querySelector('.btn-text');
    const btnIcon = favoriteBtn.querySelector('.btn-icon');
    
    if (isFavorite) {
        btnIcon.textContent = '💔';
        btnText.textContent = 'Remove from Favorites';
        favoriteBtn.classList.add('active');
    } else {
        btnIcon.textContent = '❤️';
        btnText.textContent = 'Add to Favorites';
        favoriteBtn.classList.remove('active');
    }
}

// ============================================
// Favorites Management
// ============================================
function toggleFavorite(memeId) {
    const index = state.favorites.indexOf(memeId);
    
    if (index > -1) {
        state.favorites.splice(index, 1);
        showToast('Removed from favorites');
    } else {
        state.favorites.push(memeId);
        showToast('Added to favorites ❤️');
    }
    
    localStorage.setItem('memeFavorites', JSON.stringify(state.favorites));
    updateStats();
}

// ============================================
// Pagination
// ============================================
function updatePagination() {
    const totalPages = Math.ceil(state.filteredMemes.length / state.memesPerPage);
    
    pageInfo.textContent = `Page ${state.currentPage} of ${totalPages}`;
    prevBtn.disabled = state.currentPage === 1;
    nextBtn.disabled = state.currentPage === totalPages;
}

function goToPage(page) {
    const totalPages = Math.ceil(state.filteredMemes.length / state.memesPerPage);
    
    if (page < 1 || page > totalPages) return;
    
    state.currentPage = page;
    renderGallery();
    gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============================================
// Stats
// ============================================
function updateStats() {
    totalMemesEl.textContent = state.memes.length;
    shownMemesEl.textContent = state.filteredMemes.length;
    favoritesEl.textContent = state.favorites.length;
}

// ============================================
// Utility Functions
// ============================================
function formatViews(views) {
    if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + 'M';
    } else if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'K';
    }
    return views.toString();
}

function showToast(message) {
    toastMessage.textContent = message;
    toast.style.display = 'block';
    
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// ============================================
// Event Listeners
// ============================================
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        filterMemes();
    });
    
    // Category filter
    categoryFilter.addEventListener('change', (e) => {
        state.selectedCategory = e.target.value;
        filterMemes();
    });
    
    // Pagination
    prevBtn.addEventListener('click', () => goToPage(state.currentPage - 1));
    nextBtn.addEventListener('click', () => goToPage(state.currentPage + 1));
    
    // Modal
    closeModal.addEventListener('click', closeModalFunc);
    modal.querySelector('.modal-backdrop').addEventListener('click', closeModalFunc);
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModalFunc();
        }
    });
    
    // Modal favorite button
    favoriteBtn.addEventListener('click', () => {
        if (state.currentMeme) {
            toggleFavorite(state.currentMeme.id);
            const isFavorite = state.favorites.includes(state.currentMeme.id);
            updateFavoriteButton(isFavorite);
            renderGallery();
        }
    });
    
    // Copy link button
    copyLinkBtn.addEventListener('click', () => {
        if (state.currentMeme) {
            navigator.clipboard.writeText(state.currentMeme.image).then(() => {
                showToast('Link copied to clipboard! 🔗');
            }).catch(() => {
                showToast('Failed to copy link');
            });
        }
    });
    
    // Download button
    downloadBtn.addEventListener('click', () => {
        if (state.currentMeme) {
            const link = document.createElement('a');
            link.href = state.currentMeme.image;
            link.download = `${state.currentMeme.title.replace(/\s+/g, '-')}.jpg`;
            link.target = '_blank';
            link.click();
            showToast('Download started! 💾');
        }
    });
}

// ============================================
// Start the App
// ============================================
init();
