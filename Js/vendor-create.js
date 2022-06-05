
$().ready(() => {

});


const save = () => {
    let vendor = {
        id: +$("#xId").val(),
        code: $("#xCode").val(),
        name: $("#xName").val(),
        Address: $("#xAddress").val(),
        city: $("#xCity").val(),
        state: $("#xState").val(),
        zip: $("#xZip").val(),
        phone: $("#xPhone").val(),
        email: $("#xEmail").val()
    }
    console.debug(vendor);
    let vendorsvc = new VendorService();
    vendorsvc.create(vendor)
        .done((res) => {
            console.log(res);
            location.href = "vendor-list.html";
        })
        .fail((err) => {
            console.error(err);
        })
}