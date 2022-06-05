
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

     $("#verifyDelete").hide();

    $("#delete").on("click", () => {
        $("#verifyDelete").toggle();
        })


    $("#verifyDeleteButton").on("click", () => {
        vendorsvc.remove(vendorId)
        .done((res) => {
            console.log("Vendor Deleted");
            location.href = "vendor-list.html";
        });
        })

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