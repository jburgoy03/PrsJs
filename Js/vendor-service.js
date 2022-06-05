class VendorService {

    constructor() {
        this.baseurl = ("http://localhost:5238/api/vendors")
    }

    list() {
        return $.getJSON(`${this.baseurl}`);
    }

    get(id) {
        return $.getJSON(`${this.baseurl}/${id}`);
    }

    create(vendor) {
        return $.ajax({
            method: "POST",
            url: `${this.baseurl}`,
            data: JSON.stringify(vendor),
            contentType: "application/json"
        })
    }
    change(vendor) {
        return $.ajax({
            method: "PUT",
            url: `${this.baseurl}/ ${vendor.id}`,
            data: JSON.stringify(vendor),
            contentType: "application/json"
        })
    }
    remove(id) {
        return $.ajax({
            method: "DELETE",
            url: `${this.baseurl}/ ${id}`
        })
    }
}