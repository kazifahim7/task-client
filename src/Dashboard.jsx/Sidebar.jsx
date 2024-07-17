
import {  useState } from 'react'
import { GrLogout } from 'react-icons/gr'

import { BsClockHistory, BsFillHouseAddFill } from 'react-icons/bs'

import { AiOutlineBars } from 'react-icons/ai'

import { NavLink, useNavigate } from 'react-router-dom'


import { Link } from 'react-router-dom'



import { FaUser } from 'react-icons/fa'





const Sidebar = () => {
   
    const [isActive, setActive] = useState(false)
    const navigate=useNavigate()


    

    const role = localStorage.getItem('role')
    console.log(role)


    

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    const handelLogIN=()=>{
        localStorage.removeItem('access-token')
       navigate('/')
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/home'>
                            <div className="flex justify-center items-center gap-2">
                                <img src="https://www.bkash.com/images/bkash_grey_thumbnail.svg" alt="" className="w-12" />
                                <p className="text-[#0ecdb9] font-bold text-2xl">bkash</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-7 w-7 text-[#0ecdb9]' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#d63384] text-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2  rounded-lg justify-center items-center  mx-auto text-white'>
                            <Link to='/home'>
                                <div className="flex justify-center items-center gap-2">
                                    <img src="https://www.bkash.com/images/bkash_grey_thumbnail.svg" alt="" className="w-12" />
                                    <p className="text-[#0ecdb9] font-bold text-2xl">Bkash</p>
                                </div>
                            </Link>
                        </div>

                        <h1 className='capitalize text-center'>{ role}</h1>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                 
                        <nav>
                            {/* admin */}
                            {
                                role === 'admin' &&<>

                                    <NavLink
                                        to='/dashboard/ManageUser'
                                        end
                                        className={({ isActive }) =>
                                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-white'
                                            }`
                                        }
                                    >
                                        <FaUser className='w-5 h-5' />

                                        <span className='mx-4 font-medium'>Manage User</span>
                                    </NavLink>


                                    <NavLink
                                        to='/dashboard/MyProfile'
                                        className={({ isActive }) =>
                                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-white'
                                            }`
                                        }
                                    >
                                        <BsFillHouseAddFill className='w-5 h-5' />

                                        <span className='mx-4 font-medium'>Profile</span>
                                    </NavLink>
                                    <NavLink
                                        to='/dashboard/History'
                                        className={({ isActive }) =>
                                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-white'
                                            }`
                                        }
                                    >
                                        
                                        <BsClockHistory className='w-5 h-5' />

                                        <span className='mx-4 font-medium'>History</span>
                                    </NavLink>
                                
                                </>
                            }
                            
                           

                            {/* host routes */}

                            {
                                role === 'agent' &&<>

                                    <NavLink
                                        to='/dashboard/History'
                                        className={({ isActive }) =>
                                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-white'
                                            }`
                                        }
                                    >

                                        <BsClockHistory className='w-5 h-5' />

                                        <span className='mx-4 font-medium'>History</span>
                                    </NavLink>
                                   
                                    <NavLink
                                        to='/dashboard/MyProfile'
                                        className={({ isActive }) =>
                                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-white'
                                            }`
                                        }
                                    >
                                        <BsFillHouseAddFill className='w-5 h-5' />

                                        <span className='mx-4 font-medium'>Profile</span>
                                    </NavLink>
                                
                                
                                </>
                            }





                            {/* host routes end... */}

                            {/* user routes */}

                            {
                                 role === 'user'  &&<>

                                    <NavLink
                                        to='/dashboard/History'
                                        className={({ isActive }) =>
                                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-white'
                                            }`
                                        }
                                    >

                                        <BsClockHistory className='w-5 h-5' />

                                        <span className='mx-4 font-medium'>History</span>
                                    </NavLink>
                                    <NavLink
                                        to='/dashboard/MyProfile'
                                        className={({ isActive }) =>
                                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-white'
                                            }`
                                        }
                                    >
                                        <BsFillHouseAddFill className='w-5 h-5' />

                                        <span className='mx-4 font-medium'>Profile</span>
                                    </NavLink>
                                 
                                
                                </>
                            }





                        
                        </nav>
                    </div>
                </div>

                <div>
                    <hr />

                    {/* Profile Menu */}
                   
                    <button
                        onClick={handelLogIN}
                        className='flex w-full items-center px-4 py-2 mt-5 text-[white] hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar