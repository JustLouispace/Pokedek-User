import axios from "axios";
import { config } from "../../utils/axiosConfig";

const uploadImg = async (data) => {
    const response = await axios.post(`http://localhost:5000/api/upload`, data, config);
    return response.data;
};
const deleteImg = async (id) => {
    const response = await axios.delete(
        `http://localhost:5000/api/upload/delete-img/${id}`, config
    );
    return response.data;
};

const uploadService = {
    uploadImg,
    deleteImg,
};

export default uploadService;