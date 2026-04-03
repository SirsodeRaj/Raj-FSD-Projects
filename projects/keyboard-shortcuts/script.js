// ============================================
// Keyboard Shortcuts Data
// ============================================
const SHORTCUTS_DATA = {
    windows: [
        {
            category: "general",
            icon: "💻",
            shortcuts: [
                { keys: ["Ctrl", "C"], description: "Copy selected item" },
                { keys: ["Ctrl", "X"], description: "Cut selected item" },
                { keys: ["Ctrl", "V"], description: "Paste copied item" },
                { keys: ["Ctrl", "Z"], description: "Undo an action" },
                { keys: ["Ctrl", "Y"], description: "Redo an action" },
                { keys: ["Ctrl", "A"], description: "Select all items" },
                { keys: ["Ctrl", "S"], description: "Save current file" },
                { keys: ["Ctrl", "P"], description: "Print current page" },
                { keys: ["Ctrl", "F"], description: "Find text in document" },
                { keys: ["Ctrl", "N"], description: "Open new window" },
                { keys: ["Alt", "Tab"], description: "Switch between apps" },
                { keys: ["Alt", "F4"], description: "Close active app" },
                { keys: ["Win", "D"], description: "Show/hide desktop" },
                { keys: ["Win", "E"], description: "Open File Explorer" },
                { keys: ["Win", "L"], description: "Lock your PC" },
                { keys: ["Win", "R"], description: "Open Run dialog" }
            ]
        },
        {
            category: "navigation",
            icon: "🧭",
            shortcuts: [
                { keys: ["Win"], description: "Open Start menu" },
                { keys: ["Win", "A"], description: "Open Quick Settings" },
                { keys: ["Win", "S"], description: "Open Search" },
                { keys: ["Win", "I"], description: "Open Settings" },
                { keys: ["Win", "X"], description: "Open Quick Link menu" },
                { keys: ["Win", "Tab"], description: "Open Task View" },
                { keys: ["Win", "Number"], description: "Open taskbar app at position" },
                { keys: ["Alt", "Esc"], description: "Cycle through windows" },
                { keys: ["Ctrl", "Alt", "Tab"], description: "View open apps (sticky)" },
                { keys: ["Win", "M"], description: "Minimize all windows" }
            ]
        },
        {
            category: "screenshot",
            icon: "📸",
            shortcuts: [
                { keys: ["PrtScn"], description: "Screenshot to clipboard" },
                { keys: ["Win", "PrtScn"], description: "Screenshot to file" },
                { keys: ["Win", "Shift", "S"], description: "Snipping tool (select area)" },
                { keys: ["Win", "G"], description: "Open Xbox Game Bar" },
                { keys: ["Win", "Alt", "R"], description: "Record screen (Game Bar)" },
                { keys: ["Alt", "PrtScn"], description: "Screenshot active window" },
                { keys: ["Fn", "Win", "Space"], description: "Screenshot on some devices" }
            ]
        },
        {
            category: "browser",
            icon: "🌐",
            shortcuts: [
                { keys: ["Ctrl", "T"], description: "Open new tab" },
                { keys: ["Ctrl", "W"], description: "Close current tab" },
                { keys: ["Ctrl", "Shift", "T"], description: "Reopen closed tab" },
                { keys: ["Ctrl", "Tab"], description: "Switch to next tab" },
                { keys: ["Ctrl", "Shift", "Tab"], description: "Switch to previous tab" },
                { keys: ["Ctrl", "L"], description: "Select address bar" },
                { keys: ["Ctrl", "H"], description: "Open history" },
                { keys: ["Ctrl", "J"], description: "Open downloads" },
                { keys: ["Ctrl", "Shift", "N"], description: "Open incognito window" },
                { keys: ["Ctrl", "D"], description: "Bookmark current page" },
                { keys: ["Ctrl", "Plus"], description: "Zoom in" },
                { keys: ["Ctrl", "Minus"], description: "Zoom out" },
                { keys: ["Ctrl", "0"], description: "Reset zoom" },
                { keys: ["F5"], description: "Refresh page" },
                { keys: ["Ctrl", "F5"], description: "Hard refresh (clear cache)" }
            ]
        },
        {
            category: "text-editing",
            icon: "✏️",
            shortcuts: [
                { keys: ["Ctrl", "B"], description: "Bold text" },
                { keys: ["Ctrl", "I"], description: "Italicize text" },
                { keys: ["Ctrl", "U"], description: "Underline text" },
                { keys: ["Ctrl", "Shift", "C"], description: "Copy formatting" },
                { keys: ["Ctrl", "Shift", "V"], description: "Paste without formatting" },
                { keys: ["Ctrl", "Shift", "L"], description: "Create bullet list" },
                { keys: ["Ctrl", "E"], description: "Center align text" },
                { keys: ["Ctrl", "L"], description: "Left align text" },
                { keys: ["Ctrl", "R"], description: "Right align text" },
                { keys: ["Ctrl", "Home"], description: "Go to beginning of document" },
                { keys: ["Ctrl", "End"], description: "Go to end of document" },
                { keys: ["Ctrl", "Backspace"], description: "Delete entire word" },
                { keys: ["Ctrl", "Delete"], description: "Delete word to the right" },
                { keys: ["Shift", "Arrow"], description: "Select text" },
                { keys: ["Ctrl", "Arrow"], description: "Move by word" }
            ]
        },
        {
            category: "file-management",
            icon: "📁",
            shortcuts: [
                { keys: ["Win", "E"], description: "Open File Explorer" },
                { keys: ["Ctrl", "Shift", "N"], description: "Create new folder" },
                { keys: ["F2"], description: "Rename selected item" },
                { keys: ["Delete"], description: "Move to Recycle Bin" },
                { keys: ["Shift", "Delete"], description: "Permanent delete" },
                { keys: ["Ctrl", "Shift", "Esc"], description: "Open Task Manager" },
                { keys: ["Alt", "Enter"], description: "View file properties" },
                { keys: ["F5"], description: "Refresh view" },
                { keys: ["Backspace"], description: "Go up one folder" },
                { keys: ["Alt", "Up Arrow"], description: "Go up one folder" }
            ]
        },
        {
            category: "accessibility",
            icon: "♿",
            shortcuts: [
                { keys: ["Win", "Plus"], description: "Open Magnifier (zoom in)" },
                { keys: ["Win", "Minus"], description: "Magnifier (zoom out)" },
                { keys: ["Win", "Esc"], description: "Close Magnifier" },
                { keys: ["Ctrl", "Win", "Enter"], description: "Open Narrator" },
                { keys: ["Win", "U"], description: "Open Accessibility settings" },
                { keys: ["Left", "Right", "Shift"], description: "Sticky Keys (press 5x)" },
                { keys: ["Win", "Ctrl", "Enter"], description: "Open Narrator" }
            ]
        },
        {
            category: "virtual-desktops",
            icon: "🖥️",
            shortcuts: [
                { keys: ["Win", "Tab"], description: "Open Task View" },
                { keys: ["Win", "Ctrl", "D"], description: "Create new desktop" },
                { keys: ["Win", "Ctrl", "Left"], description: "Switch to left desktop" },
                { keys: ["Win", "Ctrl", "Right"], description: "Switch to right desktop" },
                { keys: ["Win", "Ctrl", "F4"], description: "Close current desktop" }
            ]
        }
    ],
    mac: [
        {
            category: "general",
            icon: "💻",
            shortcuts: [
                { keys: ["⌘", "C"], description: "Copy selected item" },
                { keys: ["⌘", "X"], description: "Cut selected item" },
                { keys: ["⌘", "V"], description: "Paste copied item" },
                { keys: ["⌘", "Z"], description: "Undo an action" },
                { keys: ["⌘", "Shift", "Z"], description: "Redo an action" },
                { keys: ["⌘", "A"], description: "Select all items" },
                { keys: ["⌘", "S"], description: "Save current file" },
                { keys: ["⌘", "P"], description: "Print current page" },
                { keys: ["⌘", "F"], description: "Find text in document" },
                { keys: ["⌘", "N"], description: "Open new window" },
                { keys: ["⌘", "Q"], description: "Quit active app" },
                { keys: ["⌘", "W"], description: "Close active window" },
                { keys: ["⌘", "H"], description: "Hide active app" },
                { keys: ["⌘", "M"], description: "Minimize window" },
                { keys: ["⌘", "Space"], description: "Open Spotlight Search" },
                { keys: ["Ctrl", "Up Arrow"], description: "Open Mission Control" }
            ]
        },
        {
            category: "navigation",
            icon: "🧭",
            shortcuts: [
                { keys: ["⌘", "Tab"], description: "Switch between apps" },
                { keys: ["⌘", "`"], description: "Cycle windows of same app" },
                { keys: ["⌘", "Space"], description: "Open Spotlight" },
                { keys: ["⌘", "Option", "Esc"], description: "Force quit menu" },
                { keys: ["⌘", "Control", "Q"], description: "Lock screen" },
                { keys: ["F3"], description: "Show all windows" },
                { keys: ["⌘", "Up Arrow"], description: "Open parent folder" },
                { keys: ["⌘", "Down Arrow"], description: "Open selected file" },
                { keys: ["⌘", "Left Arrow"], description: "Go to beginning of line" },
                { keys: ["⌘", "Right Arrow"], description: "Go to end of line" }
            ]
        },
        {
            category: "screenshot",
            icon: "📸",
            shortcuts: [
                { keys: ["⌘", "Shift", "3"], description: "Screenshot entire screen" },
                { keys: ["⌘", "Shift", "4"], description: "Screenshot selected area" },
                { keys: ["⌘", "Shift", "5"], description: "Screenshot toolbar options" },
                { keys: ["⌘", "Shift", "6"], description: "Screenshot Touch Bar" },
                { keys: ["⌘", "Shift", "4", "Space"], description: "Screenshot specific window" }
            ]
        },
        {
            category: "browser",
            icon: "🌐",
            shortcuts: [
                { keys: ["⌘", "T"], description: "Open new tab" },
                { keys: ["⌘", "W"], description: "Close current tab" },
                { keys: ["⌘", "Shift", "T"], description: "Reopen closed tab" },
                { keys: ["⌘", "Tab"], description: "Switch to next tab" },
                { keys: ["⌘", "Option", "Left"], description: "Switch to previous tab" },
                { keys: ["⌘", "L"], description: "Select address bar" },
                { keys: ["⌘", "Y"], description: "Open history" },
                { keys: ["⌘", "Option", "L"], description: "Open downloads" },
                { keys: ["⌘", "Shift", "N"], description: "Open new window" },
                { keys: ["⌘", "D"], description: "Bookmark current page" },
                { keys: ["⌘", "Plus"], description: "Zoom in" },
                { keys: ["⌘", "Minus"], description: "Zoom out" },
                { keys: ["⌘", "0"], description: "Reset zoom" },
                { keys: ["⌘", "R"], description: "Refresh page" },
                { keys: ["⌘", "Shift", "R"], description: "Hard refresh" }
            ]
        },
        {
            category: "text-editing",
            icon: "✏️",
            shortcuts: [
                { keys: ["⌘", "B"], description: "Bold text" },
                { keys: ["⌘", "I"], description: "Italicize text" },
                { keys: ["⌘", "U"], description: "Underline text" },
                { keys: ["⌘", "Option", "C"], description: "Copy formatting" },
                { keys: ["⌘", "Option", "V"], description: "Paste with formatting" },
                { keys: ["⌘", "Shift", "V"], description: "Paste and match style" },
                { keys: ["⌘", "E"], description: "Center align text" },
                { keys: ["⌘", "Left Arrow"], description: "Go to beginning of line" },
                { keys: ["⌘", "Right Arrow"], description: "Go to end of line" },
                { keys: ["⌘", "Up Arrow"], description: "Go to beginning of doc" },
                { keys: ["⌘", "Down Arrow"], description: "Go to end of doc" },
                { keys: ["Option", "Delete"], description: "Delete entire word" },
                { keys: ["Shift", "Arrow"], description: "Select text" },
                { keys: ["Option", "Arrow"], description: "Move by word" }
            ]
        },
        {
            category: "file-management",
            icon: "📁",
            shortcuts: [
                { keys: ["⌘", "Shift", "N"], description: "Create new folder" },
                { keys: ["Return"], description: "Rename selected item" },
                { keys: ["⌘", "Delete"], description: "Move to Trash" },
                { keys: ["⌘", "Shift", "Delete"], description: "Empty Trash" },
                { keys: ["⌘", "Option", "Esc"], description: "Force quit apps" },
                { keys: ["⌘", "I"], description: "View file info" },
                { keys: ["⌘", "Shift", "C"], description: "Open Computer folder" },
                { keys: ["⌘", "Shift", "D"], description: "Open Desktop folder" },
                { keys: ["⌘", "Shift", "H"], description: "Open Home folder" }
            ]
        },
        {
            category: "accessibility",
            icon: "♿",
            shortcuts: [
                { keys: ["⌘", "Option", "F5"], description: "Accessibility options" },
                { keys: ["⌘", "F5"], description: "Toggle VoiceOver" },
                { keys: ["Option", "⌘", "8"], description: "Toggle Zoom" },
                { keys: ["Option", "⌘", "Plus"], description: "Zoom in" },
                { keys: ["Option", "⌘", "Minus"], description: "Zoom out" },
                { keys: ["Control", "F7"], description: "Toggle Full Keyboard Access" }
            ]
        },
        {
            category: "mission-control",
            icon: "🖥️",
            shortcuts: [
                { keys: ["Control", "Up Arrow"], description: "Open Mission Control" },
                { keys: ["Control", "Down Arrow"], description: "Show app windows" },
                { keys: ["Control", "Left Arrow"], description: "Switch to left desktop" },
                { keys: ["Control", "Right Arrow"], description: "Switch to right desktop" },
                { keys: ["⌘", "F3"], description: "Show desktop" },
                { keys: ["F3"], description: "Mission Control" }
            ]
        }
    ]
};

