const colors = ['blue', 'green', 'yellow'];

function createDivs(colors, className) {
    const div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.className = className;
    div.style.backgroundColor = colors[0];

    div.addEventListener("click", function () {
        let i = colors.findIndex(e => e === div.style.backgroundColor) + 1;
        if (i > colors.length - 1) {
            i = 0;
        }
        div.style.backgroundColor = colors[i];
    })

    return div;
}
for(let i = 0; i <=5; i++){
        const div = createDivs(colors,`div_color`);
        document.body.appendChild(div)
    };
