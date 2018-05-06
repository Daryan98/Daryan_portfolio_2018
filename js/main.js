  // Preloader on window load

window.addEventListener("load", ()=> {
    const loader = document.querySelector("div#loader-wrapper");
    loader.classList.add("loaded")
})
  
  
  ////////////////////////////////////////////////////////
  /////////// Skills Section Add Active class to every circle when ever i click
  ////////////////////////////////////////////////////////
  let Skills__header = document.getElementsByClassName("skills__header");

  // Add Active class to Circle spin Skills_header
  for (let i = 0; i < Skills__header.length; i++) {
      Skills__header[i].addEventListener('click', () => {
          for (let i = 0; i < Skills__header.length; i++) {
              Skills__header[i].classList.remove("active");
          }
          Skills__header[i].classList.add("active");
      });
  }

  
  // get all circle spin
  let skill = document.getElementsByClassName("skill");

  for (let i = 0; i < skill.length; i++) {
      skill[i].addEventListener('click', () => {
          for (let i = 0; i < skill.length; i++) {
              skill[i].classList.remove("active");
          }
          skill[i].classList.add("active");
      });
  }
  

  function showSkills() {
      const development = document.querySelector("div.skills_header ul li#development");
      const design = document.querySelector("div.skills_header ul li#design");

      const developmentSkils = document.querySelector("div.skills ul.developemnt_skill");
      const designSkills = document.querySelector("div.skills ul.design_skill");



      development.addEventListener("click", () => {
          designSkills.classList.add("remove");

          developmentSkils.classList.remove("remove");
          developmentSkils.style.opacity = 1;

      })
      design.addEventListener("click", () => {
          developmentSkils.classList.add("remove");

          designSkills.classList.remove("remove");
          designSkills.style.opacity = 1;

      })
  }

  //RUN Function 
  showSkills();


