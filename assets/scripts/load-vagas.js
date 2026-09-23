export default async function fetchVagas() {
  const dataURL = "./assets/data/vagas.json";

  try {
    const response = await fetch(dataURL);

    if (response.ok != true) {
      return alert("Erro ao carregar dados do servidor");
    }

    const vagas = await response.json();

    return vagas;
  } catch (error) {
    return alert(
      "Erro ao consultar banco de dados, tente novamente mais tarde.",
    );
  }
}
