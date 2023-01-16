let output = document.querySelector("#output");

function addAndSubstract(val, add = true, double = 1) {
  if (add) {
    return Number(val) + double;
  }
  return Number(val) - double;
}

add.addEventListener("click", function () {
  let result = addAndSubstract(output.innerText, true, 2);

  if (result > 10) {
    result = 0;
  }

  output.innerText = result;
});

subtract.addEventListener("click", function () {
  let result = addAndSubstract(output.innerText, false, 5);

  if (result < 0) {
    result = 0;
  }

  output.innerText = result;
});
