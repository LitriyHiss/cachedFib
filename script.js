const result = document.getElementById("result");
const quickBtn = document.getElementById("quickBtn");
const slowBtn = document.getElementById("slowBtn");

const worker = new Worker("fib_worker.js");

const getFib = (n) =>{
    return new Promise(resolve => {
        worker.postMessage(n);
        worker.onmessage = (event) => {
            resolve(event.data)
        };
    })
}

quickBtn.addEventListener("click", () => {
    const message = document.createElement("div");
    message.innerHTML = "Quick Msg";
    result.appendChild(message);
})

slowBtn.addEventListener("click", async() => {
    const fibo = await getFib(41);

    const block = document.createElement("div");
    block.innerHTML = fibo;
    result.appendChild(block);
})

