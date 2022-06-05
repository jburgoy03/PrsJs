
$().ready(() => {

    console.log("jquery is ready");

    let usersvc = new UserService();

    usersvc.list()
        .done((res) => {
            console.debug(res);
            render(res);
        })

});

const render = (users) => {
    let tbody = $("#tbody");
    for(let user of users) {
        let tr = $("<tr></tr>");
        tdId = $(`<td>${user.id}</td>`);
        tr.append(tdId);
        tdUn = $(`<td>${user.username}</td>`);
        tr.append(tdUn);
        
        tr.append( $(`<td>${user.firstname}</td>`) )
        tr.append( $(`<td>${user.lastname}</td>`) )
        tr.append( $(`<td>${ (user.isReviewer ? "Yes" : "No") } </td>`) )
        tr.append( $(`<td>${ (user.isAdmin ? "Yes" : "No") } </td>`) )

        let actions = $("<td></td>");
        let anchor = $(`<a href="user-detail.html?id=${user.id}">Detail</a> |
                         <a href="user-edit.html?id=${user.id}">Edit</a>`);
        actions.append(anchor);
        tr.append(actions);

        tbody.append(tr);
    }
}