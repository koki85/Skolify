### WEDE5020 Web Development Introduction - Portfolio of Evidence

### Student Details

* **Student Name:** Keleboqile Mashigo
* **Student Number:** st10538157

### Technical Project Proposal Addendum & System Architecture

### 1. Updated Current Analysis & Scope Definition

Following the initial feedback evaluation, the operational scope of this project has been streamlined into two core functional prototypes designed to address unique target audience requirements. This system layout ensures clear architectural differentiation between direct inquiries and general public interaction channels. 

### 2. Comprehensive File and Folder Structure

To resolve historical file organization critiques, the application follows an industry-standard modular folder directory structure. This separates layout presentation files, algorithmic scripts, stylesheets, and optimized raw assets into distinct, predictable locations. 

text

├── index.html                  # Core portal landing homepage
├── enquiry.html                # Interactive transaction & services evaluation panel
├── contact.html                # General public correspondence platform
├── css/
│   └── styles.css              # Main external production desktop and responsive stylesheet
├── js/
│   ├── main.js                 # Primary global core UI interactive logic scripts
│   ├── map.js                  # Geolocation GIS mapping rendering API execution layer
│   └── validation.js           # Production form security, handling, and AJAX submission pipeline
├── assets/
│   ├── images/
│   │   ├── optimized-hero.webp # Scale-responsive compressed graphic hero banner
│   │   ├── optimized-thumb.png # Lightbox target responsive display graphic asset
│   │   └── gallery/            # Grouped source directories for modular portfolio views
│   └── documentation/
│       └── sitemap.xml         # Production index mapping schema
└── robots.txt                  # Production search engine crawler rule index configuration

Use code with caution.

### Comprehensive Post-Feedback System Changelog (Part 2 Implementation)

This log outlines the systematic code changes made to address all deficiencies highlighted in the Part 2 assessment feedback to elevate the application to perfect quality standards. 

### 1. Responsive Design Implementation for Visual Media Asset Vectors

* **Deficiency Identified:** 0/5 Marks received on Responsive Design: Adjustment - Images. Visual assets failed to adapt, scale fluidly, or match adaptive breakpoints across mobile, tablet, and widescreen views.
* **Correction Implemented:** Removed all fixed pixel dimensions (width="", height="") from global structural markup. Rewrote CSS rules within styles.css to introduce fluid media scaling configurations: 

css

img {
    max-width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
}

Use code with caution.
* **Result:** All media vectors adaptively scale instantly to container sizes across any viewport dimension without stretching or distorting aspect ratios.

### 2. Layout Structure & Typography Spatial Breakpoint Realignment

* **Deficiency Identified:** 3/5 and 4/5 Marks received on CSS Layout Structure and Responsive Layout/Typography adjustments. Minor layout compression anomalies and text overlap occurred during breakpoint downscaling on small screen viewports.
* **Correction Implemented:** Replaced legacy rigid positioning properties with native CSS Flexbox and explicit CSS Grid structures. Restructured absolute layout breaking points using standardized, mobile-first responsive media queries: 

css

@media screen and (max-width: 768px) { ... }
@media screen and (max-width: 480px) { ... }

Use code with caution.

Migrated static text sizing units (px) to fluid relative units (rem, em, vw). Adjusted line heights (line-height: 1.5;) and layout column scaling templates globally to guarantee text reads legibly across mobile viewports.
* **Result:** Visual structural grid adapts flawlessly to device resizing, eliminating content overflows or text collisions.

### Academic Source and Production References (APA 7th Edition)

Duckett, J. (2011). *HTML and CSS: Design and build websites*. John Wiley & Sons. 

Flanagan, D. (2020). *JavaScript: The definitive guide* (7th ed.). O'Reilly Media. 

Frain, B. (2020). *Responsive Web Design with HTML5 and CSS3* (3rd ed.). Packt Publishing. 

Marcotte, E. (2011). *Responsive web design*. A Book Apart. 

World Wide Web Consortium. (2023). *HTML5 living standard*. https://html.spec.whatwg.org/ 

World Wide Web Consortium. (2023). *Cascading style sheets level 3 (CSS3) specification*. https://www.w3.org/Style/CSS/