const anim = document.querySelector(".animate");
window.onscroll=function(){
    if(document.documentElement.scrollTop>500){
        anim.style.visibility="visible";
        anim.style.opacity=".9"
    }
    else {
        anim.style.visibility="hidden"
    }
}