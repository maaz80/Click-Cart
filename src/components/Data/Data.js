import Iphone from "../../images/Iphone.png";
import Laptop from "../../images/Laptop.png";
import Watch from "../../images/Watch.png";
import Speaker2 from "../../images/Speaker2.png";
import Headphone from "../../images/Headphone.png";
import Vr from "../../images/Vr.webp";

const Data = [
    {
        "id": 1,
        "title": "iPhone 13",
        "description": "The latest iPhone with A15 Bionic chip, 5G, and improved cameras.",
        "price": 99009,
        "image": Iphone,
        "features": ["A15 Bionic chip", "5G connectivity", "Dual 12MP cameras", "6.1-inch Super Retina XDR display"],
        "details": ["Available in multiple colors", "Ceramic Shield front cover", "Supports MagSafe accessories"],
        "category": "Smartphones"
    },
    {
        "id": 2,
        "title": "Apple Watch Series 7",
        "description": "Latest Apple Watch with larger display, new sensors, and faster charging.",
        "price": 39900,
        "image": Watch,
        "features": ["Larger always-on Retina display", "Blood Oxygen sensor", "ECG app", "Fast charging"],
        "details": ["Available in multiple case finishes", "Water resistant up to 50 meters", "Supports Family Setup"],
        "category": "Wearable"
    },
    {
        "id": 3,
        "title": "Apple MacBook Pro 16\"",
        "description": "Apple M1 Pro chip with 16-core GPU, 16GB RAM, 512GB SSD.",
        "price": 249900,
        "image": Laptop,
        "features": ["Apple M1 Pro chip", "16-core GPU", "16GB RAM", "512GB SSD"],
        "details": ["16-inch Retina display", "Up to 21 hours of battery life", "Advanced thermal design"],
        "category": "Laptop"
    },
    {
        "id": 4,
        "title": "Sony WH-1000XM4",
        "description": "Premium wireless Headphones with industry-leading noise cancellation, 30-hour battery life, and advanced sound.",
        "price": 34900,
        "image": Headphone,
        "features": ["Industry-leading noise cancellation", "30-hour battery life", "Touch sensor controls", "Speak-to-Chat technology"],
        "details": ["Bluetooth and NFC connectivity", "Adaptive sound control", "Comfortable ear pads"],
        "category": "Headphones"
    },
    {
        "id": 5,
        "title": "Bose SoundLink Revolve+",
        "description": "Portable Bluetooth speaker with 360-degree sound, water resistance, and up to 16 hours of battery life.",
        "price": 29900,
        "image": Speaker2,
        "features": ["360-degree sound", "Water-resistant design", "16-hour battery life", "Built-in microphone"],
        "details": ["Durable aluminum body", "Seamless Bluetooth pairing", "Voice prompts for easy setup"],
        "category": "Speakers"
    },
    {
        "id": 6,
        "title": "Oculus Quest 2",
        "description": "All-in-one VR headset with 6GB RAM, 64GB storage, and an advanced Qualcomm Snapdragon XR2 platform.",
        "price": 29900,
        "image": Vr,
        "features": ["6GB RAM", "64GB storage", "Qualcomm Snapdragon XR2", "High-resolution display"],
        "details": ["All-in-one VR system", "Easy setup", "Supports hand tracking"],
        "category": "VR Headset"
    },
    {
        "id": 7,
        "title": "Samsung Galaxy S21",
        "description": "Flagship Samsung phone with Exynos 2100, 120Hz display, and triple camera setup.",
        "price": 79900,
        "image": Iphone,
        "features": ["Exynos 2100", "120Hz AMOLED display", "Triple camera setup", "4000mAh battery"],
        "details": ["5G connectivity", "IP68 water and dust resistance", "Wireless PowerShare"],
        "category": "Smartphones"
    },
    {
        "id": 8,
        "title": "Garmin Fenix 6",
        "description": "High-end multisport GPS smartwatch with advanced training features and long battery life.",
        "price": 69900,
        "image": Watch,
        "features": ["Multisport GPS", "Advanced training features", "Long battery life", "Heart rate monitoring"],
        "details": ["Built-in topo maps", "PacePro technology", "Rugged design"],
        "category": "Wearable"
    },
    {
        "id": 9,
        "title": "Dell XPS 13",
        "description": "11th Gen Intel Core i7, 16GB RAM, 512GB SSD, 13.4\" FHD+ display.",
        "price": 139900,
        "image": Laptop,
        "features": ["11th Gen Intel Core i7", "16GB RAM", "512GB SSD", "13.4-inch FHD+ display"],
        "details": ["InfinityEdge display", "Ultra-thin design", "Long battery life"],
        "category": "Laptop"
    },
    {
        "id": 10,
        "title": "Bose QuietComfort 35 II",
        "description": "Wireless noise-cancelling Headphones with balanced sound, Alexa integration, and comfortable design.",
        "price": 29900,
        "image": Headphone,
        "features": ["Noise-cancelling", "Alexa integration", "Balanced sound", "20-hour battery life"],
        "details": ["Bluetooth and NFC pairing", "Voice assistants", "Lightweight design"],
        "category": "Headphones"
    },
    {
        "id": 11,
        "title": "JBL Charge 5",
        "description": "Powerful portable speaker with Bluetooth, IP67 waterproof rating, and built-in power bank.",
        "price": 17900,
        "image": Speaker2,
        "features": ["Bluetooth connectivity", "IP67 waterproof rating", "Built-in power bank", "20-hour battery life"],
        "details": ["Rugged design", "Dual passive radiators", "JBL PartyBoost"],
        "category": "Speakers"
    },
    {
        "id": 12,
        "title": "HTC Vive Pro 2",
        "description": "High-resolution VR headset with 5K display, 120Hz refresh rate, and precise motion tracking.",
        "price": 79900,
        "image": Vr,
        "features": ["5K display", "120Hz refresh rate", "Precise motion tracking", "High-quality audio"],
        "details": ["Comfortable design", "Customizable settings", "Wide field of view"],
        "category": "VR Headset"
    },
    {
        "id": 13,
        "title": "Google Pixel 6",
        "description": "Google's own smartphone with Tensor chip, 50MP camera, and pure Android experience.",
        "price": 69900,
        "image": Iphone,
        "features": ["Google Tensor chip", "50MP camera", "Pure Android experience", "5G connectivity"],
        "details": ["Fast charging", "High refresh rate display", "Water and dust resistant"],
        "category": "Smartphones"
    },
    {
        "id": 14,
        "title": "Samsung Galaxy Watch 4",
        "description": "Samsung's latest smartwatch with Wear OS, advanced health tracking, and sleek design.",
        "price": 34900,
        "image": Watch,
        "features": ["Wear OS", "Advanced health tracking", "Sleek design", "Long battery life"],
        "details": ["ECG monitoring", "Blood pressure monitoring", "Body composition analysis"],
        "category": "Wearable"
    },
    {
        "id": 15,
        "title": "HP Spectre x360",
        "description": "Intel Core i7, 16GB RAM, 1TB SSD, 13.3\" 4K UHD touchscreen.",
        "price": 159900,
        "image": Laptop,
        "features": ["Intel Core i7", "16GB RAM", "1TB SSD", "13.3-inch 4K UHD touchscreen"],
        "details": ["360-degree hinge", "Ultra-thin and light", "Long battery life"],
        "category": "Laptop"
    },
    {
        "id": 16,
        "title": "Apple AirPods Pro",
        "description": "True wireless earbuds with active noise cancellation, adaptive EQ, and customizable fit.",
        "price": 24900,
        "image": Headphone,
        "features": ["Active noise cancellation", "Adaptive EQ", "Customizable fit", "Transparency mode"],
        "details": ["Sweat and water resistant", "H1 chip", "MagSafe charging case"],
        "category": "Headphones"
    },
    {
        "id": 17,
        "title": "Sony SRS-XB43",
        "description": "Wireless Bluetooth speaker with EXTRA BASS, IP67 rating, and up to 24 hours of battery life.",
        "price": 24900,
        "image": Speaker2,
        "features": ["EXTRA BASS", "IP67 rating", "24-hour battery life", "Party Connect"],
        "details": ["Durable design", "Built-in microphone", "X-Balanced Speaker Unit"],
        "category": "Speakers"
    },
    {
        "id": 18,
        "title": "Sony PlayStation VR",
        "description": "VR headset for PlayStation with 5.7-inch OLED display, 120fps, and seamless integration with PS4 and PS5.",
        "price": 39900,
        "image": Vr,
        "features": ["5.7-inch OLED display", "120fps", "Seamless PS4/PS5 integration", "Precision tracking"],
        "details": ["Immersive gaming experience", "3D audio technology", "Comfortable design"],
        "category": "VR Headset"
    },
    {
        "id": 19,
        "title": "OnePlus 9 Pro",
        "description": "Flagship phone with Snapdragon 888, 120Hz Fluid AMOLED display, and Hasselblad camera.",
        "price": 96900,
        "image": Iphone,
        "features": ["Snapdragon 888", "120Hz Fluid AMOLED display", "Hasselblad camera", "4500mAh battery"],
        "details": ["5G connectivity", "Warp Charge 65T", "Wireless charging"],
        "category": "Smartphones"
    },
    {
        "id": 20,
        "title": "Fitbit Sense",
        "description": "Advanced health smartwatch with stress management, ECG, and skin temperature sensors.",
        "price": 29900,
        "image": Watch,
        "features": ["Stress management", "ECG app", "Skin temperature sensor", "Built-in GPS"],
        "details": ["6+ days battery life", "Active Zone Minutes", "Sleep tracking"],
        "category": "Wearable"
    },
    {
        "id": 21,
        "title": "Microsoft Surface Laptop 4",
        "description": "Intel Core i7, 16GB RAM, 512GB SSD, 13.5\" PixelSense display.",
        "price": 139900,
        "image": Laptop,
        "features": ["Intel Core i7", "16GB RAM", "512GB SSD", "13.5-inch PixelSense display"],
        "details": ["All-day battery life", "Omnisonic speakers", "Dolby Atmos"],
        "category": "Laptop"
    },
    {
        "id": 22,
        "title": "Sennheiser Momentum 3",
        "description": "Wireless noise-cancelling headphones with superior sound quality, comfort, and smart features.",
        "price": 39900,
        "image": Headphone,
        "features": ["Noise-cancelling", "Superior sound quality", "Smart features", "20-hour battery life"],
        "details": ["Auto On/Off and Smart Pause", "Voice Assistant support", "Comfortable fit"],
        "category": "Headphones"
    },
    {
        "id": 23,
        "title": "UE Boom 3",
        "description": "Portable Bluetooth speaker with 360-degree sound, waterproof design, and up to 15 hours of battery life.",
        "price": 17900,
        "image": Speaker2,
        "features": ["360-degree sound", "Waterproof design", "15-hour battery life", "One-touch music control"],
        "details": ["Rugged design", "PartyUp feature", "Magic Button"],
        "category": "Speakers"
    },
    {
        "id": 24,
        "title": "Valve Index",
        "description": "High-fidelity VR headset with 1440x1600 RGB LCDs, 120Hz refresh rate, and precise tracking.",
        "price": 99900,
        "image": Vr,
        "features": ["1440x1600 RGB LCDs", "120Hz refresh rate", "Precise tracking", "Comfortable design"],
        "details": ["Wide field of view", "High-quality audio", "Finger tracking controllers"],
        "category": "VR Headset"
    },
    {
        "id": 25,
        "title": "Xiaomi Mi 11",
        "description": "Flagship phone with Snapdragon 888, 108MP camera, and 120Hz AMOLED display.",
        "price": 74900,
        "image": Iphone,
        "features": ["Snapdragon 888", "108MP camera", "120Hz AMOLED display", "4600mAh battery"],
        "details": ["Fast charging", "Wireless charging", "Harman Kardon speakers"],
        "category": "Smartphones"
    },
    {
        "id": 26,
        "title": "Garmin Venu 2",
        "description": "GPS smartwatch with advanced health monitoring, fitness tracking, and long battery life.",
        "price": 39900,
        "image": Watch,
        "features": ["Advanced health monitoring", "Fitness tracking", "Long battery life", "Bright AMOLED display"],
        "details": ["Sleep score", "Body Battery energy monitoring", "Music storage"],
        "category": "Wearable"
    },
    {
        "id": 27,
        "title": "Razer Blade 15",
        "description": "Gaming laptop with Intel Core i7, NVIDIA GeForce RTX 3060, 16GB RAM, and 512GB SSD.",
        "price": 219900,
        "image": Laptop,
        "features": ["Intel Core i7", "NVIDIA GeForce RTX 3060", "16GB RAM", "512GB SSD"],
        "details": ["15.6-inch FHD display", "Per-key RGB lighting", "Advanced cooling system"],
        "category": "Laptop"
    },
    {
        "id": 28,
        "title": "Bang & Olufsen Beoplay H9",
        "description": "Luxurious wireless noise-cancelling headphones with touch controls and up to 25 hours of battery life.",
        "price": 49900,
        "image": Headphone,
        "features": ["Noise-cancelling", "Touch controls", "25-hour battery life", "Luxurious design"],
        "details": ["High-quality materials", "Voice Assistant support", "Comfortable fit"],
        "category": "Headphones"
    },
    {
        "id": 29,
        "title": "JBL Xtreme 3",
        "description": "Portable Bluetooth speaker with powerful sound, IP67 waterproof rating, and up to 15 hours of playtime.",
        "price": 29900,
        "image": Speaker2,
        "features": ["Powerful sound", "IP67 waterproof rating", "15-hour playtime", "Built-in power bank"],
        "details": ["Rugged design", "PartyBoost", "Dual passive radiators"],
        "category": "Speakers"
    },
    {
        "id": 30,
        "title": "Samsung Odyssey G9",
        "description": "49\" curved gaming monitor with 240Hz refresh rate, QLED technology, and immersive experience.",
        "price": 149900,
        "image": Laptop,
        "features": ["49-inch curved display", "240Hz refresh rate", "QLED technology", "1ms response time"],
        "details": ["Dual QHD resolution", "HDR1000", "NVIDIA G-SYNC Compatible"],
        "category": "Monitors"
    },
    {
        "id": 31,
        "title": "Google Pixel 5a",
        "description": "Mid-range phone with Snapdragon 765G, 12.2MP dual-pixel camera, and pure Android experience.",
        "price": 44900,
        "image": Iphone,
        "features": ["Snapdragon 765G", "12.2MP dual-pixel camera", "Pure Android experience", "5G connectivity"],
        "details": ["Long battery life", "IP67 water and dust resistance", "Fast charging"],
        "category": "Smartphones"
    },
    {
        "id": 32,
        "title": "Fossil Gen 5",
        "description": "Stylish smartwatch with Wear OS, heart rate tracking, GPS, and customizable watch faces.",
        "price": 29900,
        "image": Watch,
        "features": ["Wear OS", "Heart rate tracking", "GPS", "Customizable watch faces"],
        "details": ["Swimproof design", "Google Assistant", "Interchangeable straps"],
        "category": "Wearable"
    },
    {
        "id": 33,
        "title": "Asus ROG Zephyrus G14",
        "description": "Compact gaming laptop with AMD Ryzen 9, NVIDIA GeForce RTX 3060, 16GB RAM, and 1TB SSD.",
        "price": 189900,
        "image": Laptop,
        "features": ["AMD Ryzen 9", "NVIDIA GeForce RTX 3060", "16GB RAM", "1TB SSD"],
        "details": ["14-inch FHD display", "Anime Matrix LED display", "Lightweight and portable"],
        "category": "Laptop"
    },
    {
        "id": 34,
        "title": "Bowers & Wilkins PX7",
        "description": "Wireless noise-cancelling headphones with 30 hours of battery life and premium sound quality.",
        "price": 39900,
        "image": Headphone,
        "features": ["Noise-cancelling", "30-hour battery life", "Premium sound quality", "Adaptive noise cancellation"],
        "details": ["Quick charge", "Voice Assistant support", "Comfortable fit"],
        "category": "Headphones"
    },
    {
        "id": 35,
        "title": "Sony XB33",
        "description": "Portable Bluetooth speaker with EXTRA BASS, IP67 rating, and up to 24 hours of battery life.",
        "price": 17900,
        "image": Speaker2,
        "features": ["EXTRA BASS", "IP67 rating", "24-hour battery life", "Party Connect"],
        "details": ["Durable design", "Built-in microphone", "Live Sound mode"],
        "category": "Speakers"
    },
    {
        "id": 36,
        "title": "HP Reverb G2",
        "description": "High-resolution VR headset with 2160x2160 per eye, 90Hz refresh rate, and precise tracking.",
        "price": 59900,
        "image": Vr,
        "features": ["2160x2160 per eye", "90Hz refresh rate", "Precise tracking", "High-quality audio"],
        "details": ["Comfortable design", "Wide field of view", "Compatible with Windows Mixed Reality"],
        "category": "VR Headset"
    },
    {
        "id": 37,
        "title": "Motorola Moto G100",
        "description": "Affordable phone with Snapdragon 870, 6.7\" 90Hz display, and quad-camera system.",
        "price": 49900,
        "image": Iphone,
        "features": ["Snapdragon 870", "6.7-inch 90Hz display", "Quad-camera system", "5000mAh battery"],
        "details": ["5G connectivity", "Near-stock Android experience", "Ready For platform"],
        "category": "Smartphones"
    },
    {
        "id": 38,
        "title": "Samsung Galaxy Buds Pro",
        "description": "Wireless earbuds with intelligent ANC, 360 Audio, and water resistance.",
        "price": 21900,
        "image": Headphone,
        "features": ["Intelligent ANC", "360 Audio", "Water resistance", "Voice detect"],
        "details": ["11mm woofer", "6.5mm tweeter", "IPX7 water resistance"],
        "category": "Headphones"
    },
    {
        "id": 39,
        "title": "JBL Flip 5",
        "description": "Portable Bluetooth speaker with powerful sound, IPX7 waterproof rating, and up to 12 hours of playtime.",
        "price": 8990,
        "image": Speaker2,
        "features": ["Powerful sound", "IPX7 waterproof rating", "12-hour playtime", "PartyBoost"],
        "details": ["Durable design", "Racetrack-shaped driver", "USB-C charging"],
        "category": "Speakers"
    },
    {
        "id": 40,
        "title": "Oculus Rift S",
        "description": "PC-powered VR gaming headset with improved optics, ergonomic design, and touch controllers.",
        "price": 39900,
        "image": Vr,
        "features": ["Improved optics", "Ergonomic design", "Touch controllers", "Room-scale tracking"],
        "details": ["Inside-out tracking", "Passthrough+"],
        "category": "VR Headset"
    },
    {
        "id": 41,
        "title": "Xiaomi Mi 11 Ultra",
        "description": "Flagship phone with Snapdragon 888, 50MP camera, and secondary display.",
        "price": 89900,
        "image": Iphone,
        "features": ["Snapdragon 888", "50MP camera", "Secondary display", "5000mAh battery"],
        "details": ["120X zoom", "IP68 water and dust resistant", "Harman Kardon sound"],
        "category": "Smartphones"
    },
    {
        "id": 42,
        "title": "Garmin Forerunner 945",
        "description": "Premium GPS running smartwatch with heart rate monitoring, advanced training features, and music.",
        "price": 52900,
        "image": Watch,
        "features": ["GPS", "Heart rate monitoring", "Advanced training features", "Music"],
        "details": ["VO2 max and training status", "Garmin Pay", "Pulse Ox sensor"],
        "category": "Wearable"
    },
    {
        "id": 43,
        "title": "Dell Alienware m15 R6",
        "description": "Gaming laptop with 11th Gen Intel Core i7, NVIDIA GeForce RTX 3060, 16GB RAM, and 512GB SSD.",
        "price": 214990,
        "image": Laptop,
        "features": ["11th Gen Intel Core i7", "NVIDIA GeForce RTX 3060", "16GB RAM", "512GB SSD"],
        "details": ["15.6-inch FHD display", "AlienFX customizable lighting", "Advanced cooling technology"],
        "category": "Laptop"
    },
    {
        "id": 44,
        "title": "Bose Frames Tempo",
        "description": "Audio sunglasses with polarized lenses, Open Ear audio, and sweat/weather resistant design.",
        "price": 29900,
        "image": Headphone,
        "features": ["Open Ear audio", "Polarized lenses", "Sweat/weather resistant", "Built-in microphone"],
        "details": ["UVA/UVB protection", "Bluetooth connectivity", "Up to 8 hours battery life"],
        "category": "Headphones"
    },
    {
        "id": 45,
        "title": "UE Megaboom 3",
        "description": "Powerful portable Bluetooth speaker with deep bass, IP67 waterproof rating, and 20 hours of battery life.",
        "price": 19900,
        "image": Speaker2,
        "features": ["Deep bass", "IP67 waterproof rating", "20-hour battery life", "One-touch music control"],
        "details": ["Durable design", "Magic Button", "Pair up to 8 Bluetooth enabled source devices"],
        "category": "Speakers"
    },
    {
        "id": 46,
        "title": "HTC Vive Cosmos Elite",
        "description": "VR headset with 2880x1700 combined resolution, 90Hz refresh rate, and precise tracking.",
        "price": 79900,
        "image": Vr,
        "features": ["2880x1700 combined resolution", "90Hz refresh rate", "Precise tracking", "Flip-up design"],
        "details": ["Viveport Infinity subscription included", "SteamVR compatible"],
        "category": "VR Headset"
    },
    {
        "id": 47,
        "title": "OnePlus Nord 2",
        "description": "Mid-range phone with MediaTek Dimensity 1200, 90Hz AMOLED display, and 50MP triple camera.",
        "price": 29900,
        "image": Iphone,
        "features": ["MediaTek Dimensity 1200", "90Hz AMOLED display", "50MP triple camera", "4500mAh battery"],
        "details": ["5G connectivity", "Warp Charge 65", "OxygenOS based on Android 11"],
        "category": "Smartphones"
    },
    {
        "id": 48,
        "title": "Apple Watch SE",
        "description": "Affordable Apple Watch with Retina display, S5 chip, and comprehensive health features.",
        "price": 19900,
        "image": Watch,
        "features": ["Retina display", "S5 chip", "Comprehensive health features", "Family Setup"],
        "details": ["Built-in compass", "Water resistant up to 50 meters", "Emergency SOS"],
        "category": "Wearable"
    },
    {
        "id": 49,
        "title": "Lenovo Legion 5 Pro",
        "description": "Gaming laptop with AMD Ryzen 7, NVIDIA GeForce RTX 3070, 16GB RAM, and 1TB SSD.",
        "price": 189900,
        "image": Laptop,
        "features": ["AMD Ryzen 7", "NVIDIA GeForce RTX 3070", "16GB RAM", "1TB SSD"],
        "details": ["16-inch QHD display", "165Hz refresh rate", "OptiMech keyboard"],
        "category": "Laptop"
    },
    {
        "id": 50,
        "title": "Sony WH-XB900N",
        "description": "Wireless noise-cancelling headphones with EXTRA BASS, touch controls, and 30 hours of battery life.",
        "price": 16900,
        "image": Headphone,
        "features": ["EXTRA BASS", "Noise-cancelling", "Touch controls", "30-hour battery life"],
        "details": ["Quick Attention mode", "Built-in mic for hands-free calls"],
        "category": "Headphones"
    },
    {
        "id": 51,
        "title": "Anker Soundcore 2",
        "description": "Portable Bluetooth speaker with 12W stereo sound, IPX7 waterproof rating, and 24-hour playtime.",
        "price": 4490,
        "image": Speaker2,
        "features": ["12W stereo sound", "IPX7 waterproof rating", "24-hour playtime", "Built-in microphone"],
        "details": ["Dual neodymium drivers", "BassUp technology"],
        "category": "Speakers"
    },
    {
        "id": 52,
        "title": "HTC Vive Cosmos",
        "description": "VR headset with 2880x1700 combined resolution, 90Hz refresh rate, and flip-up design.",
        "price": 69900,
        "image": Vr,
        "features": ["2880x1700 combined resolution", "90Hz refresh rate", "Flip-up design", "Inside-out tracking"],
        "details": ["Adjustable interpupillary distance", "6DoF controller tracking"],
        "category": "VR Headset"
    },
    {
        "id": 53,
        "title": "Google Pixel 4a",
        "description": "Affordable Google phone with Snapdragon 730G, 5.8\" OLED display, and 12.2MP dual-pixel camera.",
        "price": 34900,
        "image": Iphone,
        "features": ["Snapdragon 730G", "5.8-inch OLED display", "12.2MP dual-pixel camera", "3140mAh battery"],
        "details": ["Android 11 with three years of updates", "Titan M security module"],
        "category": "Smartphones"
    },
    {
        "id": 54,
        "title": "Fitbit Charge 4",
        "description": "Fitness tracker with built-in GPS, heart rate monitoring, and up to 7 days of battery life.",
        "price": 12900,
        "image": Watch,
        "features": ["Built-in GPS", "Heart rate monitoring", "Sleep tracking", "Spotify control"],
        "details": ["Swimproof design", "Fitbit Pay", "Active Zone Minutes"],
        "category": "Wearable"
    },
    {
        "id": 55,
        "title": "Acer Predator Helios 300",
        "description": "Gaming laptop with 10th Gen Intel Core i7, NVIDIA GeForce RTX 3060, 16GB RAM, and 512GB SSD.",
        "price": 129900,
        "image": Laptop,
        "features": ["10th Gen Intel Core i7", "NVIDIA GeForce RTX 3060", "16GB RAM", "512GB SSD"],
        "details": ["15.6-inch FHD IPS display", "144Hz refresh rate", "RGB backlit keyboard"],
        "category": "Laptop"
    },
    {
        "id": 56,
        "title": "Bose Noise Cancelling Headphones 700",
        "description": "Wireless noise-cancelling headphones with adaptive 4-microphone system and 20-hour battery life.",
        "price": 39900,
        "image": Headphone,
        "features": ["Adaptive 4-microphone system", "Noise-cancelling", "20-hour battery life", "Intuitive controls"],
        "details": ["Adjustable ANC levels", "Bose AR enabled"],
        "category": "Headphones"
    },
    {
        "id": 57,
        "title": "JBL Clip 4",
        "description": "Ultra-portable Bluetooth speaker with improved audio, colorful design, and up to 10 hours of playtime.",
        "price": 4990,
        "image": Speaker2,
        "features": ["Improved audio", "Ultra-portable", "Up to 10 hours of playtime", "Integrated carabiner"],
        "details": ["IP67 waterproof and dustproof", "Wireless Bluetooth streaming"],
        "category": "Speakers"
    },
    {
        "id": 58,
        "title": "HTC Vive Focus 3",
        "description": "All-in-one VR headset for business with 5K resolution, 90Hz refresh rate, and 6DoF tracking.",
        "price": 129900,
        "image": Vr,
        "features": ["5K resolution", "90Hz refresh rate", "6DoF tracking", "All-in-one design"],
        "details": ["Qualcomm Snapdragon XR2", "Front and rear cameras"],
        "category": "VR Headset"
    },
    {
        "id": 59,
        "title": "Samsung Galaxy Fit 2",
        "description": "Affordable fitness tracker with AMOLED display, heart rate monitoring, and up to 15 days of battery life.",
        "price": 4990,
        "image": Watch,
        "features": ["AMOLED display", "Heart rate monitoring", "Sleep tracking", "Long battery life"],
        "details": ["5 ATM water resistance", "Auto workout tracking"],
        "category": "Wearable"
    },
    {
        "id": 60,
        "title": "Dell XPS 15",
        "description": "High-performance laptop with 11th Gen Intel Core i7, NVIDIA GeForce RTX 3050 Ti, 16GB RAM, and 512GB SSD.",
        "price": 169900,
        "image": Laptop,
        "features": ["11th Gen Intel Core i7", "NVIDIA GeForce RTX 3050 Ti", "16GB RAM", "512GB SSD"],
        "details": ["15.6-inch 4K UHD+ InfinityEdge display", "94% screen-to-body ratio", "Windows Hello"],
        "category": "Laptop"
    },
    {
        "id": 61,
        "title": "Apple AirPods 3",
        "description": "Wireless earbuds with spatial audio, Adaptive EQ, and MagSafe charging case.",
        "price": 19900,
        "image": Headphone,
        "features": ["Spatial audio", "Adaptive EQ", "MagSafe charging case", "Sweat and water resistant"],
        "details": ["Force sensor", "Dual beamforming microphones"],
        "category": "Headphones"
    },
    {
        "id": 62,
        "title": "Bose SoundLink Color II",
        "description": "Compact Bluetooth speaker with bold sound, rugged design, and up to 8 hours of playtime.",
        "price": 9990,
        "image": Speaker2,
        "features": ["Bold sound", "Rugged design", "Up to 8 hours of playtime", "Voice prompts for easy Bluetooth pairing"],
        "details": ["Built-in microphone", "Pair two speakers for Stereo or Party Mode"],
        "category": "Speakers"
    },
    {
        "id": 63,
        "title": "Samsung Galaxy Watch 4",
        "description": "Smartwatch with Wear OS, advanced health monitoring, and up to 40 hours of battery life.",
        "price": 27900,
        "image": Watch,
        "features": ["Wear OS", "Advanced health monitoring", "Up to 40 hours of battery life", "Built-in GPS"],
        "details": ["ECG and blood pressure monitoring", "Sleep tracking with snoring detection"],
        "category": "Wearable"
    },
    {
        "id": 64,
        "title": "Asus ROG Swift PG279QM",
        "description": "27\" gaming monitor with WQHD resolution, 240Hz refresh rate, and NVIDIA G-SYNC technology.",
        "price": 48900,
        "image": Laptop,
        "features": ["27-inch WQHD display", "240Hz refresh rate", "NVIDIA G-SYNC technology", "HDR10"],
        "details": ["Fast IPS panel", "Asus Aura Sync lighting"],
        "category": "Monitor"
    },
    {
        "id": 65,
        "title": "Sony WF-1000XM4",
        "description": "Wireless noise-cancelling earbuds with LDAC support, 24-bit audio processing, and IPX4 rating.",
        "price": 27900,
        "image": Headphone,
        "features": ["Noise-cancelling", "LDAC support", "24-bit audio processing", "IPX4 water resistance"],
        "details": ["Sony V1 chip", "Precise Voice Pickup technology"],
        "category": "Headphones"
    },
    {
        "id": 66,
        "title": "UE Hyperboom",
        "description": "Portable Bluetooth speaker with thunderous bass, adaptive EQ, and up to 24 hours of battery life.",
        "price": 39900,
        "image": Speaker2,
        "features": ["Thunderous bass", "Adaptive EQ", "Up to 24 hours of battery life", "Bluetooth range up to 150 ft."],
        "details": ["IPX4 water resistance", "One-touch music control"],
        "category": "Speakers"
    },
    {
        "id": 67,
        "title": "Lenovo Yoga 9i",
        "description": "Convertible laptop with 11th Gen Intel Core i7, Intel Iris Xe graphics, 16GB RAM, and 512GB SSD.",
        "price": 119900,
        "image": Laptop,
        "features": ["11th Gen Intel Core i7", "Intel Iris Xe graphics", "16GB RAM", "512GB SSD"],
        "details": ["14-inch 4K UHD IPS touchscreen", "Rotating Sound Bar with Dolby Atmos"],
        "category": "Laptop"
    },
    {
        "id": 68,
        "title": "Apple HomePod mini",
        "description": "Smart speaker with Siri, 360-degree audio, and seamless integration with Apple devices.",
        "price": 9990,
        "image": Speaker2,
        "features": ["Siri", "360-degree audio", "Seamless Apple device integration", "HomeKit support"],
        "details": ["Intercom feature", "Personalized listening suggestions"],
        "category": "Speakers"
    },
    {
        "id": 69,
        "title": "Garmin Fenix 6",
        "description": "Premium multisport GPS smartwatch with heart rate monitoring, topographic maps, and up to 14 days of battery life.",
        "price": 64900,
        "image": Watch,
        "features": ["Multisport GPS", "Heart rate monitoring", "Topographic maps", "Pulse Ox sensor"],
        "details": ["Power manager", "Expedition mode"],
        "category": "Wearable"
    },
    {
        "id": 70,
        "title": "Razer BlackShark V2",
        "description": "Wired gaming headset with THX 7.1 Surround Sound, TriForce Titanium 50mm drivers, and detachable HyperClear Cardioid Mic.",
        "price": 9990,
        "image": Headphone,
        "features": ["THX 7.1 Surround Sound", "TriForce Titanium 50mm drivers", "Detachable HyperClear Cardioid Mic", "Advanced passive noise cancellation"],
        "details": ["Ultra-soft FlowKnit memory foam ear cushions", "Custom-tuned 9.9mm driver"],
        "category": "Headphones"
    },
    {
        "id": 71,
        "title": "JBL Boombox 2",
        "description": "Portable Bluetooth speaker with monstrous bass, IPX7 waterproof rating, and up to 24 hours of playtime.",
        "price": 26990,
        "image": Speaker2,
        "category": "Speaker",
        "features": ["Monstrous bass", "IPX7 waterproof rating", "Up to 24 hours of playtime", "Built-in power bank"],
        "details": ["PartyBoost feature", "JBL Pro Sound"]
    },
    {
        "id": 72,
        "title": "Samsung Odyssey G7",
        "description": "27\" curved gaming monitor with QLED technology, 240Hz refresh rate, and 1ms response time.",
        "price": 59900,
        "image": Laptop,
        "category": "Monitor",
        "features": ["27-inch curved display", "QLED technology", "240Hz refresh rate", "1ms response time"],
        "details": ["Quad HD resolution", "NVIDIA G-SYNC compatibility", "Infinity Core Lighting"]
    },
    {
        "id": 73,
        "title": "Google Nest Audio",
        "description": "Smart speaker with room-filling sound, Google Assistant, and adaptive EQ for audio tuning.",
        "price": 6990,
        "image": Speaker2,
        "category": "Speaker",
        "features": ["Room-filling sound", "Google Assistant", "Adaptive EQ", "Voice Match technology"],
        "details": ["Stream music from popular services", "Control smart home devices"]
    },
    {
        "id": 74,
        "title": "Xiaomi Mi Smart Band 6",
        "description": "Fitness tracker with 1.56\" AMOLED display, heart rate monitoring, and up to 14 days of battery life.",
        "price": 34900,
        "image": Watch,
        "category": "Fitness Tracker",
        "features": ["1.56-inch AMOLED display", "Heart rate monitoring", "Sleep tracking", "PAI (Personal Activity Intelligence) score"],
        "details": ["30 workout modes", "Water resistance up to 50 meters"]
    },
    {
        "id": 75,
        "title": "Sony WH-1000XM4",
        "description": "Wireless noise-cancelling headphones with LDAC support, Dual Noise Sensor technology, and Speak-to-Chat feature.",
        "price": 27900,
        "image": Headphone,
        "category": "Headphone",
        "features": ["LDAC support", "Dual Noise Sensor technology", "Speak-to-Chat", "Up to 30 hours of battery life"],
        "details": ["Adaptive Sound Control", "Touch Sensor controls"]
    }
]
export default Data;    