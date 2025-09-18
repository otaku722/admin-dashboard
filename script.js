let projects = document.querySelectorAll(".projects li");

projects.forEach(project => {
    let div = document.createElement("div");

    let favorite = document.createElement("img");
    favorite.setAttribute("src", "images/star-plus.svg");

    let eye = document.createElement("img");
    eye.setAttribute("src", "images/eye-plus.svg"); 

    let share = document.createElement("img");
    share.setAttribute("src", "images/share.svg");   

    div.appendChild(favorite);
    div.appendChild(eye);
    div.appendChild(share);

    project.appendChild(div);
});