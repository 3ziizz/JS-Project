drop_rate=200;
create_rate=2500;
character_choosed="";
foot=document.getElementById("football");
basket1=document.getElementById("basketball");
rabbit=document.getElementById("carrot");

if(foot.checked)
{   
    character_choosed="img/bal.png"
    collector=new choose_collector("img/goal.png")

}else if(basket1.checked)
{
    character_choosed="img/basketball.png"
    collector=new choose_collector("img/collector_2.png")
}else if (rabbit.checked)
{
    character_choosed="img/carrot.png"
    collector=new choose_collector("img/collector_3.png")
}
else
{   
    character_choosed="img/bal.png"
    collector=new choose_collector("img/goal.png")
}
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

var character=function(source)
{
    this.source=source;
    ball = document.createElement("img");
    var src1 = document.createAttribute("src");
    src1.value = this.source;
    ball.setAttributeNode(src1);
    var pos1 = document.createAttribute("class");
        if(source==character_choosed){
        pos1.value="balls";
        }else{
            pos1.value="hearts";
        }
    ball.setAttributeNode(pos1);
    ball.style.right=randomIntFromInterval(370,980)+"px";
    document.body.appendChild(ball);
   

}
character.prototype.dropball=function()
{   
    var ball_arr=document.getElementsByClassName("balls");
    for (var i=0;i<ball_arr.length;i++)   
    {
            var top_pos=(getComputedStyle(ball_arr[i]).top).split("p");
            if(top_pos[0]<600)
        {
            ball_arr[i].style.top=(top_pos[0]-0)+20+"px";

        }else
        {
            document.body.removeChild(ball_arr[i]);
            
        }
    }
    
}
character.prototype.dropheart=function()
{   
    var heart_arr=document.getElementsByClassName("hearts");
    for (var i=0;i<heart_arr.length;i++)   
    {
            var top_pos=(getComputedStyle(heart_arr[i]).top).split("p");
            if(top_pos[0]<600)
        {
            heart_arr[i].style.top=(top_pos[0]-0)+10+"px";

        }else
        {
            document.body.removeChild(heart_arr[i]);
        }
    }
    
}

    var down =new character(character_choosed);
    function cteate(){new character(character_choosed)};

    lev1_create=setInterval(cteate,create_rate);
    lev1_interval=setInterval(down.dropball,drop_rate); 
    
    function level_2()
    {   
        clearInterval(lev1_interval);
        clearInterval(lev1_create);
        lev2_interval=setInterval(down.dropball,drop_rate/2);
        lev2_create=setInterval(cteate,create_rate/2);
        lev+=1;
        updatelevel.textContent="Level:"+lev;
    }
    setTimeout(level_2,20000); 

    function level_3()
    {   
        clearInterval(lev2_interval);
        clearInterval(lev2_create);
        setInterval(down.dropball,drop_rate/4);
        setInterval(cteate,create_rate/3);
        lev+=1;
        updatelevel.textContent="Level:"+lev;
    }
    setTimeout(level_3,40000); 

var heart=new character("img/prize.png");
function cheate(){new character("img/prize.png")};
setInterval(cheate,15000);
setInterval(heart.dropheart,300);
