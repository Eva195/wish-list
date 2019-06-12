var addbutton = wishlist.getElementById("formu");
addbutton.addEventListener("click", addwish);

var zoneliste = wishlist.getElementById("listfull");
zoneliste.addEventListener("click", formu);

var maliste = [];



function addwish() {

    var wish = wishlist.getElementById("formu");

    addToTheList(wish);
    resetInput(wish);
}

function resetInput(inputToReset) {
    inputToReset.value = "";
}

function addToTheList(thingToAdd) {
    maliste.push(thingToAdd.value);
    var newListItem = wishlist.createElement("li");
    newListItem.innerHTML = maliste[maliste.length - 1];

    zoneliste.appendChild(newListItem);

}