
setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("content").style.display = "block";
}, 2000 );

const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
    const btn = acc.querySelector(".accordion-btn");
    const content = acc.querySelector(".accordion-content");

    btn.addEventListener("click", () => {
        content.classList.toggle("show");
    });
});
