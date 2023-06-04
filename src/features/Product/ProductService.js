
import axios from "axios";
import { config } from "../../utils/axiosConfig"

const getProducts = async (userData) => {
    const response = await axios.get("http://localhost:5000/api/PokemonCard", userData);
    if (response.data) {
        return response.data;
    }
};


const getAProduct = async (id) => {
    const response = await axios.get(`http://localhost:5000/api/PokemonCard/${id}`,);
    if (response.data) {
        return response.data;
    }
};


export const addToMyCollection = async (prodId) => {
    console.log(config);
    try {
        const response = await axios.put(`http://localhost:5000/api/PokemonCard/addtomycollection`, { prodId }, config);

        if (response.data) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
};


export const productService = { getProducts, addToMyCollection, getAProduct };