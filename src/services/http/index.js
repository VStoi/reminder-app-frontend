import axios from "axios";

class Http {
    api = {
        common: "http://localhost:4000"
    };

    static createInstance(params) {
        return axios.create(params);
    };

    constructor(config) {
        let {baseURL = this.api.common} = config || {};
        this.instance = Http.createInstance({
            baseURL,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        });
    };


    get(...params) {
        return this.instance.get.apply(this.instance, params);
    };

    patch(...params) {
        return this.instance.patch.apply(this.instance, params);
    };

    put(...params) {
        return this.instance.put.apply(this.instance, params);
    };

    post(...params) {
        return this.instance.post.apply(this.instance, params);
    };

    delete(...params) {
        return this.instance.delete.apply(this.instance, params);
    };
}

export default Http;