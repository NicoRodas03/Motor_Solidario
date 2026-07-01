const btnModo = document.getElementById("btn-modo");

btnModo.addEventListener("click", () => {
    
    document.body.classList.toggle("modo-oscuro");
    
    const modoActivo = document.body.classList.contains("modo-oscuro");
    
    if (modoActivo) {
        btnModo.textContent = "modo claro";
    } else {
        btnModo.textContent = "modo oscuro";
    }
});