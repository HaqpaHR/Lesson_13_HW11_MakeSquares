function createDivs(className){
    let counterValue = 0;
    const div = document.createElement("div");
    div.className = className;
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.backgroundColor = "blue"
    const span = document.createElement("span");
    span.className = 'counter';
    span.innerText = 0;
    div.appendChild(span);

    return div
};

for(let i = 0; i <=5; i++){
    document.body.appendChild(createDivs(`div_plus`));

};

[...document.getElementsByTagName('div')].forEach(e =>
    e.addEventListener('click', ()=> e.innerText = ++e.innerText ) );
