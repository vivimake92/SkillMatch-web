export default function toggleCompany() {
  const companyLink = document.getElementById("company-link");
  const companySpace = document.getElementById("company-space");

  companyLink.addEventListener("click", (e) => {
    e.preventDefault();

    companySpace.classList.toggle("active");
  });
}
