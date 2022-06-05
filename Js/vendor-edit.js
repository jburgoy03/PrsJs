
$().ready(() => {

    let urlParms = parseUrl(document.URL);
    let vendorId = +urlParms.id;

    console.log("ready");

    let vendorsvc = new VendorService();

    vendorsvc.get(vendorId)
        .done(
            (res) => {
                console.debug(res);
                render(res);
            }
        )

});

const render = (vendor) => {
    $("#xId").val(vendor.id);
    $("#xCode").val(vendor.code);
    $("#xName").val(vendor.name);
    $("#xAddress").val(vendor.address);
    $("#xCity").val(vendor.city);
    $("#xState").val(vendor.state);
    $("#xZip").val(vendor.zip);
    $("#xPhone").val(vendor.phone);
    $("#xEmail").val(vendor.email);
}

const save = () => {
    let vendor = {
        id: +$("#xId").val(),
        code: $("#xCode").val(),
        name: $("#xName").val(),
        address: $("#xAddress").val(),
        city: $("#xCity").val(),
        state: $("#xState").val(),
        zip: $("#xZip").val(),
        phone: $("#xPhone").val(),
        email: $("#xEmail").val()
    }

    // let user = new Vendor();
    //     user.id = +$("#xId").val(),
    //     user.code = $("#xCode").val(),
    //     user.name = $("#xName").val(),
    //     user.address = $("#xAddress").val(),
    //     user.city = $("#xCity").val(),
    //     user.state = $("#xState").val(),
    //     user.zip = $("#xZip").val(),
    //     user.phone = $("#xPhone").val(),
    //     user.email = $("#xEmail").val()
        
        
        // let jsonVendor = vendor.toJson();
    
        console.debug(vendor);
        let vendorsvc = new VendorService();
        vendorsvc.change(vendor)
            .done((res) => {
                console.log(res);
                location.href = "vendor-list.html";
            })
            .fail((err) => {
                console.error(err);
            })
}
