
import { displayCars } from "./displayCarsFun.js";
import { arr } from './cars.data.js'

displayCars(arr)

const saveFormAdmin = document.getElementById("save");
const forrm = document.getElementById("forrm");
const myForm = document.getElementById("myForm");
const newCost = document.getElementById("new-cost");
const newSpeed = document.getElementById("new-speed");
const newDescription = document.getElementById("new-description");



const onSaveHandler = (e) => {
    e.preventDefault();
    let id = document.currentUpdatedCarId;

    updateCar(id, newSpeed.value, newCost.value, newDescription.value)

    displayCars(arr)

    myForm.style.display = "none";
    alert("The Data Has Changed !")
}

forrm.addEventListener("submit", onSaveHandler);

function updateCar(id, newSpeed, newCost, newDescription) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == id) {
            arr[i].cost = newCost;
            arr[i].speed = newSpeed;
            arr[i].description = newDescription;
            console.log("newCost", newCost, id,)
            return;
        }
    }

}

