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




