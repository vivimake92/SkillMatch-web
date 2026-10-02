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

export function toggleContact() {
  const contactLink = document.getElementById("contact-link");
  const contactSpace = document.getElementById("contact-space");

  contactLink.addEventListener("click", (event) => {
    event.preventDefault();

    contactSpace.classList.toggle("active");
  });
}

export function toggleTheme() {
  const buttonTheme = document.querySelector(".theme");

  const temaSalvo = localStorage.getItem("skillmatch-theme");

  if (temaSalvo === "dark") {
    document.body.classList.add("dark-theme");
  }

  buttonTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    const temaAtual = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";

    localStorage.setItem("skillmatch-theme", temaAtual);
  });
}
