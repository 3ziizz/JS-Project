score=0;
var lev=1;
var input1= document.body;
var get_Hscore=document.getElementById("score");
var updatescore=document.getElementById("currscore")
var updatelevel=document.getElementById("level");
updatelevel.textContent="Level:"+lev;

if(localStorage.getItem("highest-score")!=null)
{
    get_Hscore.textContent="Highest Score :"+localStorage.getItem("highest-score");
}else
{
    localStorage.setItem("highest-score",score);
}

function countscore(e)
{
    score+=1;
    updatescore.textContent="Score:"+score;
    if(score>localStorage.getItem("highest-score"))
    {
        localStorage.setItem("highest-score",score);
        get_Hscore.textContent="Highest Score :"+localStorage.getItem("highest-score");
    }
    // if (score == 10 || score == 20 ||score == 30 ||score == 40 ||score == 50){
    //     lev+=1;
    //     updatelevel.textContent="Level:"+lev;
    // } 
}

var removeheart=[3];
var count_lives=0;

removeheart[0]=document.getElementById("first-heart")
removeheart[1]=document.getElementById("second-heart")
removeheart[2]=document.getElementById("third-heart")

function removeheart_fun(e){
    removeheart[count_lives].src="img/dieheart.png";
    count_lives+=1;
    if(count_lives>=3){
        //count_lives=0;
        score=-1;
        countscore();
    }
}


     