// ============================================
// State Management
// ============================================
const state = {
    currentOS: 'windows',
    selectedCategory: 'all',
    searchQuery: '',
    favorites: JSON.parse(localStorage.getItem('shortcutFavorites')) || []
};

// ============================================
// DOM Elements
// ============================================
const searchInput = document.getElementById('searchInput');
const osButtons = document.querySelectorAll('.os-btn');
const categoryTabs = document.getElementById('categoryTabs');
const shortcutsGrid = document.getElementById('shortcutsGrid');
const noResults = document.getElementById('noResults');
const totalShortcutsEl = document.getElementById('totalShortcuts');
const categoriesEl = document.getElementById('categories');
const showingEl = document.getElementById('showing');
const printBtn = document.getElementById('printBtn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// ============================================
// Initialize App
// ============================================
function init() {
    renderCategoryTabs();
    renderShortcuts();
    updateStats();
    setupEventListeners();
}

// ============================================
// Get Current Data
// ============================================
function getCurrentShortcuts() {
    return SHORTCUTS_DATA[state.currentOS];
}

function getFilteredCategories() {
    const data = getCurrentShortcuts();
    if (state.selectedCategory === 'all') {
        return data;
    }
    return data.filter(cat => cat.category === state.selectedCategory);
}

function searchShortcuts(shortcuts) {
    if (!state.searchQuery) return shortcuts;
    
    return shortcuts.map(cat => {
        const filtered = cat.shortcuts.filter(s => 
            s.description.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            s.keys.join(' ').toLowerCase().includes(state.searchQuery.toLowerCase())
        );
        return { ...cat, shortcuts: filtered, icon: cat.icon };
    }).filter(cat => cat.shortcuts.length > 0);
}

// ============================================
// Render Category Tabs
// ============================================
function renderCategoryTabs() {
    const data = getCurrentShortcuts();
    categoryTabs.innerHTML = `<button class="category-tab active" data-category="all">All</button>`;
    
    data.forEach(cat => {
        const tab = document.createElement('button');
        tab.className = 'category-tab';
        tab.dataset.category = cat.category;
        tab.textContent = `${cat.icon} ${cat.category.replace('-', ' ')}`;
        categoryTabs.appendChild(tab);
    });
}

// ============================================
// Render Shortcuts
// ============================================
function renderShortcuts() {
    shortcutsGrid.innerHTML = '';
    
    let data = getCurrentShortcuts();
    data = getFilteredCategories();
    const filtered = searchShortcuts(data);
    
    if (filtered.length === 0) {
        noResults.style.display = 'block';
        shortcutsGrid.style.display = 'none';
        return;
    }
    
    noResults.style.display = 'none';
    shortcutsGrid.style.display = 'grid';
    
    filtered.forEach(category => {
        const section = createCategorySection(category);
        shortcutsGrid.appendChild(section);
    });
    
    updateStats();
}

function createCategorySection(category) {
    const section = document.createElement('div');
    section.className = 'category-section';
    
    section.innerHTML = `
        <div class="category-header">
            <h3 class="category-title">${category.icon} ${category.category.replace('-', ' ')}</h3>
            <span class="category-count">${category.shortcuts.length} shortcuts</span>
        </div>
        <div class="shortcuts-list">
            ${category.shortcuts.map((s, i) => `
                <div class="shortcut-item" data-category="${category.category}" data-index="${i}">
                    <span class="shortcut-desc">${s.description}</span>
                    <div class="shortcut-keys">
                        ${s.keys.map((key, j) => `
                            ${j > 0 ? '<span class="key-plus">+</span>' : ''}
                            <span class="key">${key}</span>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Click to copy
    section.querySelectorAll('.shortcut-item').forEach(item => {
        item.addEventListener('click', () => {
            const cat = item.dataset.category;
            const idx = parseInt(item.dataset.index);
            const shortcut = getCurrentShortcuts()
                .find(c => c.category === cat)
                .shortcuts[idx];
            
            copyShortcut(shortcut);
        });
    });
    
    return section;
}

// ============================================
// Copy Shortcut
// ============================================
function copyShortcut(shortcut) {
    const text = `${shortcut.keys.join(' + ')} - ${shortcut.description}`;
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard! 📋');
    }).catch(() => {
        showToast('Failed to copy');
    });
}

// ============================================
// Update Stats
// ============================================
function updateStats() {
    const data = getCurrentShortcuts();
    const totalShortcuts = data.reduce((sum, cat) => sum + cat.shortcuts.length, 0);
    const filtered = searchShortcuts(getFilteredCategories());
    const shown = filtered.reduce((sum, cat) => sum + cat.shortcuts.length, 0);
    
    totalShortcutsEl.textContent = totalShortcuts;
    categoriesEl.textContent = data.length;
    showingEl.textContent = shown;
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
    // Search input
    searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderShortcuts();
    });
    
    // OS toggle buttons
    osButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            osButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.currentOS = btn.dataset.os;
            renderCategoryTabs();
            renderShortcuts();
        });
    });
    
    // Category tabs
    categoryTabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-tab')) {
            categoryTabs.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            state.selectedCategory = e.target.dataset.category;
            renderShortcuts();
        }
    });
    
    // Print button
    printBtn.addEventListener('click', () => {
        window.print();
    });
}

// ============================================
// Start the App
// ============================================
init();
