let add = document.querySelector("#add");

add.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = output.innerText + 1;

  output.innerText = result;
});
