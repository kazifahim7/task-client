import { useQuery } from "@tanstack/react-query";
import useAxios from "../hook/useAxios";

import toast, { Toaster } from "react-hot-toast";


const ManageUser = () => {
    const axiosSecure=useAxios()

    const {data:allUser=[],refetch}=useQuery({
        queryKey:['allUser'],
        queryFn:async()=>{
            const response = await axiosSecure.get('http://localhost:7000/allUser')
            return response.data;
        }

    })


    const handleSubmit=(id,status)=>{
        const info={
            status,
            amount:status==='user'? 50 : 10000
        }
        console.log(info)


        try{
            axiosSecure.post(`/user/${id}`, info)
                .then(res => {
                    console.log(res.data)
                    refetch()
                    toast.success('updated')
                })

        }
        catch(error){

            toast.error('invalid')

        }

       
      
    }

    const handleBlock=(id,status)=>{
        const info={
            status
        }
        console.log(info)

        try {
            axiosSecure.post(`/status/${id}`, info)
                .then(res => {
                    console.log(res.data)
                    refetch()
                    toast.success('updated')
                })

        }
        catch (error) {

            toast.error('invalid')

        }

    }

  




    return (
        <div>
            <h1 className="text-2xl font-bold text-center pt-10 capitalize">All user here : {allUser.length}</h1>

            <div className="overflow-x-auto mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Role</th>
                            <th>status</th>
                            <th>action</th>
                            <th>block</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            allUser.map(user => <tr key={user._id}>

                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                <td>{user.status}</td>
                                <td>
                                    <button title={user._id} onClick={() => handleSubmit(user?._id, 'user')} className="btn bg-[#d63384]">user</button>
                                    <button onClick={() => handleSubmit(user?._id, 'agent')} className="btn bg-[#d63384]">agent</button>

                                    <Toaster></Toaster>
                                </td>
                                <td> {user.status === 'block' ? <button onClick={() => handleBlock(user._id, 'approved')} className="btn bg-[#d63384]">active</button> : <button onClick={() => handleBlock(user._id, 'block')} className="btn bg-[#d63384]">block</button> } </td>
                            </tr>)
                        }





                        {/* row 1 */}
                       
                        {/* row 2 */}
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;