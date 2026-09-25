export default function toggleOutros() {
  const checkboxOutros = document.getElementById("outros");

  const campoOutros = document.getElementById("others-checked");

  const inputTexto = document.getElementById("hidden-others");

  checkboxOutros.addEventListener("change", () => {
    if (checkboxOutros.checked) {
      campoOutros.style.display = "block";

      inputTexto.focus();
    } else {
      campoOutros.style.display = "none";

      inputTexto.value = "";
    }
  });
}
