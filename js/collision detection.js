function collision_ball()
{
    var dropped_ball=document.getElementsByClassName("balls");
    var collector=document.getElementById("box");
    for (var i=0;i<dropped_ball.length;i++)
    {

    if( (dropped_ball[i].getBoundingClientRect().top >= collector.getBoundingClientRect().top )
      && (dropped_ball[i].getBoundingClientRect().right<collector.getBoundingClientRect().right)&&((dropped_ball[i].getBoundingClientRect().left>collector.getBoundingClientRect().left))) 
        {
                document.body.removeChild(dropped_ball[i]);
                countscore();
                
                var push1 = new push("crash","audio/Button_Push.mp3");
                push1.setsource();
                push1.play();


            }
    if( (dropped_ball[i].getBoundingClientRect().top > collector.getBoundingClientRect().top )
      && ((dropped_ball[i].getBoundingClientRect().right>collector.getBoundingClientRect().right)||((dropped_ball[i].getBoundingClientRect().left<collector.getBoundingClientRect().left)))) 
        {
                document.body.removeChild(dropped_ball[i]);
                removeheart_fun();
            }

    }
}
function collision_heart()
{
    var dropped_heart=document.getElementsByClassName("hearts");
    var collector=document.getElementById("box");
    for (var i=0;i<dropped_heart.length;i++)
    {      
        if( (dropped_heart[i].getBoundingClientRect().top >= collector.getBoundingClientRect().top )
      && (dropped_heart[i].getBoundingClientRect().right<collector.getBoundingClientRect().right)&&((dropped_heart[i].getBoundingClientRect().left>collector.getBoundingClientRect().left))) 
        {
               var prize1 = new prize("crash","audio/Crowding.mp3");
                prize1.setsource();
                prize1.play();
                document.body.removeChild(dropped_heart[i]);
                score+=4;
                countscore();
            }
    }
}

setInterval(collision_heart,1);
setInterval(collision_ball,1);



function push (id, src) {
    this.id = id;
    this.src = src;
    this.setsource=function(){
document.getElementById(this.id).src = this.src;


};
  this.mute=function() {document.getElementById(this.id).muted=!document.getElementById(this.id).muted ;};
this.play=function(){

document.getElementById(this.id).autoplay = true;
document.getElementById(this.id).load();
};
    
}



function prize (id, src) {
    this.id = id;
    this.src = src;
    this.setsource=function(){
document.getElementById(this.id).src = this.src;


};
  this.mute=function() {document.getElementById(this.id).muted=!document.getElementById(this.id).muted ;};
this.play=function(){
document.getElementById(this.id).currentTime=0;
document.getElementById(this.id).autoplay = true;
document.getElementById(this.id).load();
};
    
}