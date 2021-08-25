const body = document.body;
const div = document.createElement("div");
div.classList.add("wrapper");
body.appendChild(div);

const header = document.createElement("h1");
header.textContent = "DOM (Document Object Model)";
div.insertAdjacentElement("beforebegin", header);

const list = `
    <ul>
        <li>Один</li>
        <li>Два</li>
        <li>Три</li>
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
    <div class="pDiv">
        <p>Первый</p>
        <p>Второй</p>
    </div>
`;

const ul = document.querySelector("ul");
ul.insertAdjacentHTML("beforebegin", pDiv);

const div2 = document.querySelector(".pDiv");
div2.children[1].classList.add("text");
div2.firstElementChild.remove();

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
    {brand: 'Tesla', year: 2015, color: 'Красный'},
    {brand: 'Lexus', year: 2016, color: 'Серебристый'},
    {brand: 'Nissan', year: 2012, color: 'Черный'},
];

const cars = carsList.map(car => {
    return generateAutoCard(car.brand, car.color, car.year);
}).join("");

div.insertAdjacentElement("beforebegin", div3);
div3.insertAdjacentHTML("afterbegin", cars);

const btn = document.querySelectorAll(".btn");

function handleClick(e) {
    const currentButton = e.currentTarget;
    currentButton.closest(".autoCard").remove();
}

btn.forEach(button => {
    return button.addEventListener("click", handleClick);
});