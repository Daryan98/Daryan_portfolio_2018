  //////////////////////////////////////////////////////////
  ///////////// Skills Section Add Active class to every circle when ever i click
  //////////////////////////////////////////////////////////
// get all circle spin
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

