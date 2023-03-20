var diary = "";

function saveHandler() {
    var date = $("#date").val();
    var text = $("#text").val();
    var mood = $("#mood").val();

   diary = diary + `<p>${date}: ${text} - ${mood}</p>`;

    $("#result").html(diary);

    localStorage.setItem("diary", diary);
}

$(document).ready(function() {
    diary = localStorage.getItem("diary");

    $("#result").html(diary);

    $("#save").click(saveHandler);
});