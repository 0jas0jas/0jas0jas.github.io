$("document").ready(
    $("#FOO").hover
    (
    function()
    {
        $("rect").css("fill","#FFFFFF");
        $("body").css("background-color","#000000");
        $(".txt").css("fill", "#000000");
        $(".txt").text("I am black.");
        $(".image").attr("src", "white.png");
    },
    function()
    {
        $("rect").css("fill","#000000");
        $("body").css("background-color","#FFFFFF");
        $(".txt").css("fill", "#FFFFFF");
        $(".txt").text("I am white.");
        $(".image").attr("src", "black.png");
    }
    )
    )