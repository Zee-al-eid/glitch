**Documentation for Glitch Website**
### **Introduction**
This document provides an overview of the development process and implementation details for the Glitch Production website. The website provides information about their shows, videos, and merchandise. The website is designed to be responsive and visually engaging, utilizing modern web development techniques.
### **Folder Structure**
The project is organized with the following folder structure: /project-root

`  `|-- index.html

`  `|-- /css

`      `|-- styles.css

`      `|-- amibo.css

`      `|-- responsive.css

`  `|-- /js

`      `|-- script.js

`      `|-- scroll.js

`  `|-- /images

`      `|-- glitch\_logo.png

`      `|-- glitch\_background.jpg

`      `|-- smg4\_background.jpg

`      `|-- plushie1.png

`      `|-- plushie2.png

`      `|-- plushie3.png

`      `|-- plushie4.png

`      `|-- footer.svg

`      `|-- other images…
### **Implementation Details**
#### **HTML (index.html)**
The HTML file serves as the main structure of the website, including headers, sections, and footers. Key elements include:

- **Header**: Contains the logo and navigation menu. On mobile, the menu collapses into a hamburger icon for better usability.
- **Banner**: Two banners (banner1 and banner2) are used to showcase the logo and subscriber count with a cross-fade effect.
- **Videos Section**: Displays videos from YouTube for both Glitch and SMG4 channels, with tab navigation to switch between them.
- **Featured Shows**: Highlights popular shows with images and descriptions.
- **Featured Plushies**: Displays plushie merchandise with images and a call-to-action button.
- **Footer**: Contains the logo and social media links.
#### **CSS**
Three CSS files manage the styling:

1. **styles.css**: Contains the primary styles for the website, including layout, typography, and general styling.
1. **amibo.css**: Contains additional styling specific to the featured plushies section.
1. **responsive.css**: Contains media queries and responsive design adjustments to ensure the website looks good on all screen sizes.
#### **JavaScript**
Two JavaScript files manage the website's interactive features:

1. **script.js**:
- Manages the YouTube API integration for fetching and displaying video data and subscriber count.
- Handles the banner cross-fade effect and animation of the subscriber count.
- Manages tab navigation for the videos section.
- Implements video popups for displaying video details.
- Adds interactive card hover effects in the plushies section.
2. **scroll.js**:
- Utilizes Intersection Observer API to animate elements when they come into view as the user scrolls.
### **API Integration**
The website uses the YouTube Data API to fetch video and subscriber data. Key API interactions include:

- Fetching subscriber count for the Glitch channel and animating the count from zero to the actual number.
- Fetching recent videos for both Glitch and SMG4 channels and displaying them in a grid layout.
- Implementing caching for API responses to reduce the number of API requests and avoid exceeding quota limits.
### **Responsiveness**
To ensure the website is responsive and mobile-friendly, the following steps were taken:

- **Media Queries**: Implemented media queries in responsive.css to adjust the layout for 

  different screen sizes, including collapsing the navigation menu and adjusting grid layouts.

- **Grid Layout**: Used CSS Grid for the plushies section to adapt the number of columns based on 

  the screen size.

- **Flexbox**: Utilized Flexbox for various layout adjustments to ensure elements are properly aligned and spaced.
### **Final Adjustments**
During the final stages of development, several adjustments were made based on feedback:

- Increased the size of plushie images and adjusted their layout to ensure they are well-spaced and properly aligned on mobile devices.
- Fixed issues with the mobile navigation menu, ensuring the hamburger icon is correctly positioned and the menu is accessible.
- Ensured all elements, including banners, videos, and featured sections, are responsive and visually appealing across all devices.
### **Conclusion**
The Glitch website is now fully functional, responsive, and visually engaging. The implementation leverages modern web development techniques to provide a seamless user experience across all devices. The integration with the YouTube API ensures dynamic and up-to-date content, making the website a valuable resource for fans of Glitch
### **Features List**
1. **Responsive Design**:
- The website adapts to different screen sizes and devices using media queries and responsive layouts.
2. **Local Storage Caching**:
- Caches YouTube API responses in local storage to reduce the number of API requests and improve performance.
- Cached data is valid for one hour.
3. **Cross-Fade Banner**:
- Two banners with a smooth cross-fade transition effect.
- The first banner displays the Glitch logo and a welcome message.
- The second banner displays the YouTube play button and subscriber count.
4. **Animated Subscriber Count**:
- Subscriber count animates from zero to the actual number.
- Subscriber count updates dynamically using the YouTube Data API.
5. **Tabbed Videos Section**:
- Tabs to switch between Glitch and SMG4 videos.
- Displays recent videos from both channels using the YouTube Data API.
- Video thumbnails with titles.
6. **Video Popup**:
- Clicking on a video thumbnail opens a popup with an embedded YouTube video player.
- Popup can be closed by clicking the close button.
7. **Featured Shows**:
- Highlighted shows with images, titles, and brief descriptions.
- Interactive hover effects on show cards.
8. **Featured Plushies**:
- Displays plushie merchandise with images and titles.
- Interactive hover effects on plushie cards with animated shadows and glare effects.
9. **Featured Posters**:
- Displays posters with images and titles.
- Interactive hover effects on poster cards with animated shadows and glare effects.

10\.**Interactive Cards**:

- Hover effects on cards in the plushies section with rotation and shadow animations.

11\.**Social Media Links**:

- Social media icons in the footer with animation and hover effects.
- Links to YouTube, Twitter, Instagram, and TikTok.

12\.**Navigation Menu**:

- Collapsible menu on mobile devices with a hamburger icon for easy navigation.

13\.**Scroll Animations**:

- Elements animate into view as the user scrolls using the Intersection Observer API.
- Animations include fading in, dropping from top, sliding in from left/right, and popping into view.

14\.**Custom Scrollbar**:

- Customized scrollbar for a consistent look and feel across different browsers.

15\.**Hover Effects**:

- Interactive hover effects on various elements, including navigation links, social media icons, and featured items.


