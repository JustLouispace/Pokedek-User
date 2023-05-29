import axios from "axios";

const register = async (userData) => {
    console.log(userData);
    const response = await axios.post("http://localhost:5000/api/user/register", userData).then((res) =>{
        console.log(res);
    }).catch((error) =>{
        console.log(error);
    }
    )
    if (response.data) {
        return response.data;
    }
};

export const authService = { register };