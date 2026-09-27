export default function toggleCandidate() {
  const candidateLink = document.getElementById("candidate-link");
  const candidateSpace = document.getElementById("candidate-space");

  candidateLink.addEventListener("click", (e) => {
    e.preventDefault();

    candidateSpace.classList.toggle("active");
  });
}
