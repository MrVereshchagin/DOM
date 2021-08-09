"use strict"

const body = document.body;
const div = document.createElement("div");
div.classList.add("wrapper");
body.appendChild(div);

const header = document.createElement("h1");
header.innerText = "Hello my friend!";
div.insertAdjacentElement("beforebegin", header);

const list =   `
    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>
`;

div.innerHTML = list;

const img = document.createElement('img');
img.src = "https://picsum.photos/240";
img.width = 240;
img.classList.add("super");
img.alt = "Super Man";

div.appendChild(img);

const elemHTML = `
    <div class = "pDiv">
        <p>Paragrath 1</p>
        <p>Paragrath 2</p>
    </div>
`;

const ulList = div.querySelector("ul");
ulList.insertAdjacentHTML("beforebegin", elemHTML);

const pDiv = document.querySelector(".pDiv");
pDiv.children[1].classList.add("text");

pDiv.firstElementChild.remove();

const generateAutoCard = (brand, color, year) => {
    return `
        <div class = "autoCard">
            <h2>BRAND YEAR</h2>
            <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARs лет.</p>
        </div>
    `;
}

const carsDiv = document.createElement('div');
carsDiv.classList.add("autos");

console.log(carsDiv);



