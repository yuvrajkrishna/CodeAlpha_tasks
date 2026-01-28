const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        let val = btn.innerText;

        if(val === "C") return display.innerText = "0";

        if(val === "=") return display.innerText = eval(display.innerText.replace("x","*"));

        if(display.innerText === "0") display.innerText = val;
        else display.innerText += val;
    });
});


document.addEventListener("keydown", (e) => {
    let key = e.key;

    if(key === "Escape") {
        display.innerText = "0";
        return;
    }

    if(key === "Backspace") {
        display.innerText = display.innerText.slice(0, -1) || "0";
        return;
    }

    if(key === "Enter") {
        display.innerText = eval(display.innerText.replace("x","*"));
        return;
    }

    // Operators & numbers
    const validKeys = "0123456789+-/*.";
    if(validKeys.includes(key)) {
        if(display.innerText === "0") display.innerText = key;
        else display.innerText += key;
    }
});
