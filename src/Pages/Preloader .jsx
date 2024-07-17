

const Preloader  = () => {
    return (
        <div className="flex bg-[#d63384] items-center justify-center min-h-screen ">
            <div className="text-center">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
                <h1 className="text-3xl font-semibold text-gray-800">BKash</h1>
            </div>
        </div>
    );
};

export default Preloader ;