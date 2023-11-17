
const Header = () => {
    return (
        <nav className="mx-auto block w-full max-w-screen-xl bg-gray-700 py-2 px-3  lg:px-8 lg:py-4">
            <div>
                <div className="container mx-auto flex items-center justify-between text-yellow-500">
                    <a
                        href="#"
                        className="mr-4 block cursor-pointer  font-sans text-xl font-bold leading-normal text-inherit antialiased"
                    >
                        <span>Betbuzz</span>
                    </a>
                    <div className="hidden items-center gap-6 lg:flex bg-gray-800 px-5 py-2 rounded">
                        <p>Main Balance PBU <span>13.00</span></p>
                        <p>Exposure <span>13.00</span></p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;