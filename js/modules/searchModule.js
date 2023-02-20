export default function searchModule() {
  const body = document.querySelector("body"),
    searchToggle = document.querySelector(".searchToggle");

  // js code to toggle search box
  searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active");
  });
}
