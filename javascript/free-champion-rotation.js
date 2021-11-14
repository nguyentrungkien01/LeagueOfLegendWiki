
function setChoiceBgRotatation(id) {
    var obj = document.getElementById(id);
    obj.style.backgroundColor = "#699FF6";
    obj.style.color = "white";
}
function setChoiceBgOriginal(id) {
    var obj = document.getElementById(id);
    obj.style.backgroundColor = "rgb(6, 30, 54)";
    obj.style.color = "#FFCC66";
}

$(document).ready(function(){
    $(".headChoice.fCR div span").click(function(){

       $(".headChoice.fCR div span").css({
            backgroundColor: "rgb(6, 30, 54)",
            color: "#FFCC66"
        })

        $(this).css({
            backgroundColor: "#699FF6",
            color: "white"
        })

        $(".inBox .cnt-FreeChampionRotation .sub-cnt").css({
            display: "none"
        })

        var idx=$(this).attr("idx")
        $(`.inBox .cnt-FreeChampionRotation .sub-cnt:nth-child(${idx})`).css({
            display: "block"
        })
    })
})
console.log("a");