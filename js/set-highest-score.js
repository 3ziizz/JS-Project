var get_Hscore=document.getElementById("score");
if(localStorage.getItem("highest-score")!=null)
{
    get_Hscore.textContent="Highest Score :"+localStorage.getItem("highest-score");
}else
{
    localStorage.setItem("highest-score",score);
}