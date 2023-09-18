const firstQuote = document.body.querySelector(".firstTextPage");
const setQuote = document.body.querySelector("#generate-quote");
setQuote.addEventListener("click", () => {
    firstQuote.textContent = "Can I be excused for the rest of my life?"
});