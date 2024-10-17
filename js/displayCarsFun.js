let carsList = document.getElementById("carsList");
const phone = document.getElementsByName('phone')


export function displayCars(arr) {
    const isAdmin = document.title == 'Admin'
    carsList.innerHTML = "";

    arr.forEach((car) => {
        let list = document.createElement("li");
        list.classList.add("item");


        list.innerHTML = `<div class="box"> <h3 class="title-car">${car.carName}</h3>  <br>
           <div class="cont"><div><img class="image" src='${car.img}' alt='${car.carName}' /> </div> <br>
           <div class="together"> <p class="description"> ${car.description} </p> <br>
            <div class="together2" ><p class="speed">${car.speed}</p> <span class="cost"> Cost: ${car.cost}$</span> 
             <button class="btn trt" id=${car.id} >${isAdmin ? car.edit : car.btn}</button> </div></div></div></div>`;

        carsList.appendChild(list);
    });
    document.querySelectorAll(".trt").forEach((button) => {
        button.addEventListener("click", function (e) {
            let currentUpdatedCarId = e.target.id

            document.currentUpdatedCarId = currentUpdatedCarId;

            document.getElementById("myForm").style.display = "flex";
        });
    });
}
