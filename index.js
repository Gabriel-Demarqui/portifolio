const menutoggle = document.querySelector(".menutoggle")

const navbar = document.querySelector(".navbar")

menutoggle.addEventListener("click", () => 
navbar.classList.toggle("active")
) 

// const sections = document.querySelectorAll("section");
   //const observer = new IntersectionObserver((entries) => {
    // entries.forEach(entry => {
    //   if (entry.isIntersecting) {
     //    entry.target.classList.add("show");   // aparece
     //  } else {
      //   entry.target.classList.remove("show"); // some de novo
      // }
     //});
   //}, { threshold: 0.2 }); // ativa quando 20% do elemento estiver visível
//sections.forEach(sec => observer.observe(sec));

