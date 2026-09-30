export function saveUser(user) {
  localStorage.setItem("skillmatch-user", JSON.stringify(user));
}

export function getUser() {
  const user = localStorage.getItem("skillmatch-user");

  if (!user) {
    return null;
  }

  return JSON.parse(user);
}

export function getWelcomeMessage() {
  const message = localStorage.getItem("SkillMatch");

  if (!message) {
    localStorage.setItem("SkillMatch", "Seja bem-vindo, novo usuário!");
    return "Seja bem-vindo, novo usuário!";
  }

  return null;
}
