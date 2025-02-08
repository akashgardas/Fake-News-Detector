$(document).ready(function() {
    $(".pasteText").click(function() {
        $("#data").val('');
        $("#data").css("height", "150px");
        $("#data").attr("placeholder", "Please enter your text");
    });

    $(".PasteLink").click(function() {
        $("#data").css("height", "80px");
        $("#data").attr("placeholder", "Paste your link...");
    });

    function updateCard(isTrue) {
        if (isTrue  == 'True') {
            $("#errorCard").css({
                "border": "1px solid rgb(50, 155, 23)",
                "background-color": "rgba(12, 220, 36, 0.1)",
                "color": "rgb(4, 189, 13)"
            });
            $(".text").html(" &#9989; True news!");
        } else {
            $("#errorCard").css({
                "border": "1px solid #f85149",
                "background": "rgba(248, 81, 73, 0.1)",
                "color": "#b22b2b"
            });
            $(".text").html("&#10060; Fake news!");
        }
        $("#errorCard").show();
        $("#closeButton").prop("disabled", false);
    }

    $("form").submit(function(event) {
        event.preventDefault();  // Prevent default form submission

        let inputData = $("#data").val();

        $.ajax({
            url: "/predict",
            type: "POST",
            data: { data: inputData },
            success: function(response) {
                updateCard(response.isTrue);  // Update the UI dynamically
            },
            error: function() {
                alert("Error processing your request. Please try again.");
            }
        });
    });

    $("#closeButton").on("click", function() {
        $("#errorCard").hide();
    });
});
