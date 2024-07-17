import toast, { Toaster } from "react-hot-toast";
import Navbar from "../shareComponents/Navbar";
import { useState, useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HOme = () => {
    const imageUrl = "https://www.bkash.com/uploaded_contents/banners/desktop/1920x500_1696499863766.webp";
    const imageUrl2 = "https://www.bkash.com/uploaded_contents/banners/desktop/pb1920x500_1715608434663.webp";
    const [display, setDisplay] = useState(false);
    const modalRef = useRef(null);

    const [show,hidden]=useState(null)

    const navigate=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const toNumber = e.target.toNumber.value;
        const amount = parseFloat(e.target.amount.value);
        const password = e.target.password.value;
        const fromNumber = localStorage.getItem('identity');
        const charge = amount * 0.05;

        if (amount < 50) {
            return toast.error('Sorry, you must enter at least 50 Taka');
        }
        if (show ==='cancel'){
            modalRef.current.close();
        }

        const info = {
            toNumber,
            amount,
            charge,
            finalTaka: amount + charge,
            password,
            fromNumber,
            method: 'send-money',
            status: 'success'
        };
        console.log(info);

        axios.post('http://localhost:7000/send-money', info)
            .then(data => {
                if (data.data === 'user not found' || data.data === 'Invalid identity or password') {
                    return toast.error(data.data);
                } else {
                    console.log(data.data);
                    e.target.toNumber.value = '';
                    e.target.amount.value = '';
                    e.target.password.value = '';
                    toast.success('successful');
                    navigate('/dashboard/History')
                    modalRef.current.close(); // Close the modal
                }
            })
    };
    const handleSubmit2 = (e) => {
        e.preventDefault();

        const toNumber = e.target.toNumber.value;
        const amount = parseFloat(e.target.amount.value);
        const password = e.target.password.value;
        const fromNumber = localStorage.getItem('identity');
        const charge = amount * 0.015;

        if (amount < 50) {
            return toast.error('Sorry, you must enter at least 50 Taka');
        }
        if (show ==='cancel'){
            modalRef.current.close();
        }

        const info = {
            toNumber,
            amount,
            charge,
            finalTaka: amount + charge,
            password,
            fromNumber,
            method: 'cash-out',
            status: 'success'
        };
        console.log(info);

        axios.post('http://localhost:7000/send-money', info)
            .then(data => {
                if (data.data === 'user not found' || data.data === 'Invalid identity or password') {
                    return toast.error(data.data);
                } else {
                    console.log(data.data);
                    e.target.toNumber.value = '';
                    e.target.amount.value = '';
                    e.target.password.value = '';
                    toast.success('successful');
                    navigate('/dashboard/History')
                    modalRef.current.close(); // Close the modal
                }
            })
    };

  

    return (
        <div>
            <div className="mx-9 mt-3">
                <Navbar />
            </div>

            <div className="mx-9 mt-2">
                <img
                    src={imageUrl}
                    alt="Banner"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>

            <h1 className="text-center font-bold mt-3 text-3xl capitalize">services</h1>
            <div className="h-screen mt-3 rounded-2xl mx-9">
                <div  className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10 justify-center">
                    <div onClick={() => modalRef.current.showModal()} className="bg-[#d63384] rounded-2xl p-2 shadow-xl hover:cursor-pointer">
                        <img src="https://i.ibb.co/YN4VrRQ/download-5.png" alt="" className="w-20 rounded-full pt-2" />
                        <h3 className="text-white font-extrabold pt-2">Send Money</h3>
                    </div>
                    <dialog id="my_modal_3" className="modal" ref={modalRef}>
                        <div className="modal-box w-full">
                            <h3 className="font-bold text-lg text-center capitalize">send money</h3>
                           
                            <form onSubmit={handleSubmit} className="w-full">
                               <div className="flex justify-end">
                                <button onClick={()=>hidden('cancel')} className=" rounded-full text-xl"><MdCancel></MdCancel></button>
                               </div>
                                <input
                                    type="text"
                                    placeholder="Enter number"
                                    name="toNumber"
                                    className="input input-bordered input-secondary w-full mt-2"
                                />
                                <input
                                    type="number"
                                    placeholder="Enter Amount"
                                    name="amount"
                                    className="input input-bordered input-secondary w-full mt-2"
                                />
                                <div className="form-control relative">
                                    <input
                                        type={display ? 'text' : 'password'}
                                        name="password"
                                        placeholder="Pin"
                                        className="input input-bordered input-secondary w-full mt-2"
                                        
                                    />
                                    <p onClick={() => setDisplay(!display)} className="absolute left-[90%] top-[40%] text-xl text-black">
                                        {display ? <FaEye /> : <FaEyeSlash />}
                                    </p>
                                </div>
                                <div className="flex justify-center mt-3">
                                    <button className="btn btn-secondary">send</button>
                                   
                                    <Toaster />
                                </div>
                            </form>
                        </div>
                    </dialog>

                    <div onClick={() => document.getElementById('my_modal_4').showModal()} className="bg-[#d63384] p-2 rounded-2xl shadow-xl hover:cursor-pointer">
                        <img src="https://i.ibb.co/thX5wX4/download-2.jpg" alt="" className="w-20 rounded-full pt-2" />
                        <h3 className="text-white font-extrabold pt-2">Cash-Out</h3>
                    </div>
                    <dialog id="my_modal_4" className="modal" ref={modalRef}>
                        <div className="modal-box w-full">
                            <h3 className="font-bold text-lg text-center capitalize">cash-out</h3>

                            <form onSubmit={handleSubmit2} className="w-full">
                                <div className="flex justify-end">
                                    <button onClick={() => hidden('cancel')} className=" rounded-full text-xl"><MdCancel></MdCancel></button>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter number"
                                    name="toNumber"
                                    className="input input-bordered input-secondary w-full mt-2"
                                />
                                <input
                                    type="number"
                                    placeholder="Enter Amount"
                                    name="amount"
                                    className="input input-bordered input-secondary w-full mt-2"
                                />
                                <div className="form-control relative">
                                    <input
                                        type={display ? 'text' : 'password'}
                                        name="password"
                                        placeholder="Pin"
                                        className="input input-bordered input-secondary w-full mt-2"

                                    />
                                    <p onClick={() => setDisplay(!display)} className="absolute left-[90%] top-[40%] text-xl text-black">
                                        {display ? <FaEye /> : <FaEyeSlash />}
                                    </p>
                                </div>
                                <div className="flex justify-center mt-3">
                                    <button className="btn btn-secondary">send</button>

                                    <Toaster />
                                </div>
                            </form>
                        </div>
                    </dialog>




                    <div className="bg-[#d63384] p-2 rounded-2xl shadow-xl hover:cursor-pointer">
                        <img src="https://i.ibb.co/7Gt4Zyx/images-3.png" alt="" className="w-20 rounded-full pt-2" />
                        <h3 className="text-white font-extrabold pt-2">Cash-in</h3>
                    </div>
                </div>

                <h1 className="text-center font-bold mt-3 text-3xl capitalize mb-5">offers</h1>
                <div className="mx-9 mt-2">
                    <img
                        src={imageUrl2}
                        alt=" Banner"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
            </div>

            <div className="mt-16">
                <footer className="footer footer-center bg-[#d63384] text-base-content p-4">
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by Bkash Industries Ltd</p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default HOme;
