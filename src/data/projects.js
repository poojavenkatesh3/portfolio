// Import project card images
import NexeusImage from '../images/nexeus-project.png';
import SmartsphereImage from '../images/smartsphere.png';
import ToDoImage from '../images/to-do-list-project.jpg';
import MapDemoImage from '../images/map-demo-project.jpg';
import LifestyleImage from '../images/lifestyle-project.png';
import EcommerceImage from '../images/ecommerce-project.jpg';

// Import gallery images
import NexeusGallery1 from '../images/nexeus-gallery-1.png';
import NexeusGallery2 from '../images/nexeus-gallery-2.png';
import NexeusGallery3 from '../images/nexeus-gallery-3.png';

import SmartsphereGallery1 from '../images/smartsphere-gallery-1.jpg';
import SmartsphereGallery2 from '../images/smartsphere-gallery-2.jpg';
import SmartsphereGallery3 from '../images/smartsphere-gallery-3.jpg';

import ToDoGallery1 from '../images/todo-gallery-1.jpg';
import ToDoGallery2 from '../images/todo-gallery-2.png';
import ToDoGallery3 from '../images/todo-gallery-3.jpg';

import MapDemoGallery1 from '../images/map-gallery-1.png';
import MapDemoGallery2 from '../images/map-gallery-2.jpg';
import MapDemoGallery3 from '../images/map-gallery-3.jpg';

import LifestyleGallery1 from '../images/lifestyle-gallery-1.jpg';
import LifestyleGallery2 from '../images/lifestyle-gallery-2.webp';
import LifestyleGallery3 from '../images/lifestyle-gallery-3.png';

import EcommerceGallery1 from '../images/ecommerce-gallery-1.jpg';
import EcommerceGallery2 from '../images/ecommerce-gallery-2.jpg';
import EcommerceGallery3 from '../images/ecommerce-gallery-3.jpg';

