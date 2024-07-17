import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useRole = () => {
    const user= localStorage.getItem('identity')
    console.log(user)
    const axiosSecure=useAxios()
    const role=localStorage.getItem('role')

    const { data: isPosition =''}=useQuery({
        queryKey:['role',user,role],
        queryFn:async()=>{
            const response = await axiosSecure.get(`http://localhost:7000/allUser/${user}`)
            return response.data.role
        }
    })

    return [isPosition]
   
};

export default useRole;