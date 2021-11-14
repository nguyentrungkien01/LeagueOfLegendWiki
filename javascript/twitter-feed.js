
function setChoiceBgTwitter(id) {
    var obj = document.getElementById(id);
    obj.style.backgroundColor = "#CC3300";
    obj.style.color = "white";
}
function setChoiceBgOriginal(id) {
    var obj = document.getElementById(id);
    obj.style.backgroundColor = "rgb(6, 30, 54)";
    obj.style.color = "#FFCC66";
}


$(document).ready(function(){
    $(".headBox li span").click(function(){

       $(".headBox li span").css({
            backgroundColor: "rgb(6, 30, 54)",
            color: "#FFCC66"
        })

        $(this).css({
            backgroundColor: "#CC3300",
            color: "white"
        })

        $(".inBox .timeline").css({
            display: "none"
        })

        var idx=$(this).attr("idx")
        $(`.inBox .timeline:nth-child(${idx})`).css({
            display: "block"
        })
    })
})