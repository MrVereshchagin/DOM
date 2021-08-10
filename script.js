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
    const curDate = new Date();
    const curYear = curDate.getFullYear();
    return `
        <div class = "autoCard">
            <h2>${brand.toUpperCase()} ${year}</h2>
            <p>Автомобиль ${brand.toUpperCase()}  - ${year} года. Возраст авто - ${curYear - year} лет.</p>
            <p>Цвет: ${color}</p>
            <button type="button" class="btn">Удалить</button>
        </div>
    `;
}

const carsDiv = document.createElement('div');
carsDiv.classList.add("autos");

const carsList = [
    {brand: "Tesla", year: 2015, color: "red"},
    {brand: "Lexus", year: 2016, color: "silver"},
    {brand: "Nissan", year: 2012, color: "black"},
]

const carsHTML = carsList.map(car => {
    return generateAutoCard (car.brand, car.color, car.year);
}).join("");

carsDiv.innerHTML = carsHTML;

div.insertAdjacentElement("beforebegin", carsDiv);

const buttons = document.querySelectorAll(".btn");

function handleClick(e) {
    const currentButton = e.currentTarget;
    //currentButton.parentElement.remove();
    currentButton.closest(".autoCard").remove();
}

buttons.forEach(button => {
    button.addEventListener("click", handleClick);
})

