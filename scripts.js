const panels = document.querySelectorAll('.panel');

console.log(panels); 
panels.forEach((panel) => {
    panel.addEventListener('click', ()=>{
        //console.log("clickeado")
        removeActClss();
        panels.classList.add('active');
    });
});

function removeActClss(){
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}