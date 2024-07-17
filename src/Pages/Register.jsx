import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    const [display, setDisplay] = useState(false);

    const [loading,setLoading]=useState(false)

    const navigate=useNavigate()


    const onSubmits = async(e) => {
        e.preventDefault()

        const identity = e.target.identity.value;
        const pin = e.target.pin.value
        const image = e.target.image.files[0]
        const name=e.target.name.value
      
        const formData = new FormData()
        formData.append('image', image)

        if (pin.length < 5 || pin.length > 5) {
            return toast.error("please write 5-digit PIN")
        }

        try{
            setLoading(true)

            const imageResponse = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_APT_KEY}`, formData)
            const imageUrl = imageResponse.data.data.display_url

             const info = {
            identity,
            pin,
            imageUrl,
            status:'pending',
            role:'user',
            money:0,
            name
        }

        await axios.post('http://localhost:7000/allusers', info)
        .then(data=>{
            console.log(data.data)
            navigate('/')

            e.target.reset()
            setLoading(false)
        })

        
            
        }
        catch(error){
                // 
            toast.error('invalid info')
            setLoading(false)
        }

        









       



    }






    return (
        <div className="bg-[#d63384] ">
            <h1 className="text-center pt-20 text-2xl font-bold">PayNexus</h1>

            <div className=" md:w-[50%] flex justify-center border rounded-2xl mx-auto mt-6 h-full">
                <form onSubmit={onSubmits} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email/Phone</span>
                        </label>
                        <input type="text" name="identity" placeholder="email/phone" className="input input-bordered" required />
                    </div>
                    <div>
                        <label htmlFor='image' className='block mb-2 text-sm'>
                            Select Image:
                        </label>
                        <input
                            required
                            type='file'
                            id='image'
                            name='image'
                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                            accept='image/*'
                        />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Pin</span>
                        </label>
                        <input type={display ? 'text' : 'password'} name="pin" placeholder="Pin" className="input input-bordered" required />
                        <p onClick={() => setDisplay(!display)} className="absolute left-[90%] top-[60%] text-xl text-black">{display ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</p>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">  {loading ? <ImSpinner9 className='animate-spin mx-auto'></ImSpinner9> : 'Continue'}</button>
                        <Toaster />
                    </div>
                    <p className='px-6 text-sm text-center text-black'>
                         have an account yet?{' '}
                        <Link
                            to='/'
                            className='hover:underline hover:text-rose-500 text-red-700'
                        >
                            Login
                        </Link>
                        .
                    </p>
                </form>
            </div>





        </div>
    );
};

export default Register;