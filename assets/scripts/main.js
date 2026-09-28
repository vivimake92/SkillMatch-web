import renderUserForm from "./ui.js";

import fetchVagas from "./load-vagas.js";

import { toggleOutros, toggleCandidate, toggleCompany } from "./toggles.js";

import { submitUserForm, loadUser } from "./form-user.js";

renderUserForm();

fetchVagas();

toggleOutros();
toggleCandidate();
toggleCompany();

submitUserForm();
loadUser();

// console.log("Hello, World!");
