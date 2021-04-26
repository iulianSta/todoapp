// Any code you will write for your website (in the future!) should go here
// Add a to do task function
const addTask = () => {
  let newTask = document.querySelector("#newTask").value;
  if (newTask != "") {
    let newLi = document.createElement("li");
    let text = document.createTextNode(newTask);
    newLi.appendChild(text);
    document.querySelector(".result").appendChild(newLi);
    document.querySelector("#newTask").value = "";
  } else {
    document.querySelector("#newTask").placeholder = "Please add text";
  }
};
