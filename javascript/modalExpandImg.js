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

document.querySelectorAll(".pregnancy-box img").forEach((img) => {
  img.addEventListener("click", () => {
    const modal2 = document.getElementById("imageModal2");
    const modal2Img = document.getElementById("modalImage2");
    modal2Img.src = img.src;
    modal2.classList.add("active");
  });
});

function closeImageModal2(event) {
  const modal2 = document.getElementById("imageModal2");
  const modal2Img = document.getElementById("modalImage2");

  if (event.target === modal2) {
    modal2.classList.remove("active");
    modal2Img.src = "";
  }
}

document.querySelectorAll(".presentation-box img").forEach((img) => {
  img.addEventListener("click", () => {
    const modal3 = document.getElementById("imageModal3");
    const modal3Img = document.getElementById("modalImage3");
    modal3Img.src = img.src;
    modal3.classList.add("active");
  });
});

function closeImageModal3(event) {
  const modal3 = document.getElementById("imageModal3");
  const modal3Img = document.getElementById("modalImage3");

  if (event.target === modal3) {
    modal3.classList.remove("active");
    modal3Img.src = "";
  }
}
