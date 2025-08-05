const input = document.querySelector("input")
const span = document.querySelector("span")
const button = document.querySelector("button")

button.addEventListener("click", (x) => {
    if (x.target.innerHTML == "😎") x.target.innerHTML = "😊"
    else x.target.innerHTML = "😎"

    if (input.type == "text") input.type = "password"
    else input.type = "text"
})

input.addEventListener("input", (X) => {
    span.innerHTML = X.target.value.length + "/10";
    const num = +span.innerHTML.split("/")[0]
    if (num > 10) span.style.color = "red"
    else span.style.color = "black"

})