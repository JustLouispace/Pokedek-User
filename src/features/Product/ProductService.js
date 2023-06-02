
import axios from "axios";
import { config } from "../../utils/axiosConfig"

const getProducts = async (userData) => {
    const response = await axios.get("http://localhost:5000/api/PokemonCard", userData);
    if (response.data) {
        return response.data;
    }
};

const addToMyCollection = async (prodId) => {
    console.log(config);
    const response = await axios.put("http://localhost:5000/api/PokemonCard/addtomycollection", { prodId, }, config);
    if (response.data) {
        return response.data;
    }
};


export const productService = { getProducts, addToMyCollection };