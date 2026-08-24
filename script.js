// header
// body
// ================= CONTACT FORM MODAL + COOKIES =================
const modal = document.querySelector("#contact-modal");
const openBtn = document.querySelector("#action-btn");
const closeBtn = document.querySelector("#modal-close");
const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#cf-name");
const phoneInput = document.querySelector("#cf-phone");

function getCookie(name) {
    let cookies = document.cookie.split("; ")
    for (let i = 0; i < cookies.length; i += 1) {
        let parts = cookies[i].split("=")
        if (parts[0] == name) {
            return parts[1]
        }
    }
    return null
}

function setCookie(name, value) {
    document.cookie = `${name}=${value}; max-age=31536000`
}

function openModal() {
    modal.classList.add("active");

    let savedName = getCookie("cf-name")
    let savedPhone = getCookie("cf-phone")

    if (savedName) {
        nameInput.value = savedName
    }
    if (savedPhone) {
        phoneInput.value = savedPhone
    }
}

function closeModal() {
    modal.classList.remove("active");
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
    if (e.target == modal) {
        closeModal();
    }
});

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = nameInput.value;
    let phone = phoneInput.value;

    setCookie("cf-name", name)
    setCookie("cf-phone", phone)

    alert(`Thank you, ${name}! We will contact you soon.`);
    contactForm.reset();
    closeModal();
});
console.log(document.cookie)

// ================= FITNESS PLAN  =================
class Plan {
    constructor(name, price, features, featured = false, badge = "") {
        this.name = name
        this.price = price
        this.features = features
        this.featured = featured
        this.badge = badge
    }

    toHtml() {
        let featuresHtml = ""
        for (let i = 0; i < this.features.length; i += 1) {
            featuresHtml += `<li>${this.features[i]}</li>`
        }

        let badgeHtml = this.badge ? `<span class="badge">${this.badge}</span>` : ""
        let cardClass = this.featured ? "pricing-card featured" : "pricing-card"

        return `<div class="${cardClass}">
                    ${badgeHtml}
                    <h3 class="plan-name">${this.name}</h3>
                    <div class="plan-price">$${this.price}<span>/month</span></div>
                    <ul class="plan-features">${featuresHtml}</ul>
                    <button class="plan-btn">Choose Plan</button>
                </div>`
    }
}

let plans = [
    new Plan(
        "Standard",
        39,
        [
            "Unlimited gym access",
            "Group classes (Yoga, Zumba, HIIT)",
            "Basic nutrition consultation",
            "Progress tracking app",
            "1 free PT session/month"
        ],
        true,
        "Most Popular"
    ),
    new Plan(
        "Premium",
        69,
        [
            "Unlimited gym access",
            "4 personal training sessions/month",
            "In-depth nutrition consultation",
            "Sauna & spa access",
            "Priority class booking"
        ]
    )
]

let pricingContainer = document.querySelector("#pricing-container");

for (let i = 0; i < plans.length; i += 1) {
    pricingContainer.innerHTML += plans[i].toHtml()
}
// footer
// ================= ICON REDIRECT =================
const facebookIcon = document.querySelector("#facebook-icon");
const instagramIcon = document.querySelector("#instagram-icon");

facebookIcon.addEventListener("click", function () {
    location.assign("https://www.facebook.com/")
});

instagramIcon.addEventListener("click", function () {
    location.assign("https://www.instagram.com/")
});
document.querySelector("#year").innerHTML = '2025 - ' + new Date().getFullYear();