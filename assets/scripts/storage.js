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
