import { renderUserForm, renderJobResults } from "./ui.js";

import fetchVagas from "./load-vagas.js";

import {
  toggleOutros,
  toggleCandidate,
  toggleCompany,
  toggleContact,
  toggleTheme,
} from "./toggles.js";

import { submitUserForm, loadUser } from "./form-user.js";

import { getWelcomeMessage, getUser } from "./storage.js";

import { analisarVagas } from "./compatibility.js";

import iniciarFiltros from "./user-filter.js";

async function start() {
  renderUserForm();

  const vagas = await fetchVagas();

  toggleOutros();

  toggleCandidate();

  toggleCompany();

  toggleContact();

  toggleTheme();

  submitUserForm((candidato) => {
    const resultados = analisarVagas(candidato, vagas);

    iniciarFiltros(resultados, renderJobResults);

    renderJobResults(resultados);
  });

  loadUser();

  getWelcomeMessage();
}

start();

// console.log("Hello, World!");
