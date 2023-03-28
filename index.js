console.log("funguju")

const form = document.querySelector("#registration")
const info = document.querySelector("#email")

let check = (e) => {
    if (info.value === "" || !info.value.includes("@")) {
        info.classList.add("email-error")
    } else {
        info.classList.remove("email-error")
    }
}

info.addEventListener("input", check)

let odebirat = (event) => {
    event.preventDefault()
    const email = info.value
    form.textContent = `Děkujeme za zájem o náš newsletter. Brzy vám na váš e-mail ${email} přijde první.`
}

form.addEventListener("submit", odebirat)

