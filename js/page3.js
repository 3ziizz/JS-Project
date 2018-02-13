function Sound (id, src) {
    this.id = id;
    this.src = src;
    this.setsource=function(){
document.getElementById(this.id).src = this.src;
// audio.setAttribute('src',this.src);

};
  this.mute=function() {document.getElementById(this.id).muted=!document.getElementById(this.id).muted ;};
this.autoplay=function(){

document.getElementById(this.id).autoplay = true;
document.getElementById(this.id).loop=true ;
document.getElementById(this.id).load();
};
    
}



var sound1 = new Sound("myaudio1","audio/Kalimba.mp3");
sound1.setsource();
sound1.autoplay();


var btn=document.getElementById("mybtn1");
btn.addEventListener('click',function(){sound1.mute()});

form=document.getElementById("form1");
form.addEventListener('submit',valid);

function valid(e)
{
    head.style.display="initial"
    main_game.style.display="none"
    option_page.style.display="none"
    exit_page.style.display="none"
}