class UserService {

    constructor() {
        this.baseurl = ("http://localhost:5238/api/users")
    }

    list() {
        return $.getJSON(`${this.baseurl}`);
    }

    get(id) {
        return $.getJSON(`${this.baseurl}/${id}`);
    }

    create(user) {
        return $.ajax({
            method: "POST",
            url: `${this.baseurl}`,
            data: JSON.stringify(user),
            contentType: "application/json"
        })
    }
    change(user) {
        return $.ajax({
            method: "PUT",
            url: `${this.baseurl}/ ${user.id}`,
            data: JSON.stringify(user),
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