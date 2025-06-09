// Array
let makananFavoritArray = ["nasgor","naspad","mie goreng", NaN, true, false, undefined, null];

// Object 
let bioData = {
  firstName: "Ichsan",
  lastName: "Rozi",
  Age: 19,
  Address: "Bogor",
  makananFavorit: ["nasgor","naspad","mie goreng"],
  istri: {
    firstName: "Nanang",
    lastName: "Anando"
  },
  anak_perempuan:{
    firstName: "Angel",
    lastName: "Aulia"
  },
  
}
const projectTitle = document.querySelector("#project-title");

projectTitle.textContent = "Title baru dari JS File"