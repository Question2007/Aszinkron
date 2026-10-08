const loadingBar = document.getElementById("loadingBar")

const retry = document.getElementById("retry")

let ido = 1
let pressed = false

if (!pressed) {
    const intervalId = setInterval(() => {
        loadingBar.textContent = "Loading: " + ido * "*";
        if (ido == 1) {
            loadingBar.textContent = "Loading: " + "*";
        }
        else if (ido == 2) {
            loadingBar.textContent = "Loading: " + "**";
        }
        else {
            loadingBar.textContent = "Loading: " + "***";
        }
        ido += 1
        if (ido > 3) {
            ido = 1;
        }
    }, 1000)
    setTimeout(() => {
        clearInterval(intervalId);
        loadingBar.textContent = "Loading failed";
    }, 15000)

}

retry.addEventListener("click", () => {
    pressed = true
    let ido = 1
    const intervalId = setInterval(() => {
        loadingBar.textContent = "Loading: " + ido * "*";
        if (ido == 1) {
            loadingBar.textContent = "Loading: " + "*";
        }
        else if (ido == 2) {
            loadingBar.textContent = "Loading: " + "**";
        }
        else {
            loadingBar.textContent = "Loading: " + "***";
        }
        ido += 1
        if (ido > 3) {
            ido = 1;
        }
    }, 1000)
    setTimeout(() => {
        clearInterval(intervalId);
        loadingBar.textContent = "Loading failed";
    }, 15000)

})