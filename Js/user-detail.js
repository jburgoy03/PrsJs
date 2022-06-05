
$().ready(() => {

    let urlParms = parseUrl(document.URL);
    let userId = +urlParms.id;

    console.log("ready");

    let usersvc = new UserService();

    usersvc.get(userId)
        .done(
            (res) => {
                console.debug(res);
                render(res);
            }
        )

     $("#verifyDelete").hide();

    $("#delete").on("click", () => {
        $("#verifyDelete").toggle();
        })


    $("#verifyDeleteButton").on("click", () => {
        usersvc.remove(userId)
        .done((res) => {
            console.log("User Deleted");
            location.href = "user-list.html";
        });
        })

});

const render = (user) => {
    $("#xId").text(user.id);
    $("#xUsername").text(user.username);
    $("#xFirstname").text(user.firstname);
    $("#xLastname").text(user.lastname);
    $("#xPhone").text(user.phone);
    $("#xEmail").text(user.email);
    $("#xReviewer").text(user.isReviewer ? "Yes" : "No");
    $("#xAdmin").text(user.isAdmin ? "Yes" : "No");
}