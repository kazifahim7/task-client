
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">Page not found</p>
            <Link
                to="/"
                className="px-4 py-2 bg-blue-500 rounded-xl text-white rounded hover:bg-blue-700 transition duration-300"
            >
                Go back to Home
            </Link>
        </div>
    );
};

export default NotFound;