import axios from "axios";
const URL = "https://jsonplaceholder.typicode.com";

export const getData = async () => {
    try{
        const response = await axios.get(`${URL}/posts`);
        return response.data;
    }catch(error){
        console.log("Error while calling getData API", error);
    }
}

export const postData = async (title, cardBody) => {
  try {
    const response = await axios.post(`${URL}/posts`, { title, cardBody });
    return response.data;
  } catch (error) {
    console.log("Error while calling postData API", error);
  }
};

export const putData = async (id , title , body ) =>{
    try{
        const response = await axios.put(`${URL}/posts/1`, {
          body: JSON.stringify({
            id: id,
            title: title,
            body: body,
           
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        return response.data;
    }catch(error){
        console.log("Error while calling postData API", error);
        
    }
}

export const deleteData = async () =>{
    try{
        const response = await axios.delete(`${URL}/posts/${1}`)
        return response.data;
    }catch (error){
        console.log("Error while calling deleteData API", error);
    }
}