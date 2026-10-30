/** 

* WEDE5020 Portfolio Enhancement Script
* Core Component: Production Form Handling & AJAX Validation Engine
*/

document.addEventListener("DOMContentLoaded", () => {
initializeFormValidation();
}); 

function initializeFormValidation() {
const structuralForms = document.querySelectorAll("form"); 

structuralForms.forEach(formInstance => {
formInstance.setAttribute("novalidate", true); // Disable default browser tooltips to use custom logic
formInstance.addEventListener("submit", (event) => {
    event.preventDefault(); // Stop immediate native page reload
    
    let databaseValidationFlag = true;
    const inputElements = formInstance.querySelectorAll("input[required], textarea[required], select[required]");

    inputElements.forEach(field => {
        const structuralParent = field.closest(".form-group") || field.parentElement;
        
        // Reset historical error states cleanly
        if (structuralParent) {
            structuralParent.classList.remove("error");
        }

        // Check text input and textarea values
        if (!field.value.trim()) {
            databaseValidationFlag = false;
            if (structuralParent) {
                structuralParent.classList.add("error");
            }
        }

        // Specialized checks for email input structures
        if (field.type === "email" && field.value.trim()) {
            const structuralEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+\$/;
            if (!structuralEmailRegex.test(field.value.trim())) {
                databaseValidationFlag = false;
                if (structuralParent) {
                    structuralParent.classList.add("error");
                }
            }
        }
    });

    // If form inputs match all rules, simulate secure AJAX payload submission
    if (databaseValidationFlag) {
        const submissionButton = formInstance.querySelector("button[type='submit']");
        const initialButtonText = submissionButton ? submissionButton.textContent : "Submit";

        if (submissionButton) {
            submissionButton.disabled = true;
            submissionButton.textContent = "Processing Submission...";
        }

        // Emulate standard asynchronous processing latency
        setTimeout(() => {
            alert("Form transactions validated and processed successfully via simulated AJAX pipeline!");
            formInstance.reset(); // Clear form states safely
            
            if (submissionButton) {
                submissionButton.disabled = false;
                submissionButton.textContent = initialButtonText;
            }
        }, 1500);
    }
});

});

}