import axios from "axios";

const instance = axios.create({
    baseURLP: " " //the api (cloud function) url
})

export default instance;