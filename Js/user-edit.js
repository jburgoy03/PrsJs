
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

});

const render = (user) => {
    $("#xId").val(user.id);
    $("#xUsername").val(user.username);
    $("#xPassword").val(user.password);
    $("#xFirstname").val(user.firstname);
    $("#xLastname").val(user.lastname);
    $("#xPhone").val(user.phone);
    $("#xEmail").val(user.email);
    $("#xReviewer").prop('checked', user.isReviewer);
    $("#xAdmin").prop('checked', user.isAdmin);
}

const save = () => {
    // let user = {
    //     id: +$("#xId").val(),
    //     username: $("#xUsername").val(),
    //     password: $("#xPassword").val(),
    //     firstname: $("#xFirstname").val(),
    //     lastname: $("#xLastname").val(),
    //     phone: $("#xPhone").val(),
    //     email: $("#xEmail").val(),
    //     isReviewer: $("#xReviewer").prop('checked'),
    //     isAdmin: $("#xAdmin").prop('checked')
    // }

    let user = new User();
        user.id = +$("#xId").val(),
        user.username = $("#xUsername").val(),
        user.password = $("#xPassword").val(),
        user.firstname = $("#xFirstname").val(),
        user.lastname = $("#xLastname").val(),
        user.phone = $("#xPhone").val(),
        user.email = $("#xEmail").val(),
        user.isReviewer = $("#xReviewer").prop('checked'),
        user.isAdmin = $("#xAdmin").prop('checked')
        
        
        let jsonUser = user.toJson();
    
        console.debug(jsonUser);
        let usersvc = new UserService();
        usersvc.change(jsonUser)
            .done((res) => {
                console.log(res);
                location.href = "user-list.html";
            })
            .fail((err) => {
                console.error(err);
            })
}


