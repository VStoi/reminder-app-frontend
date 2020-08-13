import Http from "../services/http";

export class UserService extends Http {
    login(data) {
        return this.post("/user/session", data)
    }

    signup(data) {
        return this.post("/user", data)
    }
}