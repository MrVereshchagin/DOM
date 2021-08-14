"use strict"

const div = document.createElement("div");
div.classList.add("wrapper");

const body = document.body;
body.insertAdjacentElement("afterbegin", div);

const header = document.createElement("h1");
header.textContent = "DOM (Document Object Model)";

div.insertAdjacentElement("beforebegin", header);

const list = `
    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>
`;

div.innerHTML = list;

const image = document.createElement("img");
image.src = "https://picsum.photos/200";
image.width = 240;
image.classList.add("super");
image.alt = "Super Man";

div.appendChild(image);

const pDiv = `
    <div class = "pDiv">
        <p>First</p>
        <p>Second</p>
    </div>
`;

const ul = document.querySelector("ul");
ul.insertAdjacentHTML("beforebegin", pDiv);

const div2 = document.querySelector(".pDiv");
div2.children[1].classList.add("text");

div2.firstElementChild.remove();

const generateAutoCard = (brand, color, year) => {
    const date = new Date();
    const curDate = date.getFullYear();
    return `
    <div class="autoCard">
        <h2> ${brand.toUpperCase()} ${year}</h2>
        <p>Автомобиль ${brand.toUpperCase()} - ${year} года. Возраст авто - ${curDate - year} лет.</p>
        <button>Delete</button>
    </div>
    `;
};

const div3 = document.createElement("div");
div3.classList.add("autos");

const carsList = [
    {brand: 'Tesla', year: 2015, color: 'Красный'},
    {brand: 'Lexus', year: 2016, color: 'Серебристый'},
    {brand: 'Nissan', year: 2012, color: 'Черный'},
];

const carItems = carsList.map(car => {
    return generateAutoCard(car.brand, car.color, car.year);
}).join("");

div3.innerHTML = carItems;

div.insertAdjacentElement("beforebegin", div3);

const buttons = document.querySelectorAll("button");

function deleteButton(e) {
    const currentButton = e.currentTarget;
    currentButton.closest(".autoCard").remove();
};

buttons.forEach(button => {
    button.addEventListener("click", deleteButton);
});