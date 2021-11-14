var firstObj = {
    backgroundColor: "#336699",
    color: "black"
};
var secondObj = {
    backgroundColor: "rgb(9, 41, 73)",
    color: "#FF6633"
};
function changeCss(selector, obj) {
    $(selector).css(obj);
}
$(document).ready(function () {
    $("#general").click(function () {
        $("#sub-content-general").show("slow");
        $("#sub-content-development").hide("slow");
        changeCss("#general .choice", firstObj);
        changeCss("#development .choice", secondObj);
    });
    $("#development").click(function () {
        $("#sub-content-general").hide("slow");
        $("#sub-content-development").show("slow");
        changeCss("#general .choice", secondObj);
        changeCss("#development .choice", firstObj);
    });
});

$(document).ready(function () {
    $("#music").click(function () {
        $("#sub-content-music").fadeIn("slow");
        $("#sub-content-videos").fadeOut("slow");
        $("#sub-content-gallery").fadeOut("slow");
        changeCss("#music .choice", firstObj);
        changeCss("#videos .choice", secondObj);
        changeCss("#gallery .choice", secondObj);
    });
    $("#videos").click(function () {
        $("#sub-content-music").fadeOut("slow");
        $("#sub-content-videos").fadeIn("slow");
        $("#sub-content-gallery").fadeOut("slow");
        changeCss("#music .choice", secondObj);
        changeCss("#videos .choice", firstObj);
        changeCss("#gallery .choice", secondObj);
    });
    $("#gallery").click(function () {
        $("#sub-content-music").fadeOut("slow");
        $("#sub-content-videos").fadeOut("slow");
        $("#sub-content-gallery").fadeIn("slow");
        changeCss("#music .choice", secondObj);
        changeCss("#videos .choice", secondObj);
        changeCss("#gallery .choice", firstObj);
    });
    $("#showMore").click(function () {
        if ($(this).val() == "Show More") {
            $("#subTab-gallery").show("slow");
            $(this).val("Hidden");
        }
        else {
            $("#subTab-gallery").hide("slow");
            $(this).val("Show More");
        }
    });
});

$(document).ready(function () {
    $(".btnColSho").mouseover(function () {
        $(this).css({
            color: "#DDDDDD",
            textDecoration: "underline"
        })
    })
    $(".btnColSho").mouseout(function () {
        $(this).css({
            color: "#66CCFF",
            textDecoration: "underline"
        })
    })
    $("#btnCollapse").click(function () {
        $("#firstTable").fadeOut("slow");
        $("#subTable").show("slow");
    })
    $("#btnShow").click(function () {
        $("#firstTable").fadeIn("slow");
        $("#subTable").hide("slow");

    })
})


