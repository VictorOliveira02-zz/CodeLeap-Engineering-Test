import api from "./api";

const creatPost = async (username, title, content) => {
    const infoJson = {
        "username": username,
        "title": title,
        "content": content
    }
    const req = await api.post("/careers/", infoJson);
    return req.data;
};

export default creatPost;