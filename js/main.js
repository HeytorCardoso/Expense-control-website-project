function selectButton(btn) {
    document.querySelectorAll(".options").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
}