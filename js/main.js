const test = document.getElementById("selector");
const count = test.children.length;
console.log(count);

function selectButton(btn) {
    document.querySelectorAll(".options").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    const test = document.getElementById("selector");
    const count = test.childElementCount;
    console.log(count);
}