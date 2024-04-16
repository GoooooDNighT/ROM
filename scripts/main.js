const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active")
    })
})

// scroll

document.getElementById("main-action-button").onclick = function () {
    document.getElementById("questionnaire").scrollIntoView({behavior: "smooth"})
} //плавный скролл

let links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"})
    }
}

