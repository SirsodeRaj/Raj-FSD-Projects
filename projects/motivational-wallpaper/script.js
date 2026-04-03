// ============================================
// Wallpaper Data (30 Motivational Wallpapers)
// ============================================
const WALLPAPERS = [
    {
        id: 1,
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        category: "success",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        id: 2,
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        category: "courage",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
        id: 3,
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
        category: "life",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
        id: 4,
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        category: "wisdom",
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
        id: 5,
        quote: "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama",
        category: "happiness",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
        id: 6,
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
        category: "success",
        gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    },
    {
        id: 7,
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama",
        category: "happiness",
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
        id: 8,
        quote: "Get busy living or get busy dying.",
        author: "Stephen King",
        category: "life",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },
    {
        id: 9,
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
        category: "life",
        gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },
    {
        id: 10,
        quote: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins",
        category: "courage",
        gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
    },
    {
        id: 11,
        quote: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein",
        category: "wisdom",
        gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)"
    },
    {
        id: 12,
        quote: "Every moment is a fresh beginning.",
        author: "T.S. Eliot",
        category: "life",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)"
    },
    {
        id: 13,
        quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb",
        category: "wisdom",
        gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)"
    },
    {
        id: 14,
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
        category: "success",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
        id: 15,
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt",
        category: "courage",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        id: 16,
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
        category: "courage",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
        id: 17,
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
        category: "life",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
        id: 18,
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde",
        category: "life",
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
        id: 19,
        quote: "Life is really simple, but we insist on making it complicated.",
        author: "Confucius",
        category: "wisdom",
        gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    },
    {
        id: 20,
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain",
        category: "success",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
        id: 21,
        quote: "Happiness depends upon ourselves.",
        author: "Aristotle",
        category: "happiness",
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
        id: 22,
        quote: "Turn your wounds into wisdom.",
        author: "Oprah Winfrey",
        category: "wisdom",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },
    {
        id: 23,
        quote: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt",
        category: "courage",
        gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
    },
    {
        id: 24,
        quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        author: "Ralph Waldo Emerson",
        category: "courage",
        gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
    },
    {
        id: 25,
        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author: "Helen Keller",
        category: "happiness",
        gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)"
    },
    {
        id: 26,
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
        category: "wisdom",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)"
    },
    {
        id: 27,
        quote: "Life shrinks or expands in proportion to one's courage.",
        author: "Anaïs Nin",
        category: "courage",
        gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)"
    },
    {
        id: 28,
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky",
        category: "success",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        id: 29,
        quote: "Whether you think you can or you think you can't, you're right.",
        author: "Henry Ford",
        category: "success",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
        id: 30,
        quote: "The mind is everything. What you think you become.",
        author: "Buddha",
        category: "happiness",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
];

// ============================================
// State Management
// ============================================
const state = {
    wallpapers: [...WALLPAPERS],
    currentWallpaper: null,
    selectedCategory: 'all',
    favorites: JSON.parse(localStorage.getItem('wallpaperFavorites')) || []
};

// ============================================
// DOM Elements
// ============================================
const wallpaperBg = document.getElementById('wallpaperBg');
const dateBadge = document.getElementById('dateBadge');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const wallpaperGrid = document.getElementById('wallpaperGrid');
const categoryTabs = document.querySelectorAll('.category-tab');
const refreshBtn = document.getElementById('refreshBtn');
const favoriteHeaderBtn = document.getElementById('favoriteHeaderBtn');
const downloadHeaderBtn = document.getElementById('downloadHeaderBtn');
const favoritesBtn = document.getElementById('favoritesBtn');
const favoritesModal = document.getElementById('favoritesModal');
const closeFavoritesModal = document.getElementById('closeFavoritesModal');
const favoritesList = document.getElementById('favoritesList');
const noFavorites = document.getElementById('noFavorites');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// ============================================
// Initialize App
// ============================================
function init() {
    setDailyWallpaper();
    renderGallery();
    setupEventListeners();
}

