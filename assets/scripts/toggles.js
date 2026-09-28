export function toggleCandidate() {
  const candidateLink = document.getElementById("candidate-link");
  const candidateSpace = document.getElementById("candidate-space");

  candidateLink.addEventListener("click", (e) => {
    e.preventDefault();

    candidateSpace.classList.toggle("active");
  });
}

export function toggleCompany() {
  const companyLink = document.getElementById("company-link");
  const companySpace = document.getElementById("company-space");

  companyLink.addEventListener("click", (e) => {
    e.preventDefault();

    companySpace.classList.toggle("active");
  });
}

export function toggleOutros() {
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
