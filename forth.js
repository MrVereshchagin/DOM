const div = document.createElement("div");
div.classList.add("wrapper");
const body = document.body;
body.appendChild(div);

const header = document.createElement("h1");
header.textContent = "DOM (Document Object Model)";
div.insertAdjacentElement("beforebegin", header);

const list = `
    <ul>
        <li>один</li>
        <li>два</li>
        <li>три</li>
    </ul>
`;

div.insertAdjacentHTML("afterbegin", list);

const image = document.createElement("img");
image.src = "https://picsum.photos/200";
image.width = 240;
image.classList.add("super");
image.alt = "Super Man";

div.insertAdjacentElement("beforeend", image);

const div2 = `
    <div class="pDiv">
        <p>Первый</p>
        <p>Второй</p>
    </div>
`;

const ul = document.querySelector("ul");
ul.insertAdjacentHTML("beforebegin", div2);

const pDiv = document.querySelector(".pDiv");
pDiv.children[1].classList.add("text");

pDiv.firstElementChild.remove();

function generateAutoCard(brand, color, year) {
    const date = new Date();
    const curDate = date.getFullYear();
    return `
        <div class="autoCard">
            <h2>${brand.toUpperCase()} ${year}</h2>
            <p>Автомобиль ${brand.toUpperCase()} - ${year} года. Возраст авто - ${curDate - year} лет.</p>
            <button class="btn">Удалить</button>
        </div>
    `;
}

const div3 = document.createElement("div");
div3.classList.add("autos");

const carsList = [
    {brand: "Tesla", year: 2015, color: "red"},
    {brand: "Lexus", year: 2016, color: "silver"},
    {brand: "Nissan", year: 2012, color: "black"},
]

const cars = carsList.map(car => {
    return generateAutoCard(car.brand, car.color, car.year);
}).join("");

div3.innerHTML = cars;

div.insertAdjacentElement("beforebegin", div3);

const button = document.querySelectorAll(".btn");

function deleteCar (e) {
    const clickButton = e.currentTarget;
    clickButton.closest(".autoCard").remove();
}

button.forEach(elem => {
    elem.addEventListener("click", deleteCar);
});