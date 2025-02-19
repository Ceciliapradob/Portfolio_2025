document.addEventListener("DOMContentLoaded", () => {
    const skillHeaders = document.querySelectorAll(".skill-header");

    skillHeaders.forEach((header) => {
        header.addEventListener("click", () => {
            const skillList = header.nextElementSibling;
            const arrow = header.querySelector(".arrow-icon");

            // Cerrar todas las demás listas abiertas
            document.querySelectorAll(".skill-list").forEach((list) => {
                if (list !== skillList) {
                    list.style.maxHeight = "0px";
                    list.style.opacity = "0";
                    list.classList.remove("active");
                    list.previousElementSibling.querySelector(".arrow-icon").style.transform = "rotate(0deg)";
                }
            });

            // Abrir o cerrar la lista seleccionada
            if (skillList.classList.contains("active")) {
                skillList.style.maxHeight = "0px";
                skillList.style.opacity = "0";
                arrow.style.transform = "rotate(0deg)";
                skillList.classList.remove("active");
            } else {
                skillList.style.maxHeight = skillList.scrollHeight + "px";
                skillList.style.opacity = "1";
                arrow.style.transform = "rotate(180deg)";
                skillList.classList.add("active");
            }
        });
    });
});




// ============================== ANIMACION ABOUT ME 
document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about-container");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  aboutSection.classList.add("show");
              }
          });
      },
      { threshold: 0.3 } // Se activa cuando el 30% del elemento es visible
  );

  observer.observe(aboutSection);
});
