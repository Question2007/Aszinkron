
function hatterSzinez() {
    document.body.style.backgroundColor = "green";
}

setTimeout(hatterSzinez, 2000);
document.body.style.backgroundColor = "pink"

const idoBekezdes = document.getElementById("ido")
const idoAzonosito = setInterval(() =>{
    idoBekezdes.textContent = new Date().toLocaleString();
}, 500)


document.getElementById("megfagy").addEventListener("click", function() {
    setTimeout(() => {
        document.body.style.color = "yellow";
    }, 5000)
})

document.getElementById("stop").addEventListener("click", () => {
    clearInterval(idoAzonosito);
})