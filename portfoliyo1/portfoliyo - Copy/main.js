window.onscroll = function() {myFunction()};
var navbar=document.querySelector(".navbar");
myFunction(){
    if(this.scrollY > 20){
        navbar.style.background="green";
    }
}