// get all circle spin
let Skills__header = document.getElementsByClassName("skills__header");

// Add Active class to Circle spin Skills_header
for (let i = 0; i < Skills__header.length; i++) {
    Skills__header[i].addEventListener('click', () => {
        for (let i = 0; i < Skills__header.length; i++) {
            Skills__header[i].classList.remove("active");
        }
        Skills__header[i].classList.add("active");

        // if(Skills__header.classList = "acitve.dev") {
        //     const div_skills =  document.querySelector("ul.developemnt_skill");
        //     div_skills.style.display = "inline-block";
        //  }else{
        //     div_skills.style.display = "none";

        //  }

        //  if(Skills__header.classList = "acitve.des"){
        //      const design_skills =  document.querySelector("ul.design_skill");
        //      design_skills.style.display = "inline-block";
        //  }else {
        //      design_skills.style.display = "none";
        //  }
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


///Profiles Section
$('ul.all_boxes').carouFredSel({
    responsive: true,
    width: '70%',
    prev: "#prev",
    next: "#next",
    scroll: {
        items: 1,
        duration: 400,
        timeoutDuration: 5000,
        easing: "linear",
      },
    items: {
        visible: 1,
        minimum: 1,
    },
    pagination: {
        container: ".slider_images",
        anchorBuilder: false
      }


})        
