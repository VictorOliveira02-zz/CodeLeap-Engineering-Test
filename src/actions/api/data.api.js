import Axios from "axios";
import api from "./api";

export default class postApi {
    static getCancelToken = () => Axios.CancelToken.source();

    static getAllPosts = async () => {
        const req = await api.get("/careers/");
        return req.data;
    };

    static createPost = async (username, title, content) => {
        const infoJson = {
            "username": username,
            "title": title,
            "content": content
        }
        const req = await api.post("/careers/", infoJson);
        return req.data;
    };

    static updatePost = async (id, title, content) => {
        const infoJson = {
            "title": title,
            "content": content
        }
        const req = await api.patch(`/careers/${id}/`, infoJson);
        return req.data;
    };


    static deletePost = async (id) => {
        const req = await api.delete(`/careers/${id}/`);
        return req.data
    };
}