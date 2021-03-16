const anim = document.querySelector(".animate");
const div = document.getElementById("divs").children[0].children[0];
const divs =document.getElementById("divs").children[0];
window.onscroll=function(){
    if(document.documentElement.scrollTop>500){
        anim.style.visibility="visible";
        anim.style.opacity=".9"
    }
    else {
        anim.style.visibility="hidden"
    }
}
