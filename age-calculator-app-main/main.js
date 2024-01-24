var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDate();

$("#ageForm").submit(function(event) {
    //Recieving user input
    event.preventDefault();
    var userDay = parseInt($("#days").val());
    var userMonth = parseInt($("#months").val());
    var userYear = parseInt($("#years").val());
    var userDate = new Date(userYear, userMonth - 1, userDay);
    var calculate = true;
    var postCalculate = false;
    //Check for day
    if (isNaN(userDay)) {
        $("p.DD").text("This field is required");
        $("p.DD").removeClass("hide");
        $("label[for='days']").addClass("red");
        $("input#days").addClass("border-red");
        calculate = false;
    } else if (userDay < 1 || userDay > 31) {
        $("p.DD").text("Must be a valid day");
        $("p.DD").removeClass("hide");
        $("label[for='days']").addClass("red");
        $("input#days").addClass("border-red");
        calculate = false;
    } else {
        $("p.DD").addClass("hide");
        $("label[for='days']").removeClass("red");
        $("input#days").removeClass("border-red");
    }
    //Check for month
    if (isNaN(userMonth)) {
        $("p.MM").text("This field is required");
        $("p.MM").removeClass("hide");
        $("label[for='months']").addClass("red");
        $("input#months").addClass("border-red");
        calculate = false;
    } else if (userMonth < 1 || userMonth > 12) {
        $("p.MM").text("Must be a valid month");
        $("p.MM").removeClass("hide");
        $("label[for='months']").addClass("red");
        $("input#months").addClass("border-red");
        calculate = false;
    } else {
        $("p.MM").addClass("hide");
        $("label[for='months']").removeClass("red");
        $("input#months").removeClass("border-red"); 
    }
    //Check for days in the month
    if (userMonth === 2 && (userDay > 28 || (userDay === 29 && !isLeapYear(userYear)))) {
        $("p.DD").text("Invalid day for February");
        $("p.DD").removeClass("hide");
        $("label[for='days']").addClass("red");
        $("input#days").addClass("border-red");
        calculate = false;
    } else if ((userMonth === 4 || userMonth === 6 || userMonth === 9 || userMonth === 11) && userDay > 30) {
        $("p.DD").text("Invalid day for this month");
        $("p.DD").removeClass("hide");
        $("label[for='days']").addClass("red");
        $("input#days").addClass("border-red");
        calculate = false;
    }
    //Check for Year
    if (isNaN(userYear)) {
        $("p.YYYY").text("This field is required");
        $("p.YYYY").removeClass("hide");
        $("label[for='years']").addClass("red");
        $("input#years").addClass("border-red");
        calculate = false;
    } else if (userYear < 1) {
        $("p.YYYY").text("Must be a valid year");
        $("p.YYYY").removeClass("hide");
        $("label[for='years']").addClass("red");
        $("input#years").addClass("border-red");
        calculate = false;
    } else if (userYear > currentYear) {
        $("p.YYYY").text("Must be in the past");
        $("p.YYYY").removeClass("hide");
        $("label[for='years']").addClass("red");
        $("input#years").addClass("border-red");
        calculate = false;
    } else {
        $("p.YYYY").addClass("hide");
        $("label[for='years']").removeClass("red");
        $("input#years").removeClass("border-red");
    }
    if (calculate) {
        $(".detail p").addClass("hide");
        $("label").removeClass("red");
        $("input").removeClass("border-red");
        var age = currentDate - userDate;
        var ageDate = new Date(age);
        var year = ageDate.getFullYear() - 1970;
        var month = ageDate.getMonth();
        var day = ageDate.getDate();
        $(".years span").text(year + "  ").addClass("animated");
        $(".months span").text(month + "  ").addClass("animated");
        $(".days span").text(day + "  ").addClass("animated");
        postCalculate = true;  
    }
    if (postCalculate) {
        setTimeout(function() {
            $(".years span").removeClass("animated");
            $(".months span").removeClass("animated");
            $(".days span").removeClass("animated");
            postCalculate = false;
        }, 2000);
    }
});
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}