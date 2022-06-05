class User {
    constructor() {
        this.id =0;
        this.username = "";
        this.password = "";
        this.firstname = "";
        this.lastname = "";
        this.phone = "";
        this.email = "";
        this.isReviewer = false;
        this.isAdmin = false;
    }

    toJson() {
        let json = {
            id: this.id,
            username: this.username,
            password: this.password,
            firstname: this.firstname,
            lastname: this.lastname,
            phone: this.phone,
            email: this.email,
            isReviewer: this.isReviewer ? true : false,
            isAdmin: this.isAdmin ? true : false
        }
        return json;
    }
}