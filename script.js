
function createDivs(className){
    let counterValue = 0;
    const div = document.createElement("div");
    div.className = className;
    div.style.width = "100px";
    div.style.height = "150px";
    div.style.backgroundColor = "blue"
    const span = document.createElement("span");
    span.className = 'counter';
    span.innerText = 0;

    const plus = document.createElement('div')
    plus.className = "plus";
    plus.setAttribute("data-buttons", "+");
    plus.innerText = '+';
        
    const minus = document.createElement('div');
    minus.className = "minus";
    minus.setAttribute("data-buttons", "-");
    minus.innerText = '-';

    div.addEventListener("click", function (event) {
        if (event.target.tagName.toLowerCase() !== "div") {
            return;
        }

        let count = this.querySelector("span");

        if (event.target.getAttribute("data-buttons") === "+") {
            count.innerText = Number(count.innerText) + 1;
        } else if (event.target.getAttribute("data-buttons") === "-") 
            count.innerText = Number(count.innerText) - 1;
        }
    )

    div.appendChild(plus);
    div.appendChild(minus);
    div.appendChild(span);

    return div
};

for(let i = 0; i <=5; i++){
    document.body.appendChild(createDivs(`div_plus_minus`));

};

