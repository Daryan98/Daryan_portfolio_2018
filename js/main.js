// get all circle spin
let Skills__header = document.getElementsByClassName("skills__header");
// remove active class from all of them
// console.log(circle_spins);
// Add Active class to Circle spin Skills_header
for (let i = 0; i < Skills__header.length; i++) {
    Skills__header[i].addEventListener('click', () => {
        for (let i = 0; i < Skills__header.length; i++) {
            Skills__header[i].classList.remove("active");
        }
        Skills__header[i].classList.add("active");
        // displaySkills (Skills__header[i])
    });
}



// get all circle spin
let skill = document.getElementsByClassName("skill");
// remove active class from all of them
// console.log(circle_spins);
// Add Active class to Circle spin Skills

for (let i = 0; i < skill.length; i++) {
    skill[i].addEventListener('click', () => {
        for (let i = 0; i < skill.length; i++) {
            skill[i].classList.remove("active");
        }
        skill[i].classList.add("active");
    });
}


