console.log("funguju")

const form = document.querySelector("#registration")
const input = document.querySelector("#email")


const odebirat = (event) => {
    event.preventDefault()
    const email = input.value
    if (input.includes("@") === true) {
        form.textContent = `Děkujeme za zájem o náš newsletter. Brzy vám na váš e-mail ${email} přijde první.`
    } else {
        input.classList.add(".email-error")
    }
}

input.addEventListener("input", (e) => {
    if (input.value === "" && !input.value.includes("@")) {
        input.classList.add(".email-error")
    } else {
        input.classList.remove(".email-error")
    }
})

form.addEventListener("submit", odebirat)
