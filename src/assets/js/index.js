$(document).ready(function() {
    // validation du formulaire par un popupbox
    let myform = document.getElementById("myform");
    let popup = document.getElementById("popup");
    myform.addEventListener("submit", function(e) {
        e.preventDefault();
        popup.style.display = "block";
        document.addEventListener("click", function(e) {
            popup.style.display = "none";
        });
    });

    // declaration des variables
    let next = document.getElementById("next");
    let imgFig1 = document.getElementById("imgf1");
    let nom1 = document.getElementById("nom1");
    let description1 = document.getElementById("descrip1");
    let imgFig2 = document.getElementById("imgf2");
    let nom2 = document.getElementById("nom2");
    let description2 = document.getElementById("descrip2");
    let i = 1;

    $.get({
        url: "../personnage.json",
        datatype: "json",
        success: function(personnage) {
            next.addEventListener("click", function() {
                if (i == 9) {
                    // figure 1
                    imgFig1.setAttribute(
                        "src",
                        "../../../assets/Illustrations + Logo/1_Landing_page/Pantherhome_slider_1.png"
                    );
                    nom1.innerHTML = personnage[0].nom;
                    description1.innerHTML = personnage[0].description;
                    // figure 2
                    imgFig2.setAttribute(
                        "src",
                        "../../../assets/Illustrations + Logo/1_Landing_page/Pantherhome_slider_2.png"
                    );
                    nom2.innerHTML = personnage[1].nom;
                    description2.innerHTML = personnage[1].description;
                    i = 1;
                } else {
                    // figure 1
                    imgFig1.setAttribute(
                        "src",
                        "../../../assets/Illustrations + Logo/1_Landing_page/Pantherhome_slider_" +
                        (i + 1) +
                        ".png"
                    );
                    nom1.innerHTML = personnage[i].nom;
                    description1.innerHTML = personnage[i].description;
                    // figure 2
                    imgFig2.setAttribute(
                        "src",
                        "../../../assets/Illustrations + Logo/1_Landing_page/Pantherhome_slider_" +
                        (i + 2) +
                        ".png"
                    );
                    nom2.innerHTML = personnage[i + 1].nom;
                    description2.innerHTML = personnage[i + 1].description;
                    i++;
                }
            });
        },
        error: function() {
            console.log("connexion echoue");
        },
    });
});