export const projectsData = [
    {
        id: 1,
        title: 'Nexeus',
        category: 'Web Application',
        image: NexeusImage,
        homeLive: "https://poojavenkatesh3.github.io/budget-app/", 
        galleryImages: [
            { image: NexeusGallery1, description: 'Nexeus is a real-time bus tracking and route optimization platform designed to simplify urban travel. With Nexeus, users can effortlessly track buses by simply entering the bus number or name, allowing them to know the exact live location of any bus in their area. This ensures passengers no longer waste time waiting at bus stops, as they can plan their journey efficiently based on the bus’s real-time status.' },
            { image: NexeusGallery2, description: 'Apart from live tracking, Nexeus offers a smart route suggestion system. By entering your source and destination, the app provides you with the shortest and most optimal routes. If one route is blocked due to construction or traffic, Nexeus automatically suggests alternative paths. Additionally, the platform integrates municipal updates to keep travelers informed about local events, road closures, and other disruptions that may affect travel. This makes commuting more predictable and stress-free.' },
            { image: NexeusGallery3, description: 'For travelers planning long-distance journeys, Nexeus also provides detailed bus schedules. Users can input their desired destination and time to view all available buses that match their travel window. Whether it’s avoiding traffic jams, staying updated with local roadwork, or finding the best bus at the right time, Nexeus ensures a smooth and efficient travel experience for everyone.' }
        ],
        description: '“Nexeus – Smarter Routes, Faster Journeys, Hassle-Free Travel.”Nexeus is not just an app; it’s a personal travel assistant that combines real-time tracking, route optimization, and live updates into one seamless platform. It’s designed to save time, reduce stress, and enhance the way people travel within cities.',
    },
    {
    id: 2,
    title: 'SmartSphere',
    category: 'Mobile Application',
    image: SmartsphereImage,
    homeLive: "https://poojavenkatesh3.github.io/GlamSphere/",
    galleryImages: [
        { image: SmartsphereGallery1, description: 'SmartSphere allows users to scan cosmetic and skincare products using a built-in barcode scanner. It instantly analyzes the product ingredients and provides a detailed breakdown of each component.' },
        { image: SmartsphereGallery2, description: 'The app identifies harmful chemicals and alerts users about possible skin reactions, while also highlighting beneficial ingredients that nourish the skin. Each product is rated out of 10 based on its safety and effectiveness.' },
        { image: SmartsphereGallery3, description: 'By combining AI-powered analysis and ingredient databases, SmartSphere gives users confidence in their cosmetic choices and helps them avoid products with harmful effects.' }
    ],
    description: '“SmartSphere – Scan. Analyze. Glow.” SmartSphere is an AI-driven cosmetology application that allows users to scan the barcode of skincare and cosmetic products to receive an instant analysis of their chemical composition. The app classifies ingredients as beneficial or harmful, provides safety warnings, and rates each product on a scale of 1 to 10. It educates users about the effects of the chemicals on their skin and guides them toward safe and effective beauty products. With SmartSphere, skincare decisions become smarter, safer, and more transparent.',
},

    {
    id: 3,
    title: 'To-Do List',
    category: 'Full-Stack Web Application',
    image: ToDoImage,
    homeLive: "https://poojavenkatesh3.github.io/To-Do-List/",
    galleryImages: [
        { image: ToDoGallery1, description: 'The To-Do List app offers a sleek interface where users can create, organize, and prioritize tasks with ease. Its design ensures a distraction-free experience.' },
        { image: ToDoGallery2, description: 'Each task can be marked as completed or edited, and the interactive UI updates dynamically to reflect progress. The app makes daily planning seamless.' },
        { image: ToDoGallery3, description: 'Tasks are stored securely in a database, ensuring persistence across sessions. The app is responsive, making it usable across all devices.' }
    ],
    description: '“To-Do List – Plan Smart, Work Smart.” Unlike basic task managers, this To-Do List is a full-stack application that connects to a MongoDB database, ensuring that all tasks are securely saved and retrieved even after closing the app. Users can add, edit, delete, and mark tasks as complete with an intuitive interface that simplifies productivity. Built with a modern stack, this project demonstrates dynamic task management, database integration, and a smooth user experience across devices.',
},


    {
    id: 4,
    title: 'Map Demo',
    category: 'Web Application',
    image: MapDemoImage,
    homeLive: "https://poojavenkatesh3.github.io/map/",
    galleryImages: [
        { image: MapDemoGallery1, description: 'Map Demo is a web-based application showcasing the integration of Google Maps API to create an interactive and user-friendly map experience. It allows users to explore the world map with ease, offering smooth navigation and real-time map rendering.' },
        { image: MapDemoGallery2, description: 'With zoom and drag functionalities, users can navigate through different regions, zoom into cities, or pan across countries. This interactive control enhances the map usability, providing a seamless exploration experience.' },
        { image: MapDemoGallery3, description: 'The project also demonstrates marker placements, basic overlays, and custom map styling, serving as a strong practice ground for understanding APIs, JavaScript, and web integration techniques.' }
    ],
    description: '“Map Demo – Explore. Zoom. Discover.” The Map Demo project is a hands-on lab experiment built using HTML, CSS, and JavaScript. It integrates the Google Maps API to render an interactive world map where users can drag, zoom, and explore any location globally. This project not only demonstrates API usage but also enhances the user experience with smooth map interactions, making it an excellent practice project for mastering JavaScript and API integration.',
    },

    {
    id: 5,
    title: 'Lifestyle',
    category: 'UI/UX Design',
    image: LifestyleImage,
    homeLive: "https://poojavenkatesh3.github.io/lifestyle/",
    galleryImages: [
        { image: LifestyleGallery1, description: 'Lifestyle is a personal digital stylist that helps users enhance their fashion and beauty choices. It intelligently analyzes body shape, height, weight, and other physical features to generate personalized style suggestions.' },
        { image: LifestyleGallery2, description: 'Users can input details like skin undertone, eye color, and hair texture, or simply upload a photo to let the app analyze these features automatically. Lifestyle uses this data to recommend outfits, hairstyles, and makeup styles that suit the individual.' },
        { image: LifestyleGallery3, description: 'Beyond outfit suggestions, the app also advises on accessories, color palettes, and trendy looks to elevate personal style. It combines AI-driven analysis with fashion expertise to help users confidently upgrade their appearance.' }
    ],
    description: '“Lifestyle – Your Digital Stylist.” Lifestyle is an advanced style recommendation platform where users can either enter personal details or upload a photo to receive a full analysis of their body type, face shape, undertone, hair, and eye color. Based on this analysis, Lifestyle suggests the best hairstyles, makeup styles, outfit combinations, and accessory choices that perfectly match the user’s personality. This project bridges technology and fashion, making styling smarter and more accessible.',
},

    {
    id: 6,
    title: 'E-commerce',
    category: 'Web Application',
    image: EcommerceImage,
    homeLive: "https://poojavenkatesh3.github.io/GlamSphere/",
    galleryImages: [
        { image: EcommerceGallery1, description: 'The E-commerce project is a fully functional shopping platform featuring a clean and user-friendly interface. Products are neatly displayed on the homepage, making browsing simple and engaging.' },
        { image: EcommerceGallery2, description: 'Users can view detailed product information, including prices, and add items to their shopping cart with a single click. The cart ensures smooth management of selected items.' },
        { image: EcommerceGallery3, description: 'The platform integrates secure checkout options, making the shopping process safe and reliable. Its responsive design ensures a seamless experience across devices.' }
    ],
    description: '“E-commerce – Shop Smart, Shop Secure.” This project is a basic yet fully functional online store where users can browse products, view details, and add them to their cart effortlessly. The platform provides a straightforward shopping experience with secure checkout and smooth navigation, making it a strong foundation for building scalable e-commerce solutions.',
},

];