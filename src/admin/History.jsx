import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";


const History = () => {

    const user=localStorage.getItem('identity')



    const {data=[]}=useQuery({
        queryKey:["allPayment",user],
        queryFn:async()=>{
            const response = await axios.get(`http://localhost:7000/payment/${user}`)
            return response.data
        }
    })


    const [set,setNow]=useState()


    const handleCopy=(text)=>{
        console.log(text)
            navigator.clipboard.writeText(text)
            setNow(text)

            setTimeout(()=>setNow(''),500)

        

    }
    







    return (
        <div className="overflow-x-auto">
            <table className="table  ">
                {/* head */}
                <thead className="bg-[#d63384] text-white">
                    <tr>
                        <th>Number </th>
                        <th>Amount</th>
                        <th>charge</th>
                        <th>method</th>
                        <th>status</th>
                        <th>TransactionId</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        data.map(item => <tr key={item._id} >
                            <th>{item.toNumber}</th>
                            <td>{item.amount} taka</td>
                            <td>{item.charge.toFixed(2)} taka</td>
                            <td>{item.method} </td>
                            <td>{item.status} </td>
                            <td className="flex  items-center gap-8"><p>{item.transactionId}</p>  <p className="hover:cursor-pointer" onClick={() => handleCopy(item.transactionId)}>{set ===item.transactionId ? 'copied' : <MdContentCopy />}</p> </td>
                        </tr>)
                    }



                  
                    {/* row 2 */}
                   
                </tbody>
            </table>
        </div>
    );
};

export default History;