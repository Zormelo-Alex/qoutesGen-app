console.log("DOM")
const url = "https://api.quotable.io/random"

//selectors
const btn = document.getElementById("btn")
const quotecontent = document.querySelector(".content p")
const author = document.querySelector(".author h3")
const container = document.querySelector(".container")
const errmessage = document.querySelector(".quote")

const getQuote = () => {
    container.classList.add("fade");
    fetch(url)
    .then(response => response.json())
    .then(data => {
        container.classList.remove("fade");
        quotecontent.textContent = `" ${data.content} "`
        author.textContent = data.author
        })
    .catch(err => {
        console.log(err.message)
        errmessage.textContent = `Sorry something went wrong... ${err.message}`
    })
}

getQuote()
btn.addEventListener("click", getQuote);