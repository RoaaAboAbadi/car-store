let categories = document.getElementById("categories");
let dropdownContent = document.getElementById("myDropdown");
let close = document.getElementById("close");

let dropdownContent2 = document.getElementById("myDropdown2");
let priceRange = document.getElementById("price");
let close2 = document.getElementById("close2");

let fuel = document.getElementById("fuel");
let dropdownContent3 = document.getElementById("myDropdown3");
let close3 = document.getElementById("close3");

let reviews = document.getElementById("reviews");
let dropdownContent4 = document.getElementById("myDropdown4");
let close4 = document.getElementById("close4");

let admin = document.getElementById("admin");
let dropdownContent5 = document.getElementById("myDropdown5");
let close5 = document.getElementById("close5")

const sidebar = document.getElementById("nnn");
const openSideBar = document.getElementById("toggle-mune");

import { arr } from './cars.data.js';
import { displayCars } from './displayCarsFun.js';

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


reviews.addEventListener("click", function () {
  dropdownContent4.classList.add("active");
  console.log("hhhhh");
});

close4.addEventListener("click", function (e) {
  dropdownContent4.classList.remove("active");
  console.log("kkkk222");
  e.stopPropagation();
});


admin.addEventListener("click", function () {
  dropdownContent5.classList.add("active");
  console.log("hhhhh");
});

close5.addEventListener("click", function (e) {
  dropdownContent5.classList.remove("active");
  console.log("kkkk222");
  e.stopPropagation();
});

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



function searchCar(brand) {
  let searched = (
    brand || document.getElementById("search-inp").value
  ).toLowerCase();

  const filtered = arr.filter((car) =>
    car.carName.toLowerCase().includes(searched)
  );

  displayCars(filtered);
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

  displayCars(search);
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
  displayCars(searchFuel)
}

