console.log("Hello World!");

//create a display name
let myName = "";
const ourInput = document.getElementById("displayNameInput");

ourInput.addEventListener("keypress", function (e) {
  console.log("ekey", e.key);
  if (e.key !== "Enter") {
    myName = myName + e.key;
  }

  if (e.key === "Enter") {
    // console.log("displayName");

    // const displayName = document.getElementById("displayNameInput").innerText;
    // console.log("displayName", displayName);
    document.getElementById("displayName").innerHTML = myName;
    document.getElementById("displayNameInput").value = "";
    myName = "";
    e.preventDefault();
  }
});
