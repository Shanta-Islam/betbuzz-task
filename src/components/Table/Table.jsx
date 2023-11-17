
import { FcSettings } from "react-icons/fc";
import { FaRegUser } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { useState } from "react";

const Table = () => {
    const [showModal, setShowModal] = useState(false);

    const startSpinning = () => {
        alert('spinning')
        setTimeout(() => {
            // Math.floor(Math.random() * 10) + 1;
           
            setShowModal(true);
        }, 10000);
        
    };
    return (
        <div>
            <div className="px-4">
                <div className="w-full mb-12 xl:mb-0 px-7 mx-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        <div className=" mb-0 px-4 border-0 bg-black text-white">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 className="font-semibold text-base text-blueGray-700">News</h3>
                                </div>

                            </div>
                        </div>
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <select data-te-select-init>
                                        <option value="">Select Status</option>
                                        <option value="active">Active</option>
                                        <option value="suspend">Suspend</option>
                                        <option value="locked">Locked</option>

                                    </select>
                                </div>
                                {/* <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <button className="bg-gray-800 text-yellow-400 active:bg-indigo-600 text-xs font-bold uppercase px-3 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex justify-end float-right" type="button" onClick={() => setShowModal(true)}><FaRegUser></FaRegUser>Add User</button>
                                </div> */}
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <button className="bg-gray-800 text-yellow-400 active:bg-indigo-600 text-xs font-bold uppercase px-3 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex justify-end float-right" type="button" onClick={startSpinning}><FaRegUser></FaRegUser>Add User</button>
                                </div>
                            </div>
                        </div>

                        <div className="block w-full overflow-x-auto">
                            <table className="items-center bg-transparent w-full border-collapse ">
                                <thead>
                                    <tr>
                                        <th className="px-6  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Account
                                        </th>
                                        <th className="px-6   align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Credit Reference
                                        </th>
                                        <th className="px-6  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Balance
                                        </th>
                                        <th className="px-6  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Bounce rate
                                        </th>
                                        <th className="px-6 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Bounce rate
                                        </th>
                                        <th className="px-6  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Bounce rate
                                        </th>
                                        <th className="px-6  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Bounce rate
                                        </th>
                                        <th className="px-6  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Ref P/L
                                        </th>
                                        <th className="px-6  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Status
                                        </th>
                                        <th className="px-6  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Action
                                        </th>

                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                            argon
                                        </th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                            4,569
                                        </td>
                                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            340
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                            1
                                        </td>
                                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            3400.12
                                        </td>
                                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            3400.12
                                        </td>
                                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            3400.12
                                        </td>
                                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            3400.12
                                        </td>
                                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <span className="inline-flex items-center m-2 px-2 py-1 bg-green-200 hover:bg-gray-300 rounded text-sm font-semibold text-gray-600">
                                                <span className="ml-1">
                                                    Active
                                                </span>
                                            </span>

                                        </td>
                                        <td className=" flex gap-2 items-center justify-center my-auto border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <button className="bg-gray-300 p-1"><FcSettings></FcSettings></button>
                                            <button className="bg-gray-300 p-1"><FaRegUser></FaRegUser></button>
                                            <button className="bg-gray-300 p-1"><FaClock ></FaClock ></button>
                                        </td>
                                    </tr>

                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {showModal ? (
                <div>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-1/4 my-6 mx-auto">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-3xl font=semibold">Add User</h3>
                                    <button
                                        className="bg-transparent border-0 text-black float-right"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                                            x
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <form className="shadow-md rounded px-8 pt-6 pb-8 w-full">
                                        <div className="flex items-center">
                                            <label className="block text-black text-sm font-bold mb-1">
                                                Role
                                            </label>
                                            <select data-te-select-init className="w-full rounded py-2 px-1">
                                                <option value="">Select Role</option>
                                                <option value="manager">Manager</option>
                                                <option value="admin">Admin</option>
                                                <option value="user">User</option>

                                            </select>
                                        </div>
                                        <div className="flex items-center">
                                            <label className="block text-black text-sm font-bold mb-1">
                                                Email Address
                                            </label>
                                            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" placeholder="Enter Email" />
                                        </div>
                                        <div className="flex items-center">
                                            <label className="block text-black text-sm font-bold mb-1">
                                                User Name
                                            </label>
                                            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" placeholder="Enter UserName" />
                                        </div>
                                        <div className="flex items-center">
                                            <label className="block text-black text-sm font-bold mb-1">
                                                Full Name
                                            </label>
                                            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" placeholder="Enter FullName" />
                                        </div>
                                        <div className="flex items-center">
                                            <label className="block text-black text-sm font-bold mb-1">
                                                Password
                                            </label>
                                            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" placeholder="Enter Password" />
                                        </div>
                                        <div className="flex items-center">
                                            <label className="block text-black text-sm font-bold mb-1">
                                                Confirm Password
                                            </label>
                                            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" placeholder="Enter Confirm Password" />
                                        </div>
                                    </form>
                                </div>
                                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    {/* <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button> */}
                                    <button
                                        className=" bg-gray-700 text-yellow-400 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 flex items-center text-center"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Create
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}



           

        </div >

    );
};

export default Table;