// alert("Website is currently in development")
let change2Check = null;

document.addEventListener("DOMContentLoaded", ()=>{
    listeners();
    goToSchoolLink();
    goToRepoLink();
    copyText();
    resizeHandler()
    updateNavBtn();
    scrollNavDetect();
    scrollToSection();
    window.addEventListener('resize', resizeHandler);
})

function resizeHandler(){
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if(viewportWidth <= 500){
        disabledEducBtn(true);
        enableListenerSchoolTxt(true);

        disabledProjBtn(true);
        enableListenerProjTxt(true);
    }
    else{
        disabledEducBtn(false);
        enableListenerSchoolTxt(false);

        disabledProjBtn(false);
        enableListenerProjTxt(false);
    }
}

// For Educ Buttons
function disabledEducBtn(status){
    if(status){
        let btns = document.querySelectorAll(".education-btn");

        btns.forEach(btn=>{
            btn.disabled = status;
            
            let div = document.createElement("div");
            div.classList.add("education-btn");
            div.setAttribute("data-school", `${btn.dataset.school}`);
    
            div.innerHTML = btn.innerHTML;
    
            btn.parentNode.replaceChild(div, btn);
        })
    }
    else{
        let divs = document.querySelectorAll(".education-btn");

        divs.forEach(div=>{            
            let button = document.createElement("button");
            button.classList.add("education-btn");
            button.setAttribute("data-school", `${div.dataset.school}`);
            button.setAttribute("type", "button");
    
            button.innerHTML = div.innerHTML;
            div.parentNode.replaceChild(button, div);

            goToSchoolLink();
        }) 
    }
   
}

function enableListenerSchoolTxt(status){

    if(status){
        let txts = document.querySelectorAll(".education-btn .school");

        txts.forEach(txt=>{
            txt.setAttribute("onclick", `mobileRedirectSchool('${txt.dataset.school}');`);
        });
    }
    else{
        let txts = document.querySelectorAll(".education-btn .school");

        txts.forEach(txt=>{
            txt.removeAttribute("onclick");
        });
    }

    
}

function mobileRedirectSchool(school){
    if(school == "bsu"){
        window.open("https://www.bulsu.edu.ph", "_blank");
    }
    else if(school == "yanga"){
        window.open("https://dyci.edu.ph", "_blank");
    }
    else if(school == "james"){
        window.open("https://www.facebook.com/StJamesAcademyPlaridelBulacan", "_blank");
    }
}

// For Proj Buttons
function disabledProjBtn(status){
    if(status){
        let btns = document.querySelectorAll(".project-container");

        btns.forEach(btn=>{
            btn.disabled = status;
            
            let div = document.createElement("div");
            div.classList.add("project-container");
            
            div.setAttribute("data-proj", `${btn.dataset.proj}`);
    
            div.innerHTML = btn.innerHTML;
    
            btn.parentNode.replaceChild(div, btn);
        })
    }
    else{
        let divs = document.querySelectorAll(".project-container");

        divs.forEach(div=>{            
            let button = document.createElement("button");
            button.classList.add("project-container");
            button.setAttribute("data-proj", `${div.dataset.proj}`);
            button.setAttribute("type", "button");
    
            button.innerHTML = div.innerHTML;
            div.parentNode.replaceChild(button, div);

            goToRepoLink();
        }) 
    }
   
}

function enableListenerProjTxt(status){
    if(status){
        let txts = document.querySelectorAll(".project-container .main");
        txts.forEach(txt=>{
            txt.setAttribute("onclick", `mobileRedirectProj('${txt.dataset.proj}');`);
        });
    }
    else{
        let txts = document.querySelectorAll(".project-container .main");

        txts.forEach(txt=>{
            txt.removeAttribute("onclick");
        });
    }

}

function mobileRedirectProj(proj){
    if(proj == "calculator"){
        window.open("https://clarence-coronel.github.io/calculator/", "_blank");
    }
    else if(proj == "sketch"){
        window.open("https://clarence-coronel.github.io/top_etch-a-sketch/", "_blank");
    }
}



function copyToClipboard(textToCopy, type) {
    clearInterval(change2Check);
    // Create a temporary textarea element
    var textarea = document.createElement("textarea");

    // Set the value of the textarea to the text you want to copy
    textarea.value = textToCopy;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    if(type == "email"){
        let ico = document.querySelector(`#copyEmail`);
        let btn = document.querySelector(".copy-text[data-info='email']");
        let text = document.querySelector(".email");

        if(document.querySelector(`#copyPhone`).innerText == "done"){
            document.querySelector(`#copyPhone`).innerText = "content_copy";
            document.querySelector(".copy-text[data-info='phone']").classList.remove("copied");
            document.querySelector(".phone-num").classList.remove("text-copied");
        }

        btn.classList.add("copied");
        text.classList.add("text-copied")

        ico.innerText = "done";

        change2Check = setTimeout(()=>{
            ico.innerText = "content_copy";
            btn.classList.remove("copied");
            text.classList.remove("text-copied");
        },5000)
    }
    else{
        let ico = document.querySelector(`#copyPhone`);
        let btn = document.querySelector(".copy-text[data-info='phone']");
        let text = document.querySelector(".phone-num");

        if(document.querySelector(`#copyEmail`).innerText == "done"){
            document.querySelector(`#copyEmail`).innerText = "content_copy";
            document.querySelector(".copy-text[data-info='email']").classList.remove("copied");
            document.querySelector(".email").classList.remove("text-copied");
        }

        btn.classList.add("copied");

        ico.innerText = "done";
        text.classList.add("text-copied")

        change2Check = setTimeout(()=>{
            ico.innerText = "content_copy";
            btn.classList.remove("copied");
            text.classList.remove("text-copied");
        },5000)
    }
}

function listeners(){
    let light = document.getElementById('light');

    document.addEventListener('mousemove', function(event) {
        // Get the mouse coordinates
        var mouseX = event.clientX;
        var mouseY = event.clientY;
    
        // Update the position of the circular div
        light.style.left = mouseX - light.offsetWidth / 2 + 'px';
        light.style.top = mouseY - light.offsetHeight / 2 + 'px';
    });
}

function goToSchoolLink(){
    let schools = document.querySelectorAll(".education-btn");

    schools.forEach(school=>{
        
        school.addEventListener("click", ()=>{
            if(school.dataset.school == "bsu"){
                window.open("https://www.bulsu.edu.ph", "_blank");
            }
            else if(school.dataset.school == "yanga"){
                window.open("https://dyci.edu.ph", "_blank");
            }
            else if(school.dataset.school == "james"){
                window.open("https://www.facebook.com/StJamesAcademyPlaridelBulacan", "_blank");
            }
        })
        
    })
}

function goToRepoLink(){
    let projects = document.querySelectorAll(".project-container");

    projects.forEach(project=>{
        
        project.addEventListener("click", ()=>{
            if(project.dataset.proj == "sketch"){
                window.open("https://clarence-coronel.github.io/top_etch-a-sketch/", "_blank");
            }else if(project.dataset.proj == "calculator"){
                window.open("https://clarence-coronel.github.io/calculator/", "_blank");
            }
        })
        
    })
}

function copyText(){
    let btns = document.querySelectorAll(".copy-text");

    btns.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            if(btn.dataset.info == "email") copyToClipboard("clarence.coronel.r@gmail.com", "email");
            else if(btn.dataset.info == "phone") copyToClipboard("0967 599 8955", "phone");
        });
    });
}

function updateNavBtn(){
    let nav = document.querySelectorAll(".nav-row");

    nav.forEach(item=>{
        item.addEventListener("click", ()=>{
            selectNewNav(item.dataset.goto);
        })
    }) 
}

function scrollNavDetect(){
    window.addEventListener("scroll", ()=>{
        scrollToSection();
    })
}

function scrollToSection(){
    let about = document.querySelector("#about").getBoundingClientRect();
    let skills = document.querySelector("#skills").getBoundingClientRect();
    let proj = document.querySelector("#proj").getBoundingClientRect();

    const viewportHeightPercentage = 0.1; // Adjust this percentage based on your preference

    if(proj.top < window.innerHeight ) updateSelectedNavStyle("proj");
    else if(skills.top < window.innerHeight) updateSelectedNavStyle("skills");
    else if(about.top <= window.innerHeight) updateSelectedNavStyle("about");
}

function selectNewNav(navSelected){
    updateSelectedNavStyle(navSelected);

    let topPosition = document.getElementById(navSelected).offsetTop - 80;

    if(navSelected == "about") topPosition -= 300;

    window.scrollTo({
        top: topPosition,
        left: 0,
        behavior: 'smooth',
    }); 
}

function updateSelectedNavStyle(newNav){

    document.querySelectorAll(".nav-row").forEach(remove=>{
        remove.classList.remove("selected");
    })

    document.querySelector(`.nav-row[data-goto="${newNav}"]`).classList.add("selected");

}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}