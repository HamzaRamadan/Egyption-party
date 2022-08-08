let linkOffset = [];
// sidear
$("#toggleIcon").click(function() {


    console.log($(".sidebar").css("left"));
    if ($(".sidebar").css("left") == "0px") {
        $(".sidebar").animate({ "left": -250 }, 1000);

    } else {
        $(".sidebar").animate({ "left": "0px" }, 1000);
    }
})

//start section two





$('#Singer .toggle').click(function() {
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

// start section tree  (counter )

function countdown() {
    var now = new Date();
    var eventDate = new Date(2022, 5, 28);
    // console.log(eventDate);
    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTiime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24) - 30;

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";
    document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";

    document.getElementById("hours").innerHTML = "<h3>" + h + " h" + "</h3>";
    document.getElementById("minutes").innerHTML = "<h3>" + m + " m" + "</h3>";
    document.getElementById("seconds").innerHTML = "<h3>" + s + " s" + "</h3>";

    setTimeout(countdown, 1000);
}

countdown();


// start section four  ( textarea ) 


$(function() {
    var max = 100;
    $("textarea").keyup(function() {
        var length = $(this).val().length;
        var character = max - length;
        console.log(character)
        if (character <= 0) {
            $("#counter").text("your available character finished");
        } else {
            $("#counter").text(character);
        }
    });
});

//scroll

$("a").click(function(e) {
    let aHref = $(e.target).attr("href");
    let linkOffset = $(aHref).offset().top;


    $("body").animate({ scrollTop: linkOffset }, 1000)
});



