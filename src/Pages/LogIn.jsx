import axios from "axios";
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../AuthProvider/AuthProvider";
import { ImSpinner9 } from "react-icons/im";


const LogIn = () => {
    const [display, setDisplay] = useState(false);
    const [loading, setLoading] = useState(false)

    const { setUser }=useContext(Authcontext)
    const navigate=useNavigate()


    const onSubmits =(e)=>{
        e.preventDefault()

        const identity=e.target.identity.value;
        const pin=e.target.pin.value

        if(pin.length<5 || pin.length>5){
            return toast.error("please write 5-digit PIN")
        }

        const info={
            identity,
            pin
        }

        console.log(info)

        try{
            setLoading(true)
            axios.post('http://localhost:7000/login',info)
            .then(data=>{
                console.log(data.data)
               

                if (data.data === 'Invalid identity or password'){
                    setLoading(false)
                    return toast.error("Invalid identity or password")
                }
                else{
                    setUser(data.data)
                    setLoading(false)
                    localStorage.setItem('id', data.data._id)
                    localStorage.setItem('identity', data.data.identity)
                    localStorage.setItem('imageUrl', data.data.imageUrl)
                    localStorage.setItem('role', data.data.role)
                    localStorage.setItem('name', data.data.name)

                    const info={
                        identity: data.data.identity
                    }

                    if(data.data.identity){
                        axios.post(`http://localhost:7000/jwt`, info)
                            .then((data) => {
                                console.log(data.data.token)
                                localStorage.setItem('access-token',data.data.token)
                                navigate('/home')
                            })

                        
                    }
                    else{
                        localStorage.removeItem('access-token')
                    }

                   




                    

                }
            })

        }
        catch(error){
            setLoading(false)
            toast.error("Invalid identity or password")
        }



    }






    return (
        <div className="bg-[#d63384] h-screen">
           <h1 className="text-center pt-20 text-2xl font-bold">PayNexus</h1>

            <div className=" md:w-[50%] flex justify-center border rounded-2xl mx-auto mt-6">
                <form onSubmit={onSubmits} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email/Phone</span>
                        </label>
                        <input type="text" name="identity" placeholder="email/phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Pin</span>
                        </label>
                        <input type={display ? 'text' : 'password'} name="pin" placeholder="Pin" className="input input-bordered" required />
                        <p onClick={() => setDisplay(!display)} className="absolute left-[90%] top-[60%] text-xl text-black">{display ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</p>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">{loading ? <ImSpinner9 className='animate-spin mx-auto'></ImSpinner9> : 'login'}</button>
                        <Toaster />
                    </div>
                     <p className='px-6 text-sm text-center text-black'>
                                Don&apos;t have an account yet?{' '}
                                <Link
                                    to='/signUP'
                                    className='hover:underline hover:text-rose-500 text-white'
                                >
                                    Sign up
                                </Link>
                                .
                            </p>
                </form>
            </div>





        </div>
    );
};

export default LogIn;