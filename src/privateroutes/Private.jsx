import { Navigate } from "react-router-dom";


const Private = ({children}) => {
    const user = localStorage.getItem('identity')
    const token = localStorage.getItem('access-token')
    if(user && token){
        return children
    }
    else{
        return <Navigate to={'/'}></Navigate>
    }
};

export default Private;