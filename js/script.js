/* ==========================================================================
SKOLIFY SYSTEM MASTER JAVASCRIPT ARCHITECTURE ENGINE (PART 3)
========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initAccordions();
    initDynamicSearch();
    initLightboxGallery();
    initFormValidation();
});

/* --------------------------------------------------------------------------
   1. INTERACTIVE ACCORDIONS ENGINE
   -------------------------------------------------------------------------- */
function initAccordions() {
    const headers = document.querySelectorAll(".accordion-header");
    headers.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            const isOpen = content.style.display === "block";
            
            document.querySelectorAll(".accordion-content").forEach(c => c.style.display = "none");
            content.style.display = isOpen ? "none" : "block";
        });
    });
}

/* --------------------------------------------------------------------------
   2. DYNAMIC CONTENT SEARCH ENGINE
   -------------------------------------------------------------------------- */
const platformData = [
    { title: "University of Johannesburg", category: "University", desc: "Public university located in Johannesburg, South Africa." },
    { title: "University of Pretoria", category: "University", desc: "Multi-campus public research university in Pretoria." },
    { title: "University of Cape Town", category: "University", desc: "Highest ranked public research university in Africa." },
    { title: "Information Technology", category: "Course", desc: "BSc and Diploma tracks focusing on development, networks, and databases." },
    { title: "Business Management", category: "Course", desc: "Degrees covering management principles, economics, and logistics." }
];

function initDynamicSearch() {
    const searchInput = document.getElementById("search-input");
    const resultsContainer = document.getElementById("dynamic-results");
    
    if (!resultsContainer) return;

    renderListings(platformData, resultsContainer);

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = platformData.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.desc.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        );
        renderListings(filtered, resultsContainer);
    });
}

function renderListings(items, container) {
    container.innerHTML = "";
    if (items.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #475569;">No match found.</p>`;
        return;
    }
    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "listing-card";
        card.innerHTML = `
            <span style="font-size: 0.75rem; font-weight: bold; background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius:4px;">${item.category}</span>
            <h3 style="margin: 5px 0; color: #12356b;">${item.title}</h3>
            <p style="margin: 0; font-size: 0.9rem; color: #172554;">${item.desc}</p>
        `;
        container.appendChild(card);
    });
}

/* --------------------------------------------------------------------------
   3. VISUAL LIGHTBOX MODAL CONFIGURATION
   -------------------------------------------------------------------------- */
function initLightboxGallery() {
    const items = document.querySelectorAll(".gallery-item img");
    if (items.length === 0) return;

    const overlay = document.createElement("div");
    overlay.id = "lightbox-overlay";
    overlay.innerHTML = `
        <span id="lightbox-close">&times;</span>
        <img id="lightbox-image" src="" alt="Popup image view">
        <div id="lightbox-caption"></div>
    `;
    document.body.appendChild(overlay);

    const lightboxImg = document.getElementById("lightbox-image");
    const lightboxCap = document.getElementById("lightbox-caption");
    const closeBtn = document.getElementById("lightbox-close");

    items.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxCap.textContent = img.alt;
            overlay.classList.add("active");
        });
    });

    closeBtn.addEventListener("click", () => overlay.classList.remove("active"));
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.classList.remove("active");
    });
}

/* --------------------------------------------------------------------------
   4. CLIENT SIDE SECURITY VALIDATION AND ASYNCHRONOUS AJAX pipeline
   -------------------------------------------------------------------------- */
function initFormValidation() {
    const enquiryForm = document.getElementById("enquiry-form");
    const contactForm = document.getElementById("contact-form");

    if (enquiryForm) enquiryForm.addEventListener("submit", (e) => processForm(e, "enquiry"));
    if (contactForm) contactForm.addEventListener("submit", (e) => processForm(e, "contact"));
}

function processForm(event, type) {
    event.preventDefault();
    const form = event.target;
    let valid = true;

    form.querySelectorAll(".form-group").forEach(g => g.classList.remove("error"));

    const name = form.querySelector("[name='fullName']");
    const email = form.querySelector("[name='email']");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.value.trim()) { setErr(name); valid = false; }
    if (!email.value.trim() || !emailRegex.test(email.value.trim())) { setErr(email); valid = false; }

    if (type === "enquiry") {
        const tier = form.querySelector("[name='tier']");
        const spec = form.querySelector("[name='specification']");
        if (tier.value === "") { setErr(tier); valid = false; }
        if (!spec.value.trim()) { setErr(spec); valid = false; }
        
        if (valid) {
            triggerAjax(form, `<strong>Enquiry Submitted!</strong><br>Custom response processing based on stream choice: ${tier.value}. Information compiled.`);
        }
    } else if (type === "contact") {
        const msg = form.querySelector("[name='message']");
        if (!msg.value.trim()) { setErr(msg); valid = false; }
        
        if (valid) {
            triggerAjax(form, `<strong>Message Sent via AJAX!</strong><br>Thank you ${name.value}. General message data successfully bundled to the client interface.`);
        }
    }
}

function setErr(el) {
    el.closest(".form-group").classList.add("error");
}

function triggerAjax(form, messageHtml) {
    const btn = form.querySelector("button[type='submit']");
    btn.disabled = true;
    btn.textContent = "Processing Asynchronously...";

    setTimeout(() => {
        const checkOld = form.querySelector(".ajax-status");
        if (checkOld) checkOld.remove();

        const status = document.createElement("div");
        status.className = "ajax-status";
        status.style.cssText = "background: #dcfce7; color: #15803d; border: 1px solid #16a34a; padding: 15px; border-radius: 6px; margin-top: 15px;";
        status.innerHTML = messageHtml;
        
        form.appendChild(status);
        btn.disabled = false;
        btn.textContent = "Submission Complete";
        form.reset();
    }, 1000);
}
