const szinek = ["blue", "red", "purple", "orange", "pink"]

const talalat = document.getElementById("talalat")

const rand_btn = document.getElementById("randNum")

function getRandomIntInclusive(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}


rand_btn.addEventListener("click", () => {
    let randNum = getRandomIntInclusive(5, 10)
    const timeoutId = setTimeout(() => {
        document.body.style.backgroundColor = szinek[Math.floor(Math.random() * szinek.length)];
        let inditas = new Date();
    }, randNum *1000)
})

talalat.addEventListener("click", () => {
    let kattintas = new Date();
    clearInterval(timeoutId)
    let timeBetween = kattintas - inditas
    document.getElementById("final").textContent = timeBetween
})

