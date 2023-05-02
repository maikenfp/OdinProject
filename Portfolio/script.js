const projectsBtn = document.getElementById("projects_btn");
const projects = document.getElementById("projects");
const aboutMeBtn = document.getElementById("about_me_btn");
const aboutMeContent = document.getElementById("about_me");

/*aboutMeBtn.addEventListener("click", (e) => {
    let tabs = document.getElementsByClassName("tab_switch");
    for(i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none";
    }
    aboutMeContent.style.display = "block";
})

projectsBtn.addEventListener("click", (e) => {
    let tabs = document.getElementsByClassName("tab_switch");
    for(i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none";
    }
    projects.style.display = "block";
})*/

function switchTab(tab) {
    var i;
    var x = document.getElementsByClassName("tab_switch");
    for (i = 0; i < x.length; i++) {
      x[i].style.setProperty('display', 'none');
    }
    document.getElementById(tab).style.setProperty('display', 'grid');
  }