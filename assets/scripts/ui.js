export function renderUserForm() {
  const candidateSpace = document.getElementById("candidate-space");

  candidateSpace.innerHTML = `
  <h1>SkillMatch: Sua nova carreira começa aqui!</h1>

        <h2>Preencha os campos abaixo e garanta o match perfeito!</h2>
        <form id="user-form">
          <div>
            <label for="user-name">Nome do(a) candidato(a)</label>
            <input
              id="user-name"
              type="text"
              name="user-name"
              placeholder="Digite aqui seu nome..."
              required
            />
          </div>

          <div>
            <label for="user-email">E-mail do(a) candidato(a)</label>
            <input
              id="user-email"
              type="email"
              name="user-email"
              placeholder="Digite aqui seu E-mail..."
              required
            />
          </div>

          <div>
            <label for="user-age">Idade do(a) candidato(a)</label>
            <input
              id="user-age"
              type="number"
              name="user-age"
              placeholder="Digite aqui sua idade"
              required
            />
          </div>

          <fieldset class="category-fieldset">
            <legend class="legend-category">Escolha sua área de atuação</legend>

            <div class="category-option">
              <input
                id="front-end"
                type="radio"
                name="category"
                value="front-end"
                required
              />
              <label for="front-end">Front-End</label>
            </div>

            <div class="category-option">
              <input
                id="back-end"
                type="radio"
                name="category"
                value="back-end"
              />
              <label for="back-end">Back-End</label>
            </div>

            <div class="category-option">
              <input
                id="fullstack"
                type="radio"
                name="category"
                value="fullstack"
              />
              <label for="fullstack">Full Stack</label>
            </div>
          </fieldset>

          <fieldset class="category-fieldset">
            <legend id="legend-seniority">
              Escolha seu nível de experiência
            </legend>

            <div class="seniority-option">
              <input id="junior" type="radio" name="seniority" value="junior" required />
              <label for="junior">Júnior</label>
            </div>

            <div class="seniority-option">
              <input id="pleno" type="radio" name="seniority" value="pleno" />
              <label for="pleno">Pleno</label>
            </div>

            <div class="seniority-option">
              <input id="senior" type="radio" name="seniority" value="senior" />
              <label for="senior">Sênior</label>
            </div>
          </fieldset>

          <fieldset class="user-knowledge">
            <legend id="legend-checkbox">
              Quais dessas ferramentas fazem parte do seu repertório
            </legend>

            <div>
              <input
                id="html"
                type="checkbox"
                name="user-checkbox[]"
                value="HTML"
              />
              <label for="html">HTML</label>
            </div>

            <div>
              <input
                id="css"
                type="checkbox"
                name="user-checkbox[]"
                value="CSS"
              />
              <label for="css">CSS</label>
            </div>

            <div>
              <input
                id="javascript"
                type="checkbox"
                name="user-checkbox[]"
                value="JavaScript"
              />
              <label for="javascript">JavaScript</label>
            </div>

            <div>
              <input
                id="react"
                type="checkbox"
                name="user-checkbox[]"
                value="React"
              />
              <label for="react">React</label>
            </div>

            <div>
              <input
                id="git"
                type="checkbox"
                name="user-checkbox[]"
                value="Git"
              />
              <label for="git">Git</label>
            </div>

            <div>
              <input
                id="typescript"
                type="checkbox"
                name="user-checkbox[]"
                value="TypeScript"
              />
              <label for="typescript">TypeScript</label>
            </div>

            <div>
              <input
                id="node.js"
                type="checkbox"
                name="user-checkbox[]"
                value="Node.js"
              />
              <label for="node.js">Node.js</label>
            </div>

            <div>
              <input
                id="restapi"
                type="checkbox"
                name="user-checkbox[]"
                value="RESTAPI"
              />
              <label for="restapi">APIs REST</label>
            </div>

            <div>
              <input
                id="sql"
                type="checkbox"
                name="user-checkbox[]"
                value="SQL"
              />
              <label for="sql">SQL</label>
            </div>

            <div>
              <input
                id="postgresql"
                type="checkbox"
                name="user-checkbox[]"
                value="PostgreSQL"
              />
              <label for="postgresql">PostgreSQL</label>
            </div>

            <div>
              <input
                id="docker"
                type="checkbox"
                name="user-checkbox[]"
                value="Docker"
              />
              <label for="docker">Docker</label>
            </div>

            <div>
              <input
                id="aws"
                type="checkbox"
                name="user-checkbox[]"
                value="AWS"
              />
              <label for="aws">AWS</label>
            </div>

            <div>
              <input
                id="angular"
                type="checkbox"
                name="user-checkbox[]"
                value="Angular"
              />
              <label for="angular">Angular</label>
            </div>

            <div>
              <input
                id="java"
                type="checkbox"
                name="user-checkbox[]"
                value="Java"
              />
              <label for="java">Java</label>
            </div>

            <div>
              <input
                id="python"
                type="checkbox"
                name="user-checkbox[]"
                value="Python"
              />
              <label for="python">Python</label>
            </div>

            <div id="checkbox-others">
              <input
                id="outros"
                type="checkbox"
                name="user-checkbox[]"
                value="Outros"
              />
              <label for="outros">Outros</label>
            </div>

            <div id="others-checked">
              <label for="hidden-others">Quais?</label>
              <input
                id="hidden-others"
                type="text"
                name="text-others"
                placeholder="Digite aqui..."
              />
            </div>
          </fieldset>

          <button type="submit">Procurar vagas</button>
        </form>

        <div id="job-results"></div>
  `;
}

export function renderJobResults(resultados) {
  const jobResults = document.getElementById("job-results");

  if (resultados.length === 0) {
    jobResults.innerHTML = `
      <h2>Nenhuma vaga encontrada</h2>
      <p>
        Não encontramos vagas compatíveis com sua área e nível de experiência.
      </p>
    `;

    return;
  }

  jobResults.innerHTML = resultados
    .map((resultado) => {
      const { vaga, percentual, nivelCompatibilidade, conhecimentosFaltantes } =
        resultado;

      return `
        <article class="job-card">
          <h2>${vaga.empresa}</h2>

          <h3>${vaga.cargo}</h3>

          <p><strong>Modalidade:</strong> ${vaga.modalidade}</p>

          <p><strong>Salário:</strong> ${vaga.salario}</p>

          <p>
            <strong>Compatibilidade:</strong>
            ${Math.round(percentual)}%
          </p>

          <p>
            <strong>${nivelCompatibilidade}</strong>
          </p>

          ${
            conhecimentosFaltantes.length > 0
              ? `
                <p><strong>Conhecimentos que faltam:</strong></p>
                <ul>
                  ${conhecimentosFaltantes
                    .map((conhecimento) => `<li>${conhecimento}</li>`)
                    .join("")}
                </ul>
              `
              : `
                <p>
                  Você possui todos os conhecimentos necessários para esta vaga!
                </p>
              `
          }

          <p>
          <strong>Descrição da vaga:</strong>
          ${vaga.descricao}
          </p>

          <p>
            <strong>Benefícios:</strong>
            ${vaga.beneficios.join(", ")}
          </p>
        </article>
      `;
    })
    .join("");
}
