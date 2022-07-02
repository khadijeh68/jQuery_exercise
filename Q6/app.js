$(document).ready(function () {  
    $("#add-btn").click(function () { 
        let input = $("#input").val();
        $("#newItem").append(`<ul class="list-group">
        <li class="list-group-item m-2">${input}</li>
        </ul>`);
        $("#input").val("");
    $(".list-group").click(function () { 
        $(this).remove();
    });
    });
});