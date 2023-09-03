// User Interface Logic
function handleForm(event) {
  event.preventDefault();
  const userSelections = document.querySelectorAll("input[name=grocery_list]:checked");
  const userSelectionsArray = Array.from(userSelections);
  document.querySelector("form#grocery_list").reset();
  document.querySelector("form#grocery_list").style.display = "none";

  // create results heading
  const resultsHeading = document.createElement("h2");
  resultsHeading.append("Here is your grocery list:");
  document.body.append(resultsHeading);


  userSelectionsArray.forEach(function(element) {
    const paragraph = document.createElement("p");
    paragraph.append((element.value).toUpperCase());
    document.body.append(paragraph);
  });
}

window.addEventListener("load", function() {
  document.querySelector("form#grocery_list").addEventListener("submit", handleForm);
});