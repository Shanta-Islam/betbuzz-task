
const Navbar = () => {
    return (
        <nav className="mx-auto block w-full max-w-screen-xl border border-white/80 bg-yellow-600 bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
            <div>
                <div className="container mx-auto flex items-center justify-between text-gray-900">

                    <ul className="hidden items-center gap-6 lg:flex">
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto">Downline <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

                            <div id="dropdownNavbar" className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
                                <ul className="py-1" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Downline1</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Downline2</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Downline3</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                            <a className="flex items-center" href="#">
                                My Account
                            </a>
                        </li>
                        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                            <a className="flex items-center" href="#">
                                Bet List
                            </a>
                        </li>
                        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                            <a className="flex items-center" href="#">
                                Live Bet
                            </a>
                        </li>
                        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                            <a className="flex items-center" href="#">
                                Risk Management
                            </a>
                        </li>
                        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                            <a className="flex items-center" href="#">
                                Banking
                            </a>
                        </li>


                    </ul>
                   
                    <button
                        className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                        data-collapse-target="navbar"
                    >
                        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </span>
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;