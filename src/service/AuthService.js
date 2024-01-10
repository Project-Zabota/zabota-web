import {Navigate} from "react-router-dom";

class AuthService {

    accessToken = null
    user = null

    constructor() {
        this.authorize(sessionStorage.getItem("accessToken"))
    }

    require() {
        if (!this.accessToken) {
            this.toLoginPage()
        }
    }

    authorize(accessToken) {
        try {
            this.accessToken = accessToken

            let tokenParts = this.accessToken.split(".")
            let userData = JSON.parse(atob(tokenParts[1]))

            this.user = new User(
                userData.id,
                userData.email,
                userData.firstname,
                userData.middlename,
                userData.lastname)

            sessionStorage.setItem("accessToken", accessToken)
        } catch (e) {
            this.accessToken = null
            this.user = null
            sessionStorage.removeItem("accessToken")
        }
    }

    logout() {
        sessionStorage.removeItem("accessToken")
        // this.accessToken = null
        // this.user = null
        this.toLoginPage()
    }

    getAuthHeader() {
        return "Bearer " + this.accessToken
    }

    toLoginPage() {
        window.location.href = "/login"
    }
}

class User {
    id
    email
    firstName
    middleName
    lastName


    constructor(id, email, firstName, middleName, lastName) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }
}

const instance = new AuthService()

export default instance;