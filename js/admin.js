console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
import { displayCars } from "./displayCarsFun.js";
import { arr } from './cars.data.js'

displayCars(arr)

const saveFormAdmin = document.getElementById("save");
const forrm = document.getElementById("forrm");
const myForm = document.getElementById("myForm");
const newCost = document.getElementById("new-cost");
const newSpead = document.getElementById("new-spead");
const newDiscription = document.getElementById("new-discription");



const onSavahandler = (e) => {
    e.preventDefault();
    const id = document.curntUpdatedCarId;

    updateCar(id, newSpead, newCost, newDiscription)

    myForm.style.display = "none";
    alert("The Data Has Changed !")
}

forrm.addEventListener("submit", onSavahandler);

function updateCar(id, newSpead, newCost, newDiscription) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == id) {
            arr[i].cost = newCost.value;
            arr[i].speed = newSpead.value;
            arr[i].disciption = newDiscription.value;
            console.log("newCost", newCost.value)
            return;
        }
    }

}

