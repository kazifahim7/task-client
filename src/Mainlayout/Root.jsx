import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Preloader from "../Pages/Preloader ";



const Root = () => {
    const [show,setShow]=useState(true)
    useEffect(()=>{
        setTimeout(()=>setShow(false),2000)
    },[])
    return (
        <div>
           
            {
                show ? <Preloader></Preloader> : <div className="h-screen">
                    <Outlet></Outlet>
                </div>
            }
           
           

           

           
        </div>
    );
};

export default Root;