const szinek = ["blue", "red", "purple", "orange", "pink"]

document.body.style.backgroundColor = szinek[Math.floor(Math.random() * szinek.length)];

setInterval(() => {
    document.body.style.backgroundColor = szinek[Math.floor(Math.random() * szinek.length)];
}, 10000)
