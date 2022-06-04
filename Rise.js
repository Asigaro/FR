let Button = document.getElementById ("Enough");
let all = document.getElementById ("Octopus");
let Believer = document.getElementById ("Believer");

Button.onclick = function () {
    all.style.display = "none";
}
Believer.onpaste = function (event) { 
 Believer.value = "А ты хитрый. Мне это нравиться!";
}
Button.onmouseenter = function () {
    Button.style.borderRadius = "5px";
}
Button.onmouseleave = function () {
    Button.style.borderRadius = "";
}