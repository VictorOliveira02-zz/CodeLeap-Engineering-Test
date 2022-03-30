import api from "./api";

const getAllPosts = async () => {
    const req = await api.get("/careers/");
    return req.data;
};

export default getAllPosts;