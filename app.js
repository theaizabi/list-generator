let body = document.querySelector("body");

let storeName = document.querySelector("#storeName");
let storeCount = document.querySelector("#storeCount");

let orderID = document.querySelector("#orderID");
let price = document.querySelector("#price");

let addBtn = document.querySelector("#add-btn");
let addID = document.querySelector("#addID-btn");

let resetBtn = document.querySelector("#reset");

addBtn.addEventListener("click", () => {
  if (storeName.value == "Select Stores" || storeCount.value == 0) {
    alert("Store Name or Store Counts are Empty");
  } else {
    let h2 = document.createElement("h2");
    h2.innerText = storeName.value + " - " + storeCount.value;
    listContainer.appendChild(h2);
    storeCount.value = "";
    storeName.value = "Select Stores";
  }
});

addID.addEventListener("click", () => {
  if (price.value == "" || orderID.value == "") {
    alert("Order ID or Price are Empty");
  } else {
    let h3 = document.createElement("h3");
    h3.innerText = orderID.value + " -- " + price.value;
    listContainer.appendChild(h3);
    price.value = "";
    orderID.value = "";
  }
});

let listContainer = document.querySelector("#list-container");

resetBtn.addEventListener("click", () => {
  listContainer.innerHTML = "";
});
