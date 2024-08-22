import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteData } from "../../apis/fetch";
const DeleteCard = () =>{
//    const mutate = useMutation()
   const query = useQueryClient()
   const deleteItem = async ()=>{
    const response = await deleteData();
    query.invalidateQueries()
    return response.data;
   }
   return useMutation(deleteItem);
}
export default DeleteCard ;