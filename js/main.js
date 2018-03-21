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
      const development = document.querySelector("ul.skills_header li#development");
      const design = document.querySelector("ul.skills_header li#design");

      const developmentSkils = document.querySelector("div.skills ul.developemnt_skill");
      const designSkills = document.querySelector("div.skills ul.design_skill");


      development.addEventListener("click", () => {
          designSkills.style.display = "none";

          developmentSkils.style.display = "inline-block";
          developmentSkils.style.opacity = 1;

      })
      design.addEventListener("click", () => {
          developmentSkils.style.display = "none";

          designSkills.style.display = "inline-block";
          designSkills.style.opacity = 1;

      })
  }


  //RUN Function 
  showSkills();
