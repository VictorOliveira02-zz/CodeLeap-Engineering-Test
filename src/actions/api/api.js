import Axios from "axios";

const baseURL = "https://dev.codeleap.co.uk/";

const api = Axios.create({
    baseURL,
});

export default api;