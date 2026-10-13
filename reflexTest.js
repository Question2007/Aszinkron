const szinek = ["blue", "red", "purple", "orange", "pink"]


const rand_btn = document.getElementById("randNum")

const talalat = document.getElementById("talalat")

const eredmeny = document.getElementById("final");

rand_btn.addEventListener("click", () => {
    rand_btn.disabled = true;
    const random = Math.random() *5 + 5;
    let kattIdo = undefined;
    const reflexTimeout = setTimeout(() => {
        document.body.style.backgroundColor = szinek[Math.floor(Math.random() * szinek.length)];
        kattIdo = new Date();
    }, random * 1000)
    talalat.addEventListener("click", () => {
        if (kattIdo === undefined) {
            eredmeny.innerText = "Túl korán!";
            clearTimeout(reflexTimeout);
        }
        else {
            const elteltIdo = new Date() - kattIdo;
            eredmeny.innerText = `Idő ${elteltIdo} ms`;
        }
    })
})
