export function calcularCompatibilidade(candidato, vaga) {
  let pontos = 0;
  let conhecimentosFaltantes = [];

  vaga.requisitos.forEach((requisito) => {
    const conhecimentoEncontrado = candidato.conhecimentos.find(
      (conhecimento) => conhecimento === requisito,
    );

    if (conhecimentoEncontrado) {
      pontos++;
    } else {
      conhecimentosFaltantes.push(requisito);
    }
  });

  const percentual = (pontos / vaga.requisitos.length) * 100;

  let nivelCompatibilidade;

  if (percentual <= 49) {
    nivelCompatibilidade = "Baixa compatibilidade";
  } else if (percentual <= 79) {
    nivelCompatibilidade = "Média compatibilidade";
  } else {
    nivelCompatibilidade = "Alta compatibilidade";
  }

  return {
    percentual,
    conhecimentosFaltantes,
    nivelCompatibilidade,
  };
}

export function filtrarVagas(candidato, vagas) {
  return vagas.filter((vaga) => {
    const mesmaCategoria = vaga.categoria === candidato.categoria;

    const mesmaSenioridade = vaga.cargo
      .toLowerCase()
      .includes(candidato.senioridade.toLowerCase());

    return mesmaCategoria && mesmaSenioridade;
  });
}

export function analisarVagas(candidato, vagas) {
  const vagasFiltradas = filtrarVagas(candidato, vagas);

  return vagasFiltradas.map((vaga) => {
    const compatibilidade = calcularCompatibilidade(candidato, vaga);

    return {
      vaga,
      ...compatibilidade,
    };
  });
}
