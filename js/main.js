/** 

* WEDE5020 Portfolio Enhancement Script
* Core Component: Production Portfolio Lightbox Engine
*/

document.addEventListener("DOMContentLoaded", () => {
initializeLightbox();
}); 

function initializeLightbox() {
// 1. Create structural DOM overlay elements dynamically
const lightboxOverlay = document.createElement("div");
lightboxOverlay.id = "lightbox-overlay"; 

// Style overlay programmatically to guarantee layout integrity
Object.assign(lightboxOverlay.style, {
position: "fixed",
top: "0",
left: "0",
width: "100%",
height: "100%",
backgroundColor: "rgba(0, 0, 0, 0.85)",
display: "none",
justifyContent: "center",
alignItems: "center",
zIndex: "10000",
cursor: "pointer"
});

const lightboxImage = document.createElement("img");
lightboxImage.id = "lightbox-image";
Object.assign(lightboxImage.style, {
maxWidth: "90%",
maxHeight: "80%",
borderRadius: "4px",
boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
transition: "transform 0.3s ease",
objectFit: "contain"
});

// Assemble DOM nodes
lightboxOverlay.appendChild(lightboxImage);
document.body.appendChild(lightboxOverlay);

// 2. Select targets and bind operational event triggers
// Finds any image inside a container with class "gallery" or "portfolio"
const galleryTargets = document.querySelectorAll(".gallery img, .portfolio img, [data-lightbox]");

galleryTargets.forEach(target => {
target.style.cursor = "pointer";
target.addEventListener("click", (e) => {
e.preventDefault();
lightboxImage.src = target.src;
lightboxImage.alt = target.alt || "Portfolio Preview";
lightboxOverlay.style.display = "flex";
});
});

// 3. Dismissal handling interface triggers
lightboxOverlay.addEventListener("click", () => {
lightboxOverlay.style.display = "none";
lightboxImage.src = ""; // Flush buffer allocation
});

}