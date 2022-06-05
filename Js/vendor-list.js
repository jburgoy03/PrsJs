$().ready(() => {

    console.log("jquery is ready");

    let vendorsvc = new VendorService();

    vendorsvc.list()
        .done((res) => {
            console.debug(res);
            render(res);
        })

});

const render = (vendors) => {
    let tbody = $("#tbody");
    for(let vendor of vendors) {
        let tr = $("<tr></tr>");
        tdId = $(`<td>${vendor.id}</td>`);
        tr.append(tdId);
        tdUn = $(`<td>${vendor.code}</td>`);
        tr.append(tdUn);
        
        tr.append( $(`<td>${vendor.name}</td>`) )
        tr.append( $(`<td>${vendor.city} </td>`) )
        tr.append( $(`<td>${vendor.state} </td>`) )
        tr.append( $(`<td>${vendor.zip} </td>`) )

        let actions = $("<td></td>");
        let anchor = $(`<a href="vendor-detail.html?id=${vendor.id}">Detail</a> |
                         <a href="vendor-edit.html?id=${vendor.id}">Edit</a>`);
        actions.append(anchor);
        tr.append(actions);

        tbody.append(tr);
    }
}