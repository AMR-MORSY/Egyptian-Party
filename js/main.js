$(".sideNav a").css({ "color": "white", "textDecoration": "none", "textAlign": "center", "paddingTop": "30px" });
$(".openIcon i").click(function () {
    $(".openIcon").css("left", "15%");
    $(".sideNav").css("left", "0");
    $(".egyptionText").css("left", "60%");

})
$(".sideNav i").click(function () {
    $(".openIcon").css("left", "0");
    $(".sideNav").css("left", "-15%");
    $(".egyptionText").css("left", "50%");

})
$(".singer p").eq(0).slideDown(500);
$(".singer p").eq(1).slideUp(100);
$(".singer p").eq(2).slideUp(100);
$(".singer p").eq(3).slideUp(100);


let singerName = document.querySelectorAll(".singer h4");
for (let i = 0; i < singerName.length; i++) {

    singerName[i].addEventListener("click", function () {
        $(".singer p").eq(i).addClass("done");
        $(".singer p").eq(i).slideToggle(1000); $(".singer p").not(".done").slideUp(1000, function () { $(".singer p").eq(i).removeClass("done") })
    });

};


let counter = 0;

$("textarea").keydown(function (e) {

    let currentNo = Number($(".number").text());
    let messageInput = $("textarea").val();

    let key = e.keyCode;


    // backspace input
    if (key == 8 && messageInput != "" && currentNo <= 100 && counter <= 100) {
        $(".words").text("Character Remaining");

        counter--;

        $(".number").text(`${currentNo + 1}`);


    }
    else if (key == 8 && messageInput != "" && currentNo <= 100 && counter > 100) {
        counter--;

    }

    else if (key == 8 && messageInput == "") {
        $(".number").text("100");
        $(".words").text("Character Remaining");
    }

    //normal char input
    else if (key != 8 && currentNo > 0 && currentNo <= 100) {
        $(".number").text(`${currentNo - 1}`);
        counter++;




    }


    else if (key != 8 && currentNo == 0 && counter >= 100) {
        counter++;
        $(".words").text("You have reached the max No. of characters");

    }

});

setInterval(displayReminingTime,1000);

function displayReminingTime() 
{let todaytDate=new Date();
let eventDate="October 13, 2021 11:13:00";
let d=new Date(eventDate);
var msecEventDate = Date.parse(d);
var msecTodayDate= Date.parse(todaytDate);
var remainingDaysMsec=msecEventDate-msecTodayDate;
var remainingTime=remainingDaysMsec/86400000;
var stringRemainingTime = remainingTime.toString();
var index=stringRemainingTime.indexOf(".");
var stringDays=stringRemainingTime.slice(0,index);
var stringRemainingHours=stringRemainingTime.slice(index);
var hour=Number(stringRemainingHours)*24;
var stringHours=hour.toString();
var minutesIndex=stringHours.indexOf(".");
var hours=Number(stringHours.slice(0,minutesIndex));
var stringRemainingMinutes=stringHours.slice(minutesIndex);
var remainingMinutes=Number(stringRemainingMinutes)*60;
var stringMinutes=remainingMinutes.toString();
var secondIndex=stringMinutes.indexOf(".");
var minutes=Number(stringMinutes.slice(0,secondIndex));
var second=Number(stringMinutes.slice(secondIndex))*60;
var stringSeconds=second.toString();
var mliSecondindex=stringSeconds.indexOf(".");
var seconds=Number(stringSeconds.slice(0,mliSecondindex));

fillDivs(stringDays,hours,minutes,seconds);
}


function fillDivs(days, hours,minutes,seconds)
{
    $(".days h4").text(`${days}-D`);
    $(".hours h4").text(`${hours}-H`);
    $(".minutes h4").text(`${minutes}-m`);
    $(".seconds h4").text(`${seconds}-S`);
}

let winScroll=$(window).scrollTop();

$(".navContainer a").click(function(e){
    var target=e.target;
    var reference=$(target).attr("href");
    console.log(reference);
    let sectionOffset=$(`${reference}`).offset().top;
    $("html,body").animate({scrollTop:sectionOffset},3000)
    
})
   
