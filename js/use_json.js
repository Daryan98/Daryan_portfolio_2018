// Adding Class Function
function addClass(el, clas) {
    return el.classList.add(clas);
}

const imdbMovieUrl = "../jsonfile/my_portfolio.json";


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
});

function project_section(data) {
    // Already exsist
    const ulElement = document.querySelector("ul.project_lis");
    ulElement.innerHTML = "";

    let i = 0;
    data.projects.forEach(project => {
        i++;

        const liElement = document.createElement("li");
        const divElement = document.createElement("div");
        const imgElement = document.createElement("img");
        const div_1Element = document.createElement("div");
        const aElement = document.createElement("a");

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

        project_section_popup(liElement, project);
    });
}


function project_section_popup(liElement, data) {
    const divElement = document.createElement("div");
    const div_1Element = document.createElement("div");
    const div_2Element = document.createElement("div");
    const div_3Element = document.createElement("div");
    const div_4Element = document.createElement("div");

    const imgElement = document.createElement("img");

    const h2Element = document.createElement("h2");
    const h3Element = document.createElement("h3");
    const pElement = document.createElement("p");

    const aElement = document.createElement("a");
    const a_1Element = document.createElement("a");
    const a_2Element = document.createElement("a");

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
    

    imgElement.src = data.img_avatar_big;
    h2Element.innerHTML = data.name;
    h3Element.innerHTML = data.used_languges;
    pElement.innerHTML = data.paragraph;
    aElement.innerHTML = "&times;";
    aElement.href = "#projects_section"
    a_1Element.innerHTML = "Website Url";
    a_2Element.innerHTML = "GitHub Url";

    a_1Element.href = data.website_url;
    a_2Element.href = data.github_url;
    

    liElement.appendChild(divElement);
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