// ============================================
// Daily Wallpaper (based on date)
// ============================================
function setDailyWallpaper() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateBadge.textContent = today.toLocaleDateString('en-US', options);
    
    // Use day of year to select wallpaper (ensures same wallpaper for entire day)
    const dayOfYear = getDayOfYear(today);
    const wallpaperIndex = (dayOfYear - 1) % state.wallpapers.length;
    const wallpaper = state.wallpapers[wallpaperIndex];
    
    displayWallpaper(wallpaper);
}

function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

function displayWallpaper(wallpaper) {
    state.currentWallpaper = wallpaper;
    
    // Update background
    wallpaperBg.style.background = wallpaper.gradient;
    wallpaperBg.style.opacity = '0';
    setTimeout(() => {
        wallpaperBg.style.opacity = '1';
    }, 100);
    
    // Update quote and author
    quote.textContent = `"${wallpaper.quote}"`;
    author.textContent = wallpaper.author;
    
    // Update favorite button state
    updateFavoriteButtonState();
}

// ============================================
// Refresh Wallpaper (Random)
// ============================================
function refreshWallpaper() {
    const filtered = getFilteredWallpapers();
    const randomIndex = Math.floor(Math.random() * filtered.length);
    const wallpaper = filtered[randomIndex];
    
    displayWallpaper(wallpaper);
    showToast('New wallpaper loaded! ✨');
}

// ============================================
// Filter Wallpapers
// ============================================
function getFilteredWallpapers() {
    if (state.selectedCategory === 'all') {
        return state.wallpapers;
    }
    return state.wallpapers.filter(w => w.category === state.selectedCategory);
}

// ============================================
// Render Gallery
// ============================================
function renderGallery() {
    wallpaperGrid.innerHTML = '';
    const filtered = getFilteredWallpapers();
    
    filtered.forEach(wallpaper => {
        const card = createWallpaperCard(wallpaper);
        wallpaperGrid.appendChild(card);
    });
}

function createWallpaperCard(wallpaper) {
    const card = document.createElement('div');
    card.className = 'wallpaper-card';
    card.setAttribute('data-id', wallpaper.id);
    
    const isFavorite = state.favorites.includes(wallpaper.id);
    
    card.innerHTML = `
        <div class="wallpaper-card-bg" style="background: ${wallpaper.gradient}"></div>
        <span class="wallpaper-card-category">${wallpaper.category}</span>
        <div class="wallpaper-card-overlay">
            <p class="wallpaper-card-quote">${wallpaper.quote}</p>
            <p class="wallpaper-card-author">— ${wallpaper.author}</p>
        </div>
        <div class="wallpaper-card-actions">
            <button class="card-action-btn ${isFavorite ? 'favorite-active' : ''}" data-id="${wallpaper.id}" aria-label="Toggle favorite">
                ${isFavorite ? '❤️' : '🤍'}
            </button>
            <button class="card-action-btn download-btn" data-id="${wallpaper.id}" aria-label="Download">
                💾
            </button>
        </div>
    `;
    
    // Click card to set as main wallpaper
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.card-action-btn')) {
            displayWallpaper(wallpaper);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    // Favorite button
    const favBtn = card.querySelector('.card-action-btn:not(.download-btn)');
    favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(wallpaper.id);
        favBtn.classList.toggle('favorite-active');
        favBtn.innerHTML = favBtn.classList.contains('favorite-active') ? '❤️' : '🤍';
    });
    
    // Download button
    const downloadBtn = card.querySelector('.download-btn');
    downloadBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        downloadWallpaper(wallpaper);
    });
    
    return card;
}

// ============================================
// Favorites Management
// ============================================
function toggleFavorite(wallpaperId) {
    const index = state.favorites.indexOf(wallpaperId);
    
    if (index > -1) {
        state.favorites.splice(index, 1);
        showToast('Removed from favorites');
    } else {
        state.favorites.push(wallpaperId);
        showToast('Added to favorites ❤️');
    }
    
    localStorage.setItem('wallpaperFavorites', JSON.stringify(state.favorites));
    updateFavoriteButtonState();
    renderGallery();
}

function updateFavoriteButtonState() {
    if (!state.currentWallpaper) return;
    
    const isFavorite = state.favorites.includes(state.currentWallpaper.id);
    favoriteHeaderBtn.textContent = isFavorite ? '❤️' : '🤍';
    favoriteHeaderBtn.classList.toggle('active', isFavorite);
}

function showFavorites() {
    const favoriteWallpapers = state.wallpapers.filter(w => 
        state.favorites.includes(w.id)
    );
    
    if (favoriteWallpapers.length === 0) {
        noFavorites.style.display = 'block';
        favoritesList.innerHTML = '';
    } else {
        noFavorites.style.display = 'none';
        favoritesList.innerHTML = '';
        
        favoriteWallpapers.forEach(wallpaper => {
            const favCard = createFavoriteCard(wallpaper);
            favoritesList.appendChild(favCard);
        });
    }
    
    favoritesModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function createFavoriteCard(wallpaper) {
    const card = document.createElement('div');
    card.className = 'fav-card';
    
    card.innerHTML = `
        <div class="fav-card-bg" style="background: ${wallpaper.gradient}"></div>
        <div class="fav-card-overlay">
            <p class="fav-card-quote">${wallpaper.quote}</p>
        </div>
        <button class="fav-remove-btn" data-id="${wallpaper.id}" aria-label="Remove from favorites">
            ✕
        </button>
    `;
    
    // Click to set as main wallpaper
    card.addEventListener('click', () => {
        displayWallpaper(wallpaper);
        closeFavoritesModalFunc();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Remove from favorites
    const removeBtn = card.querySelector('.fav-remove-btn');
    removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(wallpaper.id);
        showFavorites(); // Re-render favorites
        renderGallery();
    });
    
    return card;
}

function closeFavoritesModalFunc() {
    favoritesModal.style.display = 'none';
    document.body.style.overflow = '';
}

// ============================================
// Download Wallpaper
// ============================================
function downloadWallpaper(wallpaper) {
    // Create a canvas to generate the wallpaper image
    const canvas = document.createElement('canvas');
    canvas.width = 1920;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');
    
    // Draw gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    const colors = extractColors(wallpaper.gradient);
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(1, colors[1]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw quote
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Quote text
    ctx.font = 'bold 48px Arial, sans-serif';
    wrapText(ctx, `"${wallpaper.quote}"`, canvas.width / 2, canvas.height / 2 - 50, canvas.width - 200, 60);
    
    // Author
    ctx.font = 'italic 32px Arial, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillText(`— ${wallpaper.author}`, canvas.width / 2, canvas.height / 2 + 100);
    
    // Download
    const link = document.createElement('a');
    link.download = `wallpaper-${wallpaper.id}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    
    showToast('Wallpaper downloaded! 💾');
}

function extractColors(gradient) {
    // Extract color stops from gradient string
    const matches = gradient.match(/#[a-fA-F0-9]{6}/g);
    return matches || ['#667eea', '#764ba2'];
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    let lines = [];
    
    for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && i > 0) {
            lines.push(line);
            line = words[i] + ' ';
        } else {
            line = testLine;
        }
    }
    lines.push(line);
    
    const startY = y - ((lines.length - 1) * lineHeight) / 2;
    lines.forEach((line, index) => {
        ctx.fillText(line.trim(), x, startY + (index * lineHeight));
    });
}

// ============================================
// Toast Notification
// ============================================
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
    // Category tabs
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            state.selectedCategory = tab.dataset.category;
            renderGallery();
        });
    });
    
    // Refresh button
    refreshBtn.addEventListener('click', refreshWallpaper);
    
    // Favorite button
    favoriteHeaderBtn.addEventListener('click', () => {
        if (state.currentWallpaper) {
            toggleFavorite(state.currentWallpaper.id);
        }
    });
    
    // Download button
    downloadHeaderBtn.addEventListener('click', () => {
        if (state.currentWallpaper) {
            downloadWallpaper(state.currentWallpaper);
        }
    });
    
    // Favorites button
    favoritesBtn.addEventListener('click', showFavorites);
    
    // Close favorites modal
    closeFavoritesModal.addEventListener('click', closeFavoritesModalFunc);
    favoritesModal.querySelector('.modal-backdrop').addEventListener('click', closeFavoritesModalFunc);
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && favoritesModal.style.display === 'flex') {
            closeFavoritesModalFunc();
        }
    });
}

// ============================================
// Start the App
// ============================================
init();
