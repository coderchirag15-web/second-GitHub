document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact-form");
    const toast = document.querySelector(".toast");

    if (contactForm && toast) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Form reload hone se rokne ke liye

            // Toast message dikhane ke liye 'show' class add karein
            toast.classList.add("show");

            // Form clear karne ke liye
            contactForm.reset();

            // 3 seconds baad toast message hide karne ke liye
            setTimeout(() => {
                toast.classList.remove("show");
            }, 3000);
        });
    }
});