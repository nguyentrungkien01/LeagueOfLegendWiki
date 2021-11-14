var arrSelectBoxId = ["game", "role", "attacktype"];
var choiceNum = 1;

function choiceChampion() {
    choiceNum = 1;
    setChoice();
}
function choiceItems() {
    choiceNum = 0;
    setChoice();
}
function setChoiceBg(id) {
    var choice = document.getElementById(id);
    choice.style.backgroundColor = "#699FF6";
    choice.style.padding = "1%";
    choice.style.color = "white";
}
function setChoiceBgOriginal(id) {
    var choice = document.getElementById(id);
    choice.style.backgroundColor = "rgb(6, 30, 54)";
    choice.style.color = "#FFCC66";
}
function setChoice() {
    var champion = document.getElementById("sub-choice-champions");
    var list_champions = document.getElementById("image-list-champions");
    var item = document.getElementById("sub-choice-items");
    var list_items = document.getElementById("image-list-items");
    //choice champions
    if (choiceNum == 1) {
        setChoiceBgOriginal("HC_Items");
        setChoiceBg("HC_Champions");
        champion.style.display = "flex";
        list_champions.style.display = "block";
        item.style.display = "none";
        list_items.style.display = "none";
    }
    //choice items
    else {
        setChoiceBgOriginal("HC_Champions");
        setChoiceBg("HC_Items");
        item.style.display = "flex";
        item.style.justifyContent = "flex-end";
        list_items.style.display = "block";
        champion.style.display = "none";
        list_champions.style.display = "none";
    }
}
/*======================================*/

/*  selectBox effect champions    */

function filter(id) {
    var result = [];
    for (var i = 0; i < arrSelectBoxId.length; i++) {
        if (arrSelectBoxId[i] != id)
            result.push(arrSelectBoxId[i]);
    }
    var resultClassEle = [];
    for (var i = 0; i < result.length; i++)
        resultClassEle.push(document.getElementsByClassName(document.getElementById(result[i]).value + "-img"));
    return resultClassEle;
}
function check(arr, obj) {
    for (var i = 0; i < arr.length; i++)
        if (obj === arr[i])
            return true;
    return false;
}
function getSelectBox(id) {
    var className = document.getElementById(id).value;
    /*var temp = document.getElementById(id).children;
    for (var i = 0; i < temp.length; i++) {`
        var x = temp[i].value;
        if (x !== className) {
            var classArrTemp = document.getElementsByClassName(x + "-img");
            for (var j = 0; j < classArrTemp.length; j++) {
                classArrTemp[j].style.opacity = "0.1";
                classArrTemp[j].style.transition = "opacity 0.9s ease";
            }
        }
    }
    var temp=document.getElementsByClassName("Game-img");
    for(var i=0; i<temp.length; i++)
    {
        temp[i].style.opacity = "0.1";
        temp[i].style.transition = "opacity 0.9s ease";
    }
    
    className += "-img";
    var classArr = document.getElementsByClassName(className);
    for (var i = 0; i < classArr.length; i++) {
        if (check(filter(id)[0], classArr[i]) && check(filter(id)[1], classArr[i]))
            classArr[i].style.opacity = "1";
    }
}

/*  select box item */
function getSelectBoxI(id) {
    /*var className = document.getElementById(id).value;
    var temp = document.getElementById(id).children;
    for (var i = 0; i < temp.length; i++) {
        var x = temp[i].value;
        if (x !== className) {
            var classArrTemp = document.getElementsByClassName(x + "-img");
            for (var j = 0; j < classArrTemp.length; j++) {
                classArrTemp[j].style.opacity = "0.1";
                classArrTemp[j].style.transition = "opacity 0.7s ease";
            }
        }
    }*/

    var temp=document.getElementsByClassName("Game-img");
    for(var i=0; i<temp.length; i++)
    {
        temp[i].style.opacity = "0.1";
        temp[i].style.transition = "opacity 0.9s ease";
    }
    
    className += "-img";
    var classArr = document.getElementsByClassName(className);
    for (var i = 0; i < classArr.length; i++)
        classArr[i].style.opacity = "1";
}

/*      subArea     */
var arrSubAreaChampions = ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios",
    "Ashe", "AurelionSol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille",
    "Cassiopia", "ChoGath", "Corki", "Darius", "Diana", "DrMundo", "Draven", "Ekko", "Elise",
    "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar",
    "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "JarvanIV",
    "Jax", "Jayce", "Jhin", "Jinx", "KaiSa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina",
    "Kayle", "Kayn", "Kennen", "KhaZix", "Kindred", "Kled", "KogMaw", "LeBlanc", "LeeSin", "Leona",
    "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "MasterYi",
    "MissFortune", "Morderkaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee",
    "Nocturne", "Nunu", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn",
    "Rakan", "Rammus", "RekSai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Senjuani", "Senna",
    "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas",
    "Syndra", "TahmKench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere",
    "TwistedFate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "VelKoz", "Vi", "Viktor", "Vladimir",
    "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "XinZhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac",
    "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"];
