export default function iniciarFiltros(resultados, renderizar) {
  const filterModality = document.getElementById("filter-modality");
  const sortJobs = document.getElementById("sort-jobs");

  function atualizarVagas() {
    let vagas = [...resultados];

    if (filterModality.value !== "todas") {
      vagas = vagas.filter(
        (resultado) => resultado.vaga.modalidade === filterModality.value,
      );
    }

    if (sortJobs.value === "compatibilidade") {
      vagas.sort((a, b) => b.percentual - a.percentual);
    }

    if (sortJobs.value === "maior-salario") {
      vagas.sort((a, b) => {
        const salarioA = parseInt(a.vaga.salario.replace(/\D/g, ""));
        const salarioB = parseInt(b.vaga.salario.replace(/\D/g, ""));

        return salarioB - salarioA;
      });
    }

    renderizar(vagas);
  }

  filterModality.addEventListener("change", atualizarVagas);
  sortJobs.addEventListener("change", atualizarVagas);

  return atualizarVagas;
}
