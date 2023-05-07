import { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaUser } from "react-icons/fa"

function DropDown() {
    const [isOpen, setIsOpen] = useState(false);
    // const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <>
            <button onClick={() => setIsOpen((prev: boolean) => !prev)} className='relative mr-6 p-2 flex justify-between border border-transparent active:border-green-950 rounded-lg' data-dropdown-toggle="dropdownAvatarName">
                <div>
                    <FaUser className="mr-1 p-0.5 border rounded-full border-gray-400 h-7 w-7" />
                </div>
                <span className='px-2 text-bold'>Julius Githinji</span>
                {
                    !isOpen ? (
                        <div>
                            <FaAngleDown className="mt-1.5" />
                        </div>
                    ) : (
                        <div>
                            <FaAngleUp className="mt-1.5" />
                        </div>
                    )
                }
            </button>
            {
                isOpen && (
                    <div id="dropdownAvatarName" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                            <div className="truncate">name@flowbite.com</div>
                        </div>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Account</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Orders</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Inbox</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Saved Items</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Vouchers</a>
                            </li>
                        </ul>
                        <div className="py-2">
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default DropDown