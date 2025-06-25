document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".titulo").forEach(titulo => {
    // Evita afectar enlaces como el de "Contacto"
    if (titulo.tagName.toLowerCase() === 'a') return;

    titulo.addEventListener("click", () => {
      const item = titulo.parentElement;

      document.querySelectorAll(".item").forEach(i => {
        if (i !== item) i.classList.remove("active");
      });

      item.classList.toggle("active");
    });
  });
});