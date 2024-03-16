const panels = document.querySelectorAll(".panel");

for (let panel of panels){
    panel.addEventListener("click",()=>{
        changeActive();
        panel.classList.add("active")
    })
}

function changeActive(panel){
    for (let panel of panels){
        panel.classList.remove("active");
    }
}