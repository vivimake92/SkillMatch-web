export default async function fetchVagas() {
  const dataURL = "./assets/data/vagas.json";
  const jobResults = document.getElementById("job-results");

  if (jobResults) {
    jobResults.innerHTML =
      "<p>Aguardando dados do usuário para carregamento de vagas...</p>";
  }

  try {
    const response = await fetch(dataURL);

    if (!response.ok) {
      throw new Error("Erro ao carregar dados do servidor.");
    }

    const vagas = await response.json();

    if (!Array.isArray(vagas)) {
      throw new Error("Formato de dados inválido.");
    }

    if (vagas.length === 0) {
      if (jobResults) {
        jobResults.innerHTML = "<p>Nenhuma vaga disponível no momento.</p>";
      }

      return [];
    }

    return vagas;
  } catch (error) {
    if (jobResults) {
      jobResults.innerHTML =
        "<p>Não foi possível carregar as vagas. Tente novamente mais tarde.</p>";
    }

    console.error("Erro ao consultar vagas:", error);

    return [];
  }
}
