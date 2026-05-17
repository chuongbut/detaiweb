const gamesDatabase = [
    { id: 1, category: "action", name: "Cyberpunk 2077: Ultimate Edition", price: 590000, tag: "Steam", img: "https://haloshop.vn/wp-content/uploads/2025/02/cyberpunk_2077_ultimate_edition_ps5-700x700-1.webp", os: "Windows 10/11", cpu: "Intel Core i7-6700", ram: "16 GB", gpu: "GTX 1060 6GB" },
    { id: 2, category: "action", name: "Black Myth: Wukong", price: 990000, tag: "Steam", img: "https://haloshop.vn/wp-content/uploads/2025/02/black_myth_wukong_ps5-700x700h.webp", os: "Windows 10/11 64-bit", cpu: "Intel Core i5-8400", ram: "16 GB", gpu: "GTX 1060 6GB" },
    { id: 3, category: "action", name: "Elden Ring: Shadow of the Erdtree", price: 820000, tag: "Steam", img: "https://haloshop.vn/wp-content/uploads/2025/02/elden_ring_shadow_of_the_erdtree_ps5-700x700h.webp", os: "Windows 10", cpu: "Intel Core i5-8400", ram: "12 GB", gpu: "GTX 1060 3GB" },
    { id: 4, category: "action", name: "Red Dead Redemption 2", price: 399000, tag: "Rockstar", img: "https://images.gamethuanviet.com/wp-content/uploads/2025/07/Red_Dead_Redemption_2_poster_Viet_Hoa-3.webp", os: "Windows 10", cpu: "Intel Core i5-2500K", ram: "8 GB", gpu: "GTX 770 2GB" },
    
    { id: 5, category: "sports", name: "EA SPORTS FC 26 (FIFA)", price: 1090000, tag: "EA Origin", img: "https://haloshop.vn/wp-content/uploads/2025/08/EA-SPORTS-FC-26-PS5-00.webp", os: "Windows 10/11", cpu: "Core i5-6600K", ram: "8 GB", gpu: "GTX 1050 Ti" },
    { id: 6, category: "sports", name: "Forza Horizon 5", price: 490000, tag: "Xbox PC", img: "https://store-images.s-microsoft.com/image/apps.7859.14506879174941978.138d3eab-0b06-443b-a252-c99592521394.33a348aa-892d-49b8-9ef2-6ff06c22cf96", os: "Windows 10", cpu: "Intel i5-4460", ram: "8 GB", gpu: "GTX 970" },
    { id: 7, category: "sports", name: "NBA 2K26 Digital Code", price: 950000, tag: "Steam", img: "https://haloshop.vn/wp-content/uploads/2025/09/NBA-2K26-PS5-00.webp", os: "Windows 10", cpu: "Intel Core i5-4430", ram: "8 GB", gpu: "GTX 770" },
    { id: 8, category: "sports", name: "F1 24 (Formula 1 Oficial)", price: 1100000, tag: "Steam", img: "https://cdn1.epicgames.com/offer/edffc5fcc62140a7afd239d9e65df463/EGS_F124_Codemasters_S2_1200x1600-4640c5c849df939a2303ab872d618530", os: "Windows 10", cpu: "Intel Core i3-2130", ram: "8 GB", gpu: "GTX 1050 Ti" },

    { id: 9, category: "strategy", name: "Age of Empires IV: Anniversary", price: 350000, tag: "Steam", img: "https://store-images.s-microsoft.com/image/apps.63959.14235977975261210.106699ff-5046-4540-ac72-e248ae2c3818.f61be535-d1e6-46c7-a0b3-338fd9384f08", os: "Windows 10", cpu: "Intel Core i5-6300U", ram: "8 GB", gpu: "Intel HD 520" },
    { id: 10, category: "strategy", name: "Civilization VI: Anthology", price: 250000, tag: "Steam", img: "https://haloshop.vn/wp-content/uploads/2025/02/sid-meiers-civilization-vi-ps4-700x700h-1.jpg", os: "Windows 7/8.1/10", cpu: "Intel Core i3 2.5 Ghz", ram: "4 GB", gpu: "GTX 450" },
    { id: 11, category: "strategy", name: "Total War: WARHAMMER III", price: 850000, tag: "Steam", img: "https://m.media-amazon.com/images/M/MV5BY2U2NjQ4MGYtMGI2Ni00OWVkLTgzOGQtZDk5NGE3NGYwMTc1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", os: "Windows 10 64-bit", cpu: "Intel i3-2120", ram: "6 GB", gpu: "GTX 950" },
    { id: 12, category: "strategy", name: "Cities: Skylines II", price: 670000, tag: "Steam", img: "https://myhotposters.com/cdn/shop/products/mL6939_1024x1024.jpg?v=1748531428", os: "Windows 10 Home 64 Bit", cpu: "Intel Core i7-6700K", ram: "16 GB", gpu: "GTX 1080" }
];

function updateGlobalCartCount() {
    let cart = JSON.parse(localStorage.getItem('mainCart')) || [];
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('global-cart-count');
    if(badge) badge.innerText = total;
}