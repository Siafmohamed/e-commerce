let cart = {};
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

let tbody = document.getElementById("tbody");

for (let id in cart) {
    let item = cart[id];

    let tr = document.createElement('tr')



    // Create and append image cell
    let img_td = document.createElement('td');
    let img = document.createElement('img');
    img.src = `pic/p${id}.webp`; 
    img.alt = item.title;
    img_td.appendChild(img);
    tr.appendChild(img_td);

    let title_td = document.createElement('td')
    title_td.textContent = item.title
    tr.appendChild(title_td)


    let price_td = document.createElement("td");
    price_td.textContent = item.price;
    tr.appendChild(price_td);

    let qty_td = document.createElement("td");
    qty_td.textContent = item.qty;
    tr.appendChild(qty_td);

    tbody.appendChild(tr)

}