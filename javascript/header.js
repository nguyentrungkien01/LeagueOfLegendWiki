var click = 2;
var status = 1;
var arrId = ["banner-Valorant", "banner-BladeAndSoul", "banner-LeagueOfLegend", "banner-FifaOnline4", "banner-FreeFire", "banner-ArenaOfValor"]
function setAnimationNew(id) {
    var x = document.getElementById(id);
    x.style.display = "block";
    x.style.width = "50%";
    x.style.margin = "0 auto";
    x.style.transition = "0.8s";
    x.style.position = "relative";
}

function setAnimationOrigin(id) {
    var x = document.getElementById(id);
    x.style.display = "none";
    x.style.width = "100%";
    x.style.height = "100%";
    x.style.opacity = "1";
    x.style.position = "relative";
    x.style.top = "0";
    x.style.transition = "0s";
    x.style.left = "0";
    x.style.right = "0";
}
function setBannerTwoSide(id) {
    var x = document.getElementById(id);
    x.style.display = "block";
    x.style.width = "20%";
    x.style.height = "70%";
    x.style.opacity = "0.4";
    x.style.top = "12%";
    x.style.position = "absolute";
    x.style.transition = "0.7s";
}

function leftSide(id) {
    var x = document.getElementById(id);
    setBannerTwoSide(id);
    x.style.marginLeft = "4%";
    x.style.left = "1%";
}
function rightSide(id) {
    var x = document.getElementById(id);
    setBannerTwoSide(id);
    x.style.marginRight = "4%";
    x.style.right = "1%";

}
function changeColorArrow() {
    var left = document.getElementById("arrow-left");
    var right = document.getElementById("arrow-right");
    if (status == 1)
        left.style.display="none";
    else
        left.style.display = "block";
    if (status == 0)
        right.style.display = "none";
    else
        right.style.display = "block";
}

function clickNextBanner() {
    if (click < arrId.length - 1 && status == 1) {
        if (click != 0)
            setAnimationOrigin(arrId[click - 1]);
        setAnimationOrigin(arrId[click]);
        setAnimationOrigin(arrId[click + 1]);
        click++;
        setAnimationNew(arrId[click]);
        changeColorArrow();
        if (click != 0)
            leftSide(arrId[click - 1]);
        if (click != 5)
            rightSide(arrId[click + 1]);
    }

    if (click == 5) {
        status = 0;
        changeColorArrow();
    }
}

function clickPreBanner() {
    if (click > 0 && status == 0) {
        if (click != 5)
            setAnimationOrigin(arrId[click + 1]);
        setAnimationOrigin(arrId[click]);
        setAnimationOrigin(arrId[click - 1]);
        click--;
        setAnimationNew(arrId[click]);
        changeColorArrow();
        if (click != 0)
            leftSide(arrId[click - 1]);
        if (click != 5)
            rightSide(arrId[click + 1]);
    }
    if (click == 0) {
        status = 1;
        changeColorArrow();
    }
}