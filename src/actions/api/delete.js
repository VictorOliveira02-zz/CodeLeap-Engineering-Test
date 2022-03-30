import api from "./api";

const deletePost = async (id) => {
    const req = await api.delete(`/careers/${id}/`);
    return req.data
};

export default deletePost;