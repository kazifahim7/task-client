
import { Link } from "react-router-dom";
import picture from "../assets/react .svg"
const Navbar = () => {

    const imgu = localStorage.getItem('imageUrl')


    const handleSubmit=()=>{
        localStorage.removeItem('access-token')
    }

    const roles=localStorage.getItem('role')


    return (
        <div className="navbar bg-[#d63384] rounded-2xl p-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#d63384] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {
                            roles === 'admin' && <Link to={'/dashboard/ManageUser'} className="text-center" ><a>DashBoard</a></Link>
                                }
                                {
                            roles === 'agent' && <Link to={'/dashboard/History'} className="text-center" ><a>DashBoard</a></Link>
                                }
                                {
                            roles === 'user' && <Link to={'/dashboard/History'} className="text-center" ><a>DashBoard</a></Link>
                                }



                        
                        <button onClick={handleSubmit} className="btn mt-3">logOUt</button>
                        
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className=" text-xl font-bold animate-pulse">bKash  </a>
                <span><img src={picture} alt="" className="w-12 pl-3" /></span>
            </div>
            <div className="navbar-end">
               
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                        <img src={imgu} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;