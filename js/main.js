let categories = document.getElementById("categories");
let dropdownContent = document.getElementById("myDropdown");
let close = document.getElementById("close");

let dropdownContent2 = document.getElementById("myDropdown2");
let priceRange = document.getElementById("price");
let close2 = document.getElementById("close2");

let fuel = document.getElementById("fuel");
let dropdownContent3 = document.getElementById("myDropdown3");
let close3 = document.getElementById("close3");


const sidebar = document.getElementById("nnn");
const openSideBar = document.getElementById("toggle-mune");

const arr = [{
  id: "toyota-one",
  carName: "Toyota",
  img: "./images/toyota-carrol.png",
  disciption: "The Toyota Corolla is a reliable, fuel-efficient compact sedan with a modern design and advanced safety features, and it is available with a diesel , electric engine option.",
  cost: 30000,
  btn: "Buy Now",
  speed: "Speed: 180km/h",
},
{
  id: "toyota-two",
  carName: "Toyota",
  img: "./images/toyota-corrola.png",
  disciption: "The Toyota Corolla is a reliable, fuel-efficient compact sedan with a modern design and advanced safety features, and it is available with an electric engine option.",
  cost: 35000,
  btn: "Buy Now",
  speed: "Speed: 180km/h",
},
{
  id: "toyota-three",
  carName: "Toyota",
  img: "./images/toyota.png",
  disciption: "The Toyota Corolla is a reliable, fuel-efficient compact sedan with a modern design and advanced safety features, and it is available with a diesel engine option.",
  cost: 40000,
  btn: "Buy Now",
  speed: "Speed: 180km/h",
},
{
  id: "tesla-one",
  carName: "Tesla",
  img: "./images/tesla3.png",
  disciption: "The Tesla Model 3 is a stylish electric car with advanced tech, and it is available with an electric engine option, and it is available with a Electricity engine option.",
  cost: 50000,
  btn: "Buy Now",
  speed: "Speed: 225km/h",
},
{
  id: "tesla-two",
  carName: "Tesla",
  img: "./images/tesla4.png",
  disciption: "The Tesla Model 3 is a stylish electric car with advanced tech, and it is available with an electric engine option.",
  cost: 44000,
  btn: "Buy Now",
  speed: "Speed: 225km/h",
},
{
  id: "tesla-three",
  carName: "Tesla",
  img: "./images/tesla2.png",
  disciption: "The Tesla Model 3 is a stylish electric car with advanced tech, and it is available with an electric engine option.",
  cost: 40000,
  btn: "Buy Now",
  speed: "Speed: 225km/h",
},
{
  id: "tesla-four",
  carName: "Tesla",
  img: "./images/tesla1.png",
  disciption: "The Tesla Model 3 is a stylish electric car with advanced tech, and it is available with an electric engine option.",
  cost: 35000,
  btn: "Buy Now",
  speed: "Speed: 2225km/h",
},
{
  id: "bmw-one",
  carName: "BMW",
  img: "./images/bmw5.png",
  disciption: "The Tesla Model 3 is a stylish electric car with advanced tech, and it is available with a gasoline and diesel engine option.",
  cost: 50000,
  btn: "Buy Now",
  speed: "Speed: 2225km/h",
},
{
  id: "bmw-two",
  carName: "BMW",
  img: "./images/bmw2.webp",
  disciption: "The Tesla Model 3 is a stylish electric car with advanced tech, and it is available with a gasoline and electric engine option.",
  cost: 60000,
  btn: "Buy Now",
  speed: "Speed: 2225km/h",
},
{
  id: "bmw-three",
  carName: "BMW",
  img: "./images/bmw3.png",
  disciption: "The Tesla Model 3 is a stylish electric car with advanced tech, and it is available with a diesel engine option.",
  cost: 55000,
  btn: "Buy Now",
  speed: "Speed: 2225km/h",
},
{
  id: "bmw-four",
  carName: "BMW",
  img: "./images/bmw4.png",
  disciption: "The Tesla Model 3 is a stylish electric car with advanced tech, and it is available with a gasoline , diesel and electric engine option.",
  cost: 70000,
  btn: "Buy Now",
  speed: "Speed: 2225km/h",
},
{
  id: "jeep-one",
  carName: "Jeep",
  img: "./images/jeep1.png",
  disciption: "The Mercedes-Benz G-Class (G-Wagon) is a luxury SUV known for its boxy design and strong off-road performance, and it is available with a gasoline , diesel and electric engine option.",
  cost: 150000,
  btn: "Buy Now",
  speed: "Speed: 220 km/h",
},
{
  id: "jeep-two",
  carName: "Jeep",
  img: "./images/jeep2.png",
  disciption: "The Range Rover is a luxury SUV from Land Rover known for its elegant design, upscale interior, and strong off-road capabilities. It offers excellent performance and superior driving comfort, and it is available with a gasoline , diesel and electric engine option.",
  cost: 110000,
  btn: "Buy Now",
  speed: "Speed: 200 km/h",
},
{
  id: "jeep-three",
  carName: "Jeep",
  img: "./images/jeep3.png",
  disciption: "The Jeep is a rugged SUV with strong off-road abilities and a durable design, perfect for adventure and city driving, and it is available with a gasoline  and electric engine option.",
  cost: 80000,
  btn: "Buy Now",
  speed: "Speed: 125km/h",
},
{
  id: "jeep-four",
  carName: "Jeep",
  img: "./images/jeep4.png",
  disciption: "The Jeep is a rugged SUV with strong off-road abilities and a durable design, perfect for adventure and city driving, and it is available with a gasoline , diesel  engine option.",
  cost: 40000,
  btn: "Buy Now",
  speed: "Speed: 140km/h",
},
];

const closeSideBar = () => {
  sidebar.classList.toggle("sidebar-test");
  // sidebar.classList.toggle('sidebar')
};

openSideBar.addEventListener("click", (e) => {
  // e.stopPropagation()
  closeSideBar();
});

const removeContaner = () => {
  document.getElementById("con-test").classList.add("ree");
};


fuel.addEventListener("click", function () {
  dropdownContent3.classList.add("active");
  console.log("hhhhh");
});

close3.addEventListener("click", function (e) {
  dropdownContent3.classList.remove("active");
  console.log("kkkk222");
  e.stopPropagation();
});
const fuelDropdwonList = document.querySelectorAll("#myDropdown3 > a");

fuelDropdwonList.forEach((dropdown) => {
  dropdown.addEventListener("click", function () {
    document.querySelectorAll(".fa-circle").forEach((circle) => {
      circle.classList.remove("colored");
    });
    dropdown.firstChild.classList.add("colored");

    searchFuelFilter(dropdown.id);
    closeSideBar();
    removeContaner();
  });

})


console.log("22222222222222222222222222222");

categories.addEventListener("click", function () {
  dropdownContent.classList.add("active");
  console.log("hhhhh");
});

close.addEventListener("click", function (e) {
  dropdownContent.classList.remove("active");
  console.log("kkkk222");
  e.stopPropagation();
});
const categoriesDropdownList = document.querySelectorAll("#myDropdown > a");

categoriesDropdownList.forEach((dropdwon) => {
  dropdwon.addEventListener("click", function () {
    document.querySelectorAll(".fa-circle").forEach((circle) => {
      circle.classList.remove("colored");
    });
    dropdwon.firstChild.classList.add("colored");

    searchCar(dropdwon.id);
    closeSideBar();
    removeContaner();
  });
});



priceRange.addEventListener("click", function () {
  dropdownContent2.classList.add("active");
  console.log("bbbb");
});

close2.addEventListener("click", function (e) {
  dropdownContent2.classList.remove("active");
  e.stopPropagation();
  console.log("kkkk");
});
const priceRangeDropdownList = document.querySelectorAll("#myDropdown2 > a");

// they are the same
// let cheep = document.getElementById("cheep");
//let affordable = document.getElementById("affordable");
//let expinsive = document.getElementById("expinsive");

// console.log(priceRangeDropdownList, "priceRangeDropdownList");

priceRangeDropdownList.forEach((dropdown) => {
  dropdown.addEventListener("click", function () {
    document.querySelectorAll(".fa-circle").forEach((circle) => {
      circle.classList.remove("colored");
    });
    dropdown.firstChild.classList.add("colored");

    priceListFilter(dropdown.id);
    removeContaner();
    closeSideBar();
  });
  console.log("dropdown", dropdown);
});



document.getElementById("search-inp").addEventListener("input", function () {
  searchCar();
  document.getElementById("con-test").classList.add("ree");
});

let carsList = document.getElementById("carsList");

function updateList(arr) {
  carsList.innerHTML = "";

  arr.forEach((car) => {
    let list = document.createElement("li");
    list.classList.add("item");

    list.innerHTML = `<div class="box"> <h3 class="title-car">${car.carName}</h3>  <br>
         <div class="cont"><div><img class="image" src='${car.img}' alt='${car.carName}' /> </div> <br>
         <div class="togather"> <p class="discription"> ${car.disciption} </p> <br>
          <div class="togather2" ><p class="speed">${car.speed}</p> <span class="cost"> Cost: ${car.cost}$</span> 
           <button class="btn trt">${car.btn}</button> </div></div></div></div>`;

    carsList.appendChild(list);
  });
  document.querySelectorAll(".trt").forEach((button) => {
    button.addEventListener("click", function () {
      document.getElementById("myForm").style.display = "flex";
      console.log("ccc");
    });
  });
}

function searchCar(brand) {
  let searched = (
    brand || document.getElementById("search-inp").value
  ).toLowerCase();

  const filtered = arr.filter((car) =>
    car.carName.toLowerCase().includes(searched)
  );

  updateList(filtered);
}

// type ==> // cheep   // affordable  // expinsive
const priceListFilter = (type) => {
  const search = arr.filter((car) => {
    let condation;
    if (type === "cheep") {
      condation = car.cost <= 40000;
    } else if (type === "affordable") {
      condation = car.cost > 40000 && car.cost <= 80000;
    } else {
      condation = car.cost > 80000;
    }
    return condation;
  });

  updateList(search);
};

const searchFuelFilter = (type) => {
  const searchFuel = arr.filter((car) => {
    let condistion;
    if (type === "diesel") {
      condistion = car.disciption.includes("diesel")
    } else if (type === "electric") {
      condistion = car.disciption.includes("electric")
    } else {
      condistion = car.disciption.includes("gasoline")
    }
    return condistion
  })
  updateList(searchFuel)
}

