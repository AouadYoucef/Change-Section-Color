let lis = document.querySelectorAll("ul li");
let experiment = document.getElementsByClassName("experiment")[0];

if (window.localStorage.getItem("color")) {
  experiment.style.backgroundColor = window.localStorage.getItem("color");
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}
lis.forEach((li) => {
  li.addEventListener("click", function (e) {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    window.localStorage.setItem(
      "data-color",
      e.target.getAttribute("data-color")
    );
    window.localStorage.setItem("color", e.target.dataset.color);
    experiment.style.backgroundColor = e.target.dataset.color;
  });
});


