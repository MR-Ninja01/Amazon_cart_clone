
function fun()
{
    let drop =document.getElementById("drop").value;
    document.getElementById("drop").style.border="2px solid black";
    let rate = document.getElementById("rate").innerHTML;
    let res = drop *rate;
    let res2= "\u20B9"+"&nbsp;"+res;
    var bm2=drop;
    document.getElementById("bm2").innerHTML=drop+"&nbsp;";
    document.getElementById("res").innerHTML="\u20B9" + "<b>"+"&nbsp;" + res +"</b>";
    document.getElementById("res2").innerHTML=res2;
}
