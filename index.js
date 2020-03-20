
let oParent = document.getElementById('image');
let arrChilds = document.querySelectorAll(".picture");

oParent.addEventListener("click", (oEvent) => {
    if (oEvent.target.classList.contains("picture")) {
        arrChilds.forEach((img) => {
            img.classList.remove("selected_img");
        });
        oEvent.target.classList.add("selected_img");
    }
});

let oNav = document.querySelector('.navigation');
let arrElems = document.querySelectorAll(".navigation .elems");
oNav.addEventListener("click", (oEvent) => {
    if (oEvent.target.classList.contains("elems")) {
        arrElems.forEach((elem) => {
            elem.classList.remove("selected_nav");
        });
        oEvent.target.classList.add("selected_nav");
    }
});

const anchors = document.querySelectorAll('a[href*="#"]')
anchors.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })

    })
});

function setNewImg(oEvent) {
    const oImges = {
        1: ["./assets/ship.png", "./assets/girl.png", "./assets/black_white.png",
            "./assets/Robo.png", "./assets/party.png", "./assets/SDK.png",
            "./assets/rbo.png", "./assets/bird.png", "./assets/green_monster.png",
            "./assets/words.png", "./assets/monster.png", "./assets/Images.png"],

        2: ["./assets/words.png", "./assets/monster.png", "./assets/Images.png",
            "./assets/ship.png", "./assets/girl.png", "./assets/black_white.png",
            "./assets/Robo.png", "./assets/party.png", "./assets/SDK.png",
            "./assets/rbo.png", "./assets/bird.png", "./assets/green_monster.png"],

        3: ["./assets/Robo.png", "./assets/party.png", "./assets/SDK.png",
            "./assets/girl.png", "./assets/ship.png", "./assets/bird.png",
            "./assets/words.png", "./assets/monster.png", "./assets/Images.png",
            "./assets/rbo.png", "./assets/black_white.png", "./assets/green_monster.png"],

        4: ["./assets/monster.png", "./assets/Images.png", "./assets/words.png",
            "./assets/rbo.png", "./assets/bird.png", "./assets/green_monster.png",
            "./assets/ship.png", "./assets/girl.png", "./assets/black_white.png",
            "./assets/Robo.png", "./assets/party.png", "./assets/SDK.png"],
    }
    let arrChilds = document.querySelectorAll(".picture");
    var sKey = oEvent.target.id;
    arrChilds.forEach((oImg, index) => {
        oImg.src = oImges[sKey][index];
    })
}


let oPortfolio = document.querySelector('.port_navigation');
let arrPortfElems = document.querySelectorAll(".port_navigation .portfolioElems");

oPortfolio.addEventListener("click", (oEvent) => {
    if (oEvent.target.classList.contains("portfolioElems")) {
        arrPortfElems.forEach((elem) => {
            elem.classList.remove("selected_portfolio");
            setNewImg(oEvent);
        });
        oEvent.target.classList.add("selected_portfolio");

    }
});

var slideIndex = 1;
showSlides(1);

function plusSlide() {
    showSlides(slideIndex += 1);
}
function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}
let oVerticalP = document.getElementById('verticalPhone');
let oHorizontalP = document.getElementById('horizontalPhone');
const arrayPhones = [oVerticalP, oHorizontalP];
arrayPhones.forEach((item) => {
    item.addEventListener("click", (oEvent) => {
        const relatedScreenId = oEvent.target.dataset.relatedscreen;
        const relatedscreen = document.getElementById(relatedScreenId);
        relatedscreen.classList.toggle("offScreen");
    })

});

let oButton = document.getElementById("submit");

oButton.onclick = function(){
    let oSubject = document.getElementById("subject");
    let oDescribe = document.getElementById("describe");
    if(oSubject.value == "" && oDescribe.value == ""){
        alert("The letter was sent \n No subject \n No description");
    }
    if(oSubject.value == "" && oDescribe.value !== ""){
        alert(`The letter was sent \n No subject \n Description: ${oDescribe.value}` );
    }
    if(oSubject.value !== "" && oDescribe.value == ""){
        alert(`The letter was sent \n Subject: ${oSubject.value} \n No description `);
    }
    if(oSubject.value !== "" && oDescribe.value !== ""){
        alert(`The letter was sent \n Subject: ${oSubject.value} \n Description: ${oDescribe.value}`);
    }
}



