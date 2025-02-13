let mainColor = localStorage.getItem("colot-option");
if (mainColor !== null) {
  document.documentElement.style.setProperty("--main-color", mainColor);
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");
    if (element.dataset.color === mainColor) {
      element.classList.add("active");
    }
  });
}
// Random background
let backgroundOption = true;
// variblr to control thr background inteval
let thebackgroundInte;

// check if thr locl storeg itr,a
let backgroundLocaItem = localStorage.getItem("background_option");

//check if rando background loval storeg id not empty
if (backgroundLocaItem !== null) {
  if (backgroundLocaItem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }
  // remv activ vlass from all span
  document.querySelectorAll(".random-background span").forEach((element) => {
    element.classList.remove("active");
  });
  if (backgroundLocaItem === "true") {
    document.querySelector(".random-background .yes").classList.add("active");
  } else {
    document.querySelector(".random-background .no").classList.add("active");
  }
}

// Togle spin class On Icon
document.querySelector(".move-icon .icon").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".setting-box").classList.toggle("opne");
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("colot-option", e.target.dataset.color);

    handleActive(e);
  });
});

// Switch Background
const BackgroundsLi = document.querySelectorAll(".random-background span");
// loop
BackgroundsLi.forEach((span) => {
  span.addEventListener("click", (e) => {
    handleActive(e);

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randmizImge();
      localStorage.setItem("background_option", true);
    } else {
      backgroundOption = false;
      clearInterval(thebackgroundInte);
      localStorage.setItem("background_option", false);
    }
  });
});

let landingPage = document.querySelector(".landing-page");

let imgArray = [
  "landing4.jpg",
  "landing1.webp",
  "landing2.jpg",
  "landing3.jpg",
  "landing5.jpg",
];

function randmizImge() {
  if (backgroundOption === true) {
    thebackgroundInte = setInterval(function () {
      let rannm = Math.floor(Math.random() * imgArray.length);
      landingPage.style.backgroundImage = 'url("img/' + imgArray[rannm] + '")';
    }, 10000);
  }
}
randmizImge();
// select skill
let ourSkills = document.querySelector(".skills");
window.onscroll = function () {
  // skills offset top
  let skillsOfsetTop = ourSkills.offsetTop;

  // outer heigth
  let skillsOuterHeiguth = ourSkills.offsetHeight;
  // window heigth
  let windowHiigth = this.innerHeight;
  // window scroolltop
  let windowScroollTop = this.pageYOffset;

  if (windowScroollTop < skillsOfsetTop + skillsOuterHeiguth - windowHiigth) {
    let allSkills = document.querySelectorAll(
      ".skills-box .skill-progress span"
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

// create popup with the image
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // creatr ouvral .ele
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    // append overlay in the bod
    document.body.appendChild(overlay);

    // creat the popup
    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";
    if (img.alt !== null) {
      //create heading
      let imgHeading = document.createElement("h3");
      // create text for heading
      let imgText = document.createTextNode(img.alt);
      // append thr text yo the hedaing
      imgHeading.appendChild(imgText);
      //append the heading to the popup box
      popupBox.appendChild(imgHeading);
    }
    //create the img
    let popupImg = document.createElement("img");

    // set img source
    popupImg.src = img.src;
    //add imges to popup box
    popupBox.appendChild(popupImg);
    // appemd thr poup to body
    document.body.appendChild(popupBox);

    //create the close span
    let closebutton = document.createElement("sapn");
    //create thr close button Text
    let closeButtonText = document.createTextNode("X");
    closebutton.appendChild(closeButtonText);

    // add class
    closebutton.className = "close-button";
    //add clos button yo box
    popupBox.appendChild(closebutton);
  });
});
// close poupu
document.addEventListener("click", function (e) {
  if (e.target.className === "close-button") {
    // remove thr current popup
    e.target.parentNode.remove();
    document.querySelector(".popup-overlay").remove();
  }
});

// select all bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullets");
allBullets.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// select all links
const allLinks = document.querySelectorAll(".links a");

function scroollinks(eles) {
  eles.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scroollinks(allBullets);
scroollinks(allLinks);

//handel active state
function handleActive(ev) {
  // remve active vlas from all childrem
  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });

  // add avtive class on self
  ev.target.classList.add("active");
}
let bulletSpan = document.querySelectorAll(".bullets-opthain span");
let bulletscont = document.querySelector(".nav-bullets");

let bulletLocalIt = localStorage.getItem("bullets-opthain");

if (bulletLocalIt !== null) {
  bulletSpan.forEach((span) => {
    span.classList.remove("active");
  });
  if (bulletLocalIt === "block") {
    bulletscont.style.display = "block";
    document.querySelector(".bullets-opthain .yes").classList.add("active");
  } else {
    bulletscont.style.display = "none";
    document.querySelector(".bullets-opthain .no").classList.add("active");
  }
}

bulletSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.display === "show") {
      bulletscont.style.display = "block";
      localStorage.setItem("bullets-opthain", "block");
    } else {
      bulletscont.style.display = "none";
      localStorage.setItem("bullets-opthain", "none");
    }
    handleActive(e);
  });
});

//Reset button
document.querySelector(".reset-options").onclick = function () {
  //localStorage.clear();
  localStorage.removeItem("bullets-opthain");
  localStorage.removeItem("colot-option");
  localStorage.removeItem("background_option");
  window.location.reload();
};

// Toggle Menu
let toggelBot = document.querySelector(".toggel-menu");
let tllinks = document.querySelector(".links");
toggelBot.onclick = function (e) {
  // stop Propagation
  e.stopPropagation();
  this.classList.toggle("menu-active");
  tllinks.classList.toggle("opne");
};

// click anywher outside menu and toggel button
document.addEventListener("click", (e) => {
  if (e.target !== toggelBot && e.target !== tllinks) {
    // chevk if menu is opne
    if (tllinks.classList.contains("opne")) {
      toggelBot.classList.toggle("menu-active");
      tllinks.classList.toggle("opne");
    }
  }
});

// stopPropagation on men
tllinks.onclick = function (e) {
  e.stopPropagation();
};