var arrSubAreaItems = [];
var arrSubAreaNewestSkins = ["SB_Kindred", "SB_Cassiopia", "SB_Riven", "SB_Yone", "SB_Ahri", "SB_Teemo", "SB_Lillia"];
var arrSubAreaCurrentSale = ["CS_Elise", "CS_JarvanIV", "CS_Kalista", "CS_Nidalee", "CS_Sion", "CS_Katarina", "CS_Jax", "CS_Sirvir",
    "CS_LeeSin", "CS_Darius", "CS_Draven", "CS_Senjuani", "CS_Bard", "CS_Graves", "CS_Renekton", "CS_Rengar", "CS_Leona",
    "CS_Caitlyn", "CS_Rammus", "CS_Vladimir"];
var arrSubAreaNews = ["N_Yone", "N_Lillia", "N_Sett", "N_Volibear", "N_Fiddlesticks", "N_Pantheon"]
var arrSubAreaContentChamp = ["LoL_Logo", "Yone"];
var arrSubAreaRuneLoreTable = ["PressTheAttack", "LethalTempo", "FleetFootwork", "Conqueror", "Overheal", "Triumph", "PresenceOfMind",
    "LegendAlacrity", "LegendTenacity", "LegendBloodline", "CoupDeGrace", "CutDown", "LastStand", "Electrocute", "Predator",
    "DarkHarvest", "HailOfBlades", "CheapShot", "TasteOfBlood", "SuddenImpact", "ZombieWard", "GhostPoro", "EyeballCollection",
    "RavenousHunter", "IngeniousHunter", "RelentlessHunter", "UltimateHunter", "SummonAery", "ArcaneComet", "PhaseRush", "NullifyingOrb",
    "ManaflowBand", "NimbusCloak", "Transcendence", "Celerity", "AbsoluteFocus", "Scorch", "Waterwalking", "GatheringStorm", "GraspOfTheUndying",
    "Aftershock", "Guardian", "Demolish", "FontOfLife", "ShieldBash", "Conditioning", "SecondWind", "BonePlating", "Overgrowth", "Revitalize",
    "Unflinching", "GlacialAugment", "UnsealedSpellbook", "PrototypeOmnistone", "HextechFlashtraption", "MagicalFootwear", "PerfectTiming",
    "FutureMarket", "MinionDematerializer", "BiscuitDelivery", "CosmicInsight", "ApproachVelocity", "TimeWarpTonic"]
var arrSubAreaShards = ["Cooldown", "Heal"];
var arrSubAreaRunePatchHis = ["Kleptomancy", "TraitDomination", "TraitInspiration", "TraitPrecision", "TraitResolve", "TraitSorcery", "Chrysalis",
    "TheUltimateHat", "IronSkin", "MirrorShell", "CelestialBody"]

