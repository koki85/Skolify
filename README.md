# Skolify: Higher-Education Guidance Website Proposal

## Student information

- **Student:** Keleboqile Mashigo
- **Student number:** st10538157
- **Module:** WEDE5020 Portfolio Submission

## Project overview

Skolify is a front-end website project proposing a central starting point for South African matric learners exploring higher-education options. Its intended scope includes university and course information, application guidance, and links to potential funding opportunities.

The current repository is a small demonstration of that concept, not a live admissions or funding service. Its sample content is not comprehensive or verified as current. Learners should confirm admission requirements, closing dates, and funding details directly with the relevant institutions and providers.

## Problem, audience, and objectives

Learners may need to consult multiple sources to compare institutions, courses, application requirements, and funding opportunities. Skolify aims to make that research easier to navigate through a clear, responsive website.

The intended audience is South African matric learners and recent school graduates researching further study. The project objectives are to:

1. Present higher-education guidance in an accessible, organised format.
2. Provide ways to explore sample university and course listings.
3. Offer clear pathways to enquiry and contact information.
4. Develop a responsive front-end that can be extended with verified information and functional services.

## Scope and current implementation

| Page | Current content or behaviour |
|---|---|
| Home (`index.html`) | Introductory content, a small JavaScript-based sample search, FAQ accordions, and an image gallery with a lightbox. |
| About (`about.html`) | Project introduction and a representative image. |
| Universities & Courses (`services.html`) | Overview cards describing proposed guidance services. |
| Enquiry (`enquiry.html`) | Enquiry form with client-side validation and a simulated confirmation. |
| Contact (`contact.html`) | Contact form with client-side validation and a map area intended for Leaflet/OpenStreetMap. |

The forms do not send or store submissions; their confirmation is simulated in the browser. Search results are a small sample stored in `js/script.js`, not live university or course data. The contact page's map is not fully configured: the Leaflet script references need valid package file URLs before the map can initialize.

## Technologies and project structure

- **HTML5** for page structure and content.
- **CSS** for layout, colours, and responsive presentation. Most pages currently use embedded styles; standalone stylesheets are also present.
- **Vanilla JavaScript** for the home-page interactions and demo form validation.
- **Leaflet and OpenStreetMap** are intended for the contact-page map but require correct Leaflet asset configuration.

```text
.
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── js/
│   └── script.js
├── css/
│   └── styles.css
├── style.css
├── images/
│   └── Skolify-image.svg
├── robots.txt
├── sitemap.xml
├── CHANGELOG.md
└── README.md
```

## Run locally

There is no build step or package installation for the current static demonstration. Open `index.html` in a browser or serve the project directory with a local static web server. Internet access is needed for externally hosted images and any configured third-party map assets.

## Proposed development roadmap

1. **Content and structure:** organise the guidance pages and identify authoritative sources for institution, course, and funding information.
2. **Responsive presentation:** refine the shared styling and check the pages at mobile, tablet, and desktop sizes.
3. **Interactive features:** improve search, form feedback, and map integration while keeping the experience accessible.
4. **Verified content and launch preparation:** confirm published information with official providers; review accessibility, privacy, and deployment requirements before launch.

These are proposed next steps, not claims that a live data service or production deployment is already in place.

## Alternative concept

A native Android application was considered as an alternative to the responsive website. A native app could support platform-specific features, but it would require users to install and maintain an app and would increase development effort. The web approach is the selected direction for this project because it can be accessed through a browser without installation. A native app is not part of the current implementation.

## Preliminary budget estimate

The following figures are preliminary planning estimates from the proposal, not actual expenditure or supplier quotations:

| Item | Estimate |
|---|---:|
| Development labour | R45,000 |
| Hosting and infrastructure | R0 (assumes free-tier hosting) |
| Licensing and assets | R0 (assumes open-source tools and available assets) |
| **Estimated web-project total** | **R45,000** |
| Native-app alternative (separate estimate) | R120,000 |

Actual costs would depend on the final scope, hosting needs, content verification, and any paid services or assets.

## References

Duckett, J. (2011). *HTML and CSS: Design and build websites*. John Wiley & Sons.

Flanagan, D. (2020). *JavaScript: The definitive guide* (7th ed.). O'Reilly Media.

Frain, B. (2020). *Responsive web design with HTML5 and CSS3* (3rd ed.). Packt Publishing.

Marcotte, E. (2011). *Responsive web design*. A Book Apart.

WHATWG. (n.d.). *HTML Living Standard*. https://html.spec.whatwg.org/

World Wide Web Consortium. (n.d.). *CSS Snapshot*. https://www.w3.org/TR/CSS/
