const input_id = document.querySelector(".id>.idInput>input");
const button_id = document.querySelector(".id>.idInput>button");
const check_id = document.querySelector(".id>.check")

const input_pw = document.querySelector(".password>input");
const check1_pw = document.querySelector(".check1")
const check2_pw = document.querySelector(".check2")
const check3_pw = document.querySelector(".check3")


input_id.addEventListener("input", (x) => {
    if (x.target.value.length >= 6 && x.target.value.length <= 20) {
        button_id.style.color = "white";
        button_id.style.backgroundColor = "black";
        check_id.style.color = "green"
    } else {
        button_id.style.color = "rgb(212, 212, 212)"
        button_id.style.backgroundColor = "gray"
        check_id.style.color = "black"
    }
})


input_pw.addEventListener("input", (x) => {
    // check1
    const hasNum = "0123456789".split("").some(char => x.target.value.includes(char));
    check1_pw.style.color = hasNum ? "green" : "black"

    // check2
    const hasCh2 = "!@#".split("").some(char => x.target.value.includes(char))
    check2_pw.style.color = hasCh2 ? "green" : "black"

    // check3
    const Ch3 = x.target.value.length >= 8 && x.target.value.length <= 20;
    check3_pw.style.color = Ch3 ? "green" : "black"
})
