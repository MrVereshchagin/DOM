const body = document.body;
const div = document.createElement('div');
div.classList.add('wrapper');

body.appendChild(div);

const h1 = document.createElement('h1');
h1.innerText = 'DOM (Document Object Model)';

div.insertAdjacentElement('beforebegin', h1);

const list = `
    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>
`;

div.insertAdjacentHTML('afterbegin', list);

const image = document.createElement('img');
image.src = 'https://picsum.photos/seed/picsum/200/300';
image.width = 360;
image.classList.add('super');
image.alt = 'Super Man';
div.insertAdjacentElement('beforeend', image);

const div1 = `
    <div class='pDiv'>
        <p>First</p>
        <p>Second</p>
    </div>
`;

const ul = document.querySelector('ul');
ul.insertAdjacentHTML('beforebegin', div1);

const pDiv = document.querySelector('.pDiv');
pDiv.children[1].classList.add('text');

pDiv.lastElementChild.remove('');

function generateAutoCard(brand, color, year) {
    const date = new Date();
    const curDate = date.getFullYear();
    return `
    <div class="autoCard">
        <h2>${brand.toUpperCase()} ${year}</h2>
        <p>Автомобиль ${brand} - ${year} года. Возраст авто - ${curDate - year} лет.</p>
        <button class='btn'>Delete</button>
    </div>
    `;
}

const div2 = document.createElement('div');
div2.classList.add('autos');
div.insertAdjacentElement('beforebegin', div2);

const carsList = [
    {brand: 'Tesla', year: 2015, color: 'Красный'},
    {brand: 'Lexus', year: 2016, color: 'Серебристый'},
    {brand: 'Nissan', year: 2012, color: 'Черный'},
];

const myCars = carsList.map(car => {
    return generateAutoCard(car.brand, car.color, car.year);
}).join('');

div2.insertAdjacentHTML('afterbegin', myCars);

const btn = document.querySelectorAll('.btn');

function deleteButton (e) {
    const currentButton = e.currentTarget;
    currentButton.closest('.autoCard').remove('');
}

btn.forEach(button => {
    button.addEventListener('click', deleteButton);
});