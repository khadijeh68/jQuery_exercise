$(document).ready(function () {
    $("#btn").click(function () { 
        $("div").text($("form").serialize());    
    });
});