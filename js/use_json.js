// Adding Class Function
function addClass(el, clas) {
    return el.classList.add(clas);
}

const imdbMovieUrl = "./jsonfile/my_portfolio.json";


function fetchJsonData(url) {
    const promise = new Promise((resolve, reject) => {
        const xhrequest = new XMLHttpRequest();
        xhrequest.open("GET", url);

        xhrequest.addEventListener('load', () => {
            const jsonData = JSON.parse(xhrequest.responseText);
            resolve(jsonData);
        })
        xhrequest.send();
    })
    return promise;
}

fetchJsonData(imdbMovieUrl).then(data => {
    project_section(data);
    profiles_section(data);
    skills_content(data);
    project_section_popup(data);

}).catch(err => console.log(err));


function skills_content(data) {
    let liElement = document.querySelectorAll("div.skills ul li");

    const h2Element = document.querySelector("div.skill_content h2");
    const pElement = document.querySelector("div.skill_content p");

    let element = liElement.forEach((el) => {
        el.addEventListener("click", () => {
            data.skills.forEach((skill) => {
                if (skill.name.toLowerCase() == el.id) {
                    h2Element.innerHTML = skill.name;
                    pElement.innerHTML = skill.paragraph;
                }
            })

        })

    })
}



function profiles_section(data) {
    const ulElement = document.querySelector(".all_boxes");
    ulElement.innerHTML = "";
    data.profiles.forEach(profile => {
        const liElement = document.createElement("li");
        const div_left = document.createElement("div");
        const div_right = document.createElement("div");
        const content_Div = document.createElement("div");        
        const imgElement = document.createElement("img");
        const aElement = document.createElement("a");
        const h2Element = document.createElement("h2");
        const pElement = document.createElement("p")

        addClass(liElement, "box");
        addClass(div_left, "left_box");
        addClass(div_right, "right_box");
        addClass(content_Div, "content");
        

        imgElement.src = profile.img_avatar;
        aElement.href = profile.profile_url;
        h2Element.innerHTML = profile.name;
        pElement.innerHTML = profile.paragraph;

        ulElement.appendChild(liElement);
        liElement.appendChild(content_Div);
        content_Div.appendChild(div_left);
        content_Div.appendChild(div_right);
        div_left.appendChild(imgElement);
        aElement.appendChild(h2Element);
        div_right.appendChild(aElement);
        div_right.appendChild(pElement);

    });
}


function project_section(data) {
    // Already exsist
    const ulElement = document.querySelector("ul.project_list");
    ulElement.innerHTML = "";

    let i = 0;
    data.projects.forEach(project => {
        let liElement = document.createElement("li");
        let divElement = document.createElement("div");
        let imgElement = document.createElement("img");
        let div_1Element = document.createElement("div");
        let aElement = document.createElement("a");

        i++;

        addClass(liElement, `p${i}`);
        addClass(divElement, "project");
        addClass(div_1Element, "show");

        // adding inner html
        imgElement.src = project.img_avatar_small;
        aElement.innerHTML = "Show More";

        // imgElement.src = element.img_avatar_small
        ulElement.appendChild(liElement);
        liElement.appendChild(divElement);
        divElement.appendChild(imgElement);
        divElement.appendChild(div_1Element);
        div_1Element.appendChild(aElement);


        
        // Add open class to PopUps
        aElement.addEventListener("click", ()=> {
            if(liElement.className == project.id) {
                const el = liElement.className;
                let popup = document.querySelector(`.${el} .popup`);

                popup.classList.remove("close");
                popup.classList.add("open");

                let popupClose = document.querySelector(`.${el} .popup a.popup__close`);
                popupClose.addEventListener("click", ()=> {
                    popup.classList.add("close");
                    popup.classList.remove("open");
                })
            }
        })



    });
}



function project_section_popup(projectsJsonData) {
    let liElements = document.querySelectorAll("ul.project_list li");
    let element = liElements.forEach((el) => {
        projectsJsonData.projects.forEach(data => {
            if (data.id === el.className) {
                let divElement = document.createElement("div");
                let div_1Element = document.createElement("div");
                let div_2Element = document.createElement("div");
                let div_3Element = document.createElement("div");
                let div_4Element = document.createElement("div");

                let imgElement = document.createElement("img");

                let h2Element = document.createElement("h2");
                let h3Element = document.createElement("h3");
                let pElement = document.createElement("p");

                let aElement = document.createElement("a");
                let a_1Element = document.createElement("a");
                let a_2Element = document.createElement("a");

                //Adding Class
                addClass(divElement, "popup");
                addClass(divElement, "close");
                addClass(div_1Element, "popup__content");
                addClass(div_2Element, "popup__left");
                addClass(div_3Element, "popup__right");
                addClass(imgElement, "popup__img");
                addClass(pElement, "popup__text")
                addClass(aElement, "popup__close");
                addClass(div_4Element, "urls");
                addClass(a_1Element, "btn");
                addClass(a_2Element, "btn");


                imgElement.src = data.img_avatar_small;
                h2Element.innerHTML = data.name;
                h3Element.innerHTML = data.used_languges;
                pElement.innerHTML = data.paragraph;
                aElement.innerHTML = "&times;";
                aElement.href = "#projects_section"
                a_1Element.innerHTML = "Website Url";
                a_2Element.innerHTML = "GitHub Url";

                a_1Element.href = data.website_url;
                a_2Element.href = data.github_url;

                el.appendChild(divElement)
                divElement.appendChild(div_1Element);
                div_1Element.appendChild(div_2Element);
                div_1Element.appendChild(div_3Element);
                div_2Element.appendChild(imgElement);
                div_3Element.appendChild(aElement)
                div_3Element.appendChild(h2Element);
                div_3Element.appendChild(h3Element)
                div_3Element.appendChild(pElement)
                div_3Element.appendChild(div_4Element);
                div_4Element.appendChild(a_1Element);
                div_4Element.appendChild(a_2Element);
            }
        });
    })


    // if (data.id == element.className) {
    //     console.log(element.className);
    // }

}

// let liEl = document.querySelector("ul.project_list ");

//   console.log(liEl);
