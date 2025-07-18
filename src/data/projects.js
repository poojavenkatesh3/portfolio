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
        galleryImages: [
            { image: NexeusGallery1, description: 'Live bus tracking map with optimized route suggestions.' },
            { image: NexeusGallery2, description: 'User interface showing available buses at nearby stops.' },
            { image: NexeusGallery3, description: 'Mobile view for real-time bus tracking on smartphones.' }
        ],
        description: 'Nexeus is a real-time bus tracking web application...',
    },
    {
        id: 2,
        title: 'Smartsphere',
        category: 'Mobile Application',
        image: SmartsphereImage,
        galleryImages: [
            { image: SmartsphereGallery1, description: 'AI skin analysis interface.' },
            { image: SmartsphereGallery2, description: 'Barcode scanner for cosmetic product validation.' },
            { image: SmartsphereGallery3, description: 'Personalized skincare recommendations.' }
        ],
        description: 'Smartsphere is an AI-powered cosmetology app...',
    },
    {
        id: 3,
        title: 'To-Do List',
        category: 'UI/UX Design',
        image: ToDoImage,
        galleryImages: [
            { image: ToDoGallery1, description: 'Clean interface for adding daily tasks.' },
            { image: ToDoGallery2, description: 'User can mark tasks as completed.' },
            { image: ToDoGallery3, description: 'Delete completed or unnecessary tasks easily.' }
        ],
        description: 'The To-Do List is a simple task management app...',
    },
    {
        id: 4,
        title: 'Map Demo',
        category: 'Web Application',
        image: MapDemoImage,
        galleryImages: [
            { image: MapDemoGallery1, description: 'Fully interactive world map using API.' },
            { image: MapDemoGallery2, description: 'Zoom-in and zoom-out functionality.' },
            { image: MapDemoGallery3, description: 'Marker and map visualization features.' }
        ],
        description: 'Map Demo is an API-integrated web application...',
    },
    {
        id: 5,
        title: 'Lifestyle',
        category: 'UI/UX Design',
        image: LifestyleImage,
        galleryImages: [
            { image: LifestyleGallery1, description: 'Style suggestions based on body shape.' },
            { image: LifestyleGallery2, description: 'Personalized clothing recommendations.' },
            { image: LifestyleGallery3, description: 'Accessory matching for selected outfits.' }
        ],
        description: 'Lifestyle is a smart fashion stylist web application...',
    },
    {
        id: 6,
        title: 'E-commerce',
        category: 'Web Application',
        image: EcommerceImage,
        galleryImages: [
            { image: EcommerceGallery1, description: 'E-commerce product gallery.' },
            { image: EcommerceGallery2, description: 'Shopping cart functionality.' },
            { image: EcommerceGallery3, description: 'Secure payment and checkout process.' }
        ],
        description: 'This E-commerce web application is a complete shopping platform...',
    
    }
];
