import axios from "axios";

const register = async (userData) => {
    const response = await axios.post("http://localhost:5000/api/user/register", userData);
    if (response.data) {
        if (response.data){
            localStorage.setItem("customer",JSON.stringify(response.data));
        }
        return response.data;
    }
};

const login = async (userData) => {
    try {
      console.log(userData);
      const response = await axios.post("http://localhost:5000/api/user/login", userData);
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
      // Handle the error here
      // You can display an error message to the user or perform any other necessary actions
    }
  };


export const authService = { register, login };