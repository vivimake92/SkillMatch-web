import { saveUser, getUser } from "./storage.js";

export function submitUserForm() {
  const form = document.getElementById("user-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const category = form.querySelector('input[name="category"]:checked');

    const seniority = form.querySelector('input[name="seniority"]:checked');

    const knowledge = form.querySelectorAll(
      'input[name="user-checkbox[]"]:checked',
    );

    const conhecimentos = Array.from(knowledge)
      .filter((checkbox) => checkbox.value !== "Outros")
      .map((checkbox) => checkbox.value);

    const user = {
      nome: form.querySelector("#user-name").value,
      email: form.querySelector("#user-email").value,
      idade: form.querySelector("#user-age").value,
      categoria: category ? category.value : null,
      senioridade: seniority ? seniority.value : null,
      conhecimentos,
    };

    saveUser(user);
  });
}

export function loadUser() {
  const user = getUser();

  if (!user) {
    return;
  }

  const form = document.getElementById("user-form");

  form.querySelector("#user-name").value = user.nome;
  form.querySelector("#user-email").value = user.email;
  form.querySelector("#user-age").value = user.idade;

  const category = form.querySelector(
    `input[name="category"][value="${user.categoria}"]`,
  );

  if (category) {
    category.checked = true;
  }

  const seniority = form.querySelector(
    `input[name="seniority"][value="${user.senioridade}"]`,
  );

  if (seniority) {
    seniority.checked = true;
  }

  user.conhecimentos.forEach((knowledge) => {
    const checkbox = form.querySelector(
      `input[name="user-checkbox[]"][value="${knowledge}"]`,
    );

    if (checkbox) {
      checkbox.checked = true;
    }
  });
}
