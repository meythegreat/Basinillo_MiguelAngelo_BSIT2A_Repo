document.title = "My Website"
document.body.style.backgroundColor = "#FFD700"

const username = "Mey the Great";
const welcomeMsg = document.getElementById("welcome-msg"); 

welcomeMsg.textContent += username === "" ? "Guest!" : username + "!";

console.dir(document)