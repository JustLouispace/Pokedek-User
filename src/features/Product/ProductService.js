import axios from "axios";

const getProducts = async (userData) => {
    const response = await axios.get("http://localhost:5000/api/PokemonCard", userData);
    if (response.data) {
        return response.data;
    }
};




export const productService = { getProducts };