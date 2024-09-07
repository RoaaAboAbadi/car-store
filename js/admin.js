console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
import { displayCars } from "./displayCarsFun.js";
import { arr } from './cars.data.js'

displayCars(arr)

const saveFormAdmin = document.getElementById("save");
const forrm = document.getElementById("aaasd");
const newCost = document.getElementById("new-cost");
const newSpead = document.getElementById("new-spead");
const newDiscription = document.getElementById("new-discription");

// console.log("333333333333333333333333");
// console.log(newCost.value);
// console.log(newSpead.value);
// console.log(newDiscription.value);
// console.log("34444444444444444444");

// const addEventListener = (type, dsfsdfsdf) => {
//     // pgojew[gjkwe[]]
//     const event = { trget: {} }
//     dsfsdfsdf(event)
// }



// const lesner = () => {
//     console.log(e);

// }


const onSavahandler = (e) => {

    console.log('asdasds');
    e.preventDefault()
    console.log(newCost.value);
    console.log(newSpead.value);
    console.log(newDiscription.value);
    console.log("id", document.curntUpdatedCarId);

    // const id = document.curntUpdatedCarId;

    updateCar(id)

}


forrm.addEventListener("submit", onSavahandler);


lesner(event)

function updateCar(id, newSpead, newCost, newDiscription) {


    // // console.log(id, newSpead, newCost, newDiscription)
    // for (let i = 0; i <= arr.length; i++) {
    //     if (arr[i].id == id) {

    //     }

    // }
    // return ""
}

