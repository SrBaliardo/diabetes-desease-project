document.querySelectorAll(".group-container2 img").forEach((img) => {
  img.addEventListener("click", () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modalImg.src = img.src;
    modal.classList.add("active");
  });
});

function closeImageModal(event) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  if (event.target === modal) {
    modal.classList.remove("active");
    modalImg.src = "";
  }
}

function setupImageExpansion() {
  const images = document.querySelectorAll(".presentation-box img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      const alreadyExpanded = img.classList.contains("expanded");

      images.forEach((i) => i.classList.remove("expanded"));

      if (!alreadyExpanded) {
        img.classList.add("expanded");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", setupImageExpansion);
