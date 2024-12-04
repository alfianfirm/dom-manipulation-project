const container1 = document.getElementById("container1");
container1.style.backgroundColor = "cyan";

const container2 = document.getElementById("container2");
container2.style.backgroundColor = "tomato";

const paragraphs = document.querySelectorAll("#a p");

paragraphs.forEach((paragraph) => {
    paragraph.style.backgroundColor = "white";
    paragraph.style.border = "1px solid black";
});

const link = document.querySelector("#a a");

link.style.backgroundColor = "white";
link.style.border = "1px solid black";

const listItems = document.querySelectorAll("ul li");

listItems.forEach((item, index) => {
    item.textContent = `List Baru ${index + 1}`;

    item.style.fontFamily = "Arial, sans-serif";
    item.style.fontSize = "20px"; 

    item.style.backgroundColor = "lightblue";

    item.style.border = "1px solid black";
});