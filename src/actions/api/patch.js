import api from "./api";

const updatePost = async (id, title, content) => {
    const infoJson = {
        "title": title,
        "content": content
    }
    const req = await api.patch(`/careers/${id}/`, infoJson);
    return req.data;
};

export default updatePost;