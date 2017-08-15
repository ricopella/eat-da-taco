$("#addTaco").on("click", function() {
    // event.preventDefault();

    let tacoName = $("#ta").val();

    if (tacoName === "") {
        $("#incompleteForm").modal('show');
        return false;
    };

    $.post("/", tacoName, function(data) {
        return true;
    }).then(function() {
        $.get("/", function() {
            return true;
        })
    })
});