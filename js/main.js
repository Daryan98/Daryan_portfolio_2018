// get all circle spin
let Skills__header = document.getElementsByClassName("skills__header");
// remove active class from all of them
// console.log(circle_spins);

for (let i = 0; i < Skills__header.length; i++) {
    Skills__header[i].addEventListener('click', () => {
        for (let i = 0; i < Skills__header.length; i++) {
            Skills__header[i].classList.remove("active");
        }
        Skills__header[i].classList.add("active");
    });
}

// get all circle spin
let development_skill = document.getElementsByClassName("dev__skill");
// remove active class from all of them
// console.log(circle_spins);

for (let i = 0; i < development_skill.length; i++) {
    development_skill[i].addEventListener('click', () => {
        for (let i = 0; i < development_skill.length; i++) {
            development_skill[i].classList.remove("active");
        }
        development_skill[i].classList.add("active");
    });
}

// get all circle spin
let Design_skill = document.getElementsByClassName("des__skill");
// remove active class from all of them
// console.log(circle_spins);

for (let i = 0; i < Design_skill.length; i++) {
    Design_skill[i].addEventListener('click', () => {
        for (let i = 0; i < Design_skill.length; i++) {
            Design_skill[i].classList.remove("active");
        }
        Design_skill[i].classList.add("active");
    });
}



// add active to the cklicked element