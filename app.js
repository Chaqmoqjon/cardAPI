let cardDiv = document.querySelector(".card_div");
let container = document.querySelector(".container");

let colors = ["#11B9DB", "#2088C6", "#31399F", "#5B60B3"];

function colorRandom() {
  let num = Math.floor(Math.random() * colors.length);
  return colors[num];
}

let api = "https://jsonplaceholder.typicode.com/users";

async function getData() {
  let posts = await fetch(api);
  let json = posts.json();

  json
    .then((dataKeldi) => addTitle(dataKeldi))
    .catch((dataKelmadi) => console.log(dataKelmadi));
}

getData();

function addTitle(malumot) {
  malumot.forEach((i) => {
    console.log(malumot);
    let card = document.createElement("div");
    let img = document.createElement("p");
    let ism = document.createElement("h1");
    let cardp = document.createElement("p");
    let add = document.createElement("div");
    let address = document.createElement("i");
    let phone = document.createElement("i");
    let email = document.createElement("i");
    let globe = document.createElement("i");
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    let span3 = document.createElement("span");
    let span4 = document.createElement("span");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let ish = document.createElement("h3");

    card.className = "card";
    img.className = "img";
    cardp.className = "cardp";
    add.className = "add";
    address.className = "address fa-solid fa-location-dot";
    phone.className = "phone fa-solid fa-phone";
    email.className = "email fa-solid fa-envelope";
    globe.className = "globe fa-solid fa-globe";
    ish.className = "ish";
    button1.innerHTML = "YouTube";
    button2.innerHTML = "Instagram";

    ism.innerHTML = i.name;
    img.innerHTML = i.name.slice(0, 1);
    cardp.innerHTML = "@" + i.username;
    span1.innerHTML = i.address.street;
    span2.innerHTML = i.phone;
    span3.innerHTML = i.email;
    span4.innerHTML = i.website;
    ish.innerHTML = i.company.name;

    img.style.background = colorRandom();

    address.appendChild(span1);
    add.appendChild(address);
    phone.appendChild(span2);
    add.appendChild(phone);
    email.appendChild(span3);
    add.appendChild(email);
    globe.appendChild(span4);
    add.appendChild(globe);

    card.appendChild(img);
    card.appendChild(ism);
    card.appendChild(cardp);
    card.appendChild(add);
    card.appendChild(button1);
    card.appendChild(button2);
    card.appendChild(ish);

    container.appendChild(card);
  });
}
