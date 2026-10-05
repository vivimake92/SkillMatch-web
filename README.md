# Projeto avaliativo - Vivian Martins do Santos

Este documento descreve o Projeto Avaliativo da turma de Programação Front-End React do curso SCTEC/SENAI

## O que o sistema faz e para que serve ?

A proposta do projeto é criar um sistema interativo que compare as habilidades de uma pessoa candidata com os requisitos de algumas vagas fictícias. Este projeto é uma continuação direta do primeiro projeto do módulo, que antes utilizava apenas JavaScript para fazer uma analise simples no console. O resultado do projeto é uma página web interativa e responsiva, em que o usuário possa cadastrar seus dados e ver sua compatibilidade com as vagas cadastradas.

## Como executá-lo ?

Irei recomendar duas formas:

- O usuário pode utilizar meu próprio github-pages, basta apenas clicar no link: https://vivimake92.github.io/SkillMatch-web/

- Utilizando o app _Visual Studio Code_:

1. Clone o repositório
2. Abra a pasta do projeto no app
3. Instale a extensão _Live Server_
4. Abra o Explorer (Ctrl+Shift+E) do VS Code, clique com o botão direito do mouse sobre o arquivo _index.html_ e selecione _Open with Live Server_.
5. Clique em _Buscar vagas_, preencha o formulário e clique em _Procurar vagas_

## Qual regra de cálculo de compatibilidade eu utilizei no projeto ?

Para avaliação do percentual de compatibilidade, eu criei um sistema de pontos que soma pontos ao comparar as habilidades exigidas com a lista de requisitos, e então ele retorna a seguinte operação:

_`(pontos / vaga.listaRequisitos.length) * 100)`_

## Quais conceitos do Módulo01 do curso eu apliquei ao projeto ?

Foi criada uma checklist antes de começar o projeto com todos os conceitos que eu gostaria que estivessem presentes, conforme o projeto estava sendo desenvolvido, eu fui marcando check nos conceitos utilizados. Alguns exemplos: arrays, objetos, let/const, operadores lógicos, if/else, funções, arrow functions, métodos de array, classe, constructor, herança, this, callback, promise, async/await, etc...

## Uso de IA durante o desenvolvimento

A integração das sugestões ocorreu de maneira manual, acompanhada de testes e revisões. A abordagem visou à compreensão do funcionamento do sistema, ao cumprimento dos requisitos acadêmicos e à adequação das soluções ao escopo e às decisões por mim definidas.

Após decidir qual lógica seguir, eu desenvolvia o código e o testava. Caso desse certo, eu seguia para a próxima ideia. Caso contrário, era solicitado para a IA revisar, ajustar e explicar o por que e, com isso, eu continuava o desenvolvimento manualmente.

## Links

- [Github-Pages](https://vivimake92.github.io/SkillMatch-web/)
- [KanBan Trello](https://trello.com/b/2sj2tzQG/projeto-final-modulo01-sctec)
- [Link do vídeo explicativo](https://youtu.be/POdoT65I7eM)
- [Lista de pull requests](https://github.com/vivimake92/SkillMatch-web/pulls?q=is%3Apr+state%3Aclosed)
- [Lista de Branches](https://github.com/vivimake92/SkillMatch-web/branches)