var arrSubAreaSpells = ["Heal", "Ghost", "Barrier", "Exhaust", "Mark", "Dash", "Clarity", "Flash", "Teleport", "Smite", "Cleanse", "Ignite", "ChallengingSmite",
    "ChillingSmite", "Hexflash", "CosmicInsight", "IonianBootsOfLucidity", "HowlingAbyssAura", "NimbusCloak", "UnsealedSpellBook", "Resuscitate", "Warp", "PoroToss",
    "PoroDash", "ToTheKing", "Observer", "Garrison", "Revive", "Stifle", "Surge", "Backtrack", "Fortify", "Rally", "Promote", "Clairvoyance", "BlastingSmite",
    "ScavengingSmite", "Recall", "EmpoweredRecall", "EnhancedRecall", "SummonerRift", "AncientPocketWatch", "ScrollOfTeleportation", "Silence"]

for (var i = 1; i <= 268; i++)
    arrSubAreaItems.push(i.toString());

function init(id, offsetTop, offsetLeft) {
    window.addEventListener("mousemove", function (e) {
        let node = document.getElementById(id);
        node.style.top = event.clientY + document.body.scrollTop + offsetTop + "px";
        node.style.left = e.pageX + offsetLeft + "px";
    });
}
/*      init subArea    */ 
for (var i = 0; i < arrSubAreaChampions.length; i++)
    init(arrSubAreaChampions[i], 30, 20);

for (var i = 0; i < arrSubAreaItems.length; i++)
    init(arrSubAreaItems[i], 30, 20);

for (var i = 0; i < arrSubAreaNewestSkins.length; i++)
    if (i == 5 || i == 6)
        init(arrSubAreaNewestSkins[i], 30, -780)
    else
        init(arrSubAreaNewestSkins[i], 30, 20);


for (var i = 0; i < arrSubAreaCurrentSale.length; i++)

    if (i == 3 || i == 4 || i == 8 || i == 9 || i == 13 || i == 14 || i == 18 || i == 19)
        init(arrSubAreaCurrentSale[i], 30, -780)
    else
        init(arrSubAreaCurrentSale[i], 20, 20);


for (var i = 0; i < arrSubAreaNews.length; i++)
    if (i == 0 || i == 3)
        init(arrSubAreaNews[i], 30, -400);
    else
        init(arrSubAreaNews[i], 30, -300);
for (var i = 0; i < arrSubAreaContentChamp.length; i++)
    init(arrSubAreaContentChamp[i], 30, 20);

for (var i = 0; i < arrSubAreaRuneLoreTable.length; i++)
    init(arrSubAreaRuneLoreTable[i], 30, 20);

for (var i = 0; i < arrSubAreaShards.length; i++)
    init(arrSubAreaShards[i], 30, 20)

for (var i = 0; i < arrSubAreaRunePatchHis.length; i++)
    init(arrSubAreaRunePatchHis[i], 30, 20)

for (var i = 0; i < arrSubAreaSpells.length; i++)
    init(arrSubAreaSpells[i], 30, 20)
/*========================================================*/

function subAreaAppearSec(fStr, sStr) {
    var idx = $(fStr).attr("idx")

    $(`#subBox ${sStr} div:nth-child(${idx})`).css({
        display: "block"
    })

    $("#subBox").css({
        display: "block"
    })
}
function subAreaDisAppearSec(fStr, sStr) {
    var idx = $(fStr).attr("idx")
    $(`#subBox ${sStr} div:nth-child(${idx})`).css({
        display: "none"
    })
    $("#subBox").css({
        display: "none"
    })
}
function effectSubArea(fStr,sStr){
    $(`#image-list ${fStr} table tr td a img`).mouseover(function () {
        subAreaAppearSec(this, sStr)
    })
    $(`#image-list ${fStr} table tr td a img`).mouseout(function () {
        subAreaDisAppearSec(this, sStr)
    })
}
$(document).ready(function () {
    effectSubArea("#image-list-champions" ,".champion-subBox")
    effectSubArea("#image-list-items", ".item-subBox")
})
function subAreaAppear(id){
    document.getElementById(id).style.display="block";
    document.getElementById("subBox").style.display="block"
}
function subAreaDisAppear(id){
    document.getElementById(id).style.display="none";
    document.getElementById("subBox").style.display="none"
}