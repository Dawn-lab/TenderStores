import {  FaSearch, FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import DropDown from './DropDown';
function NavBar() {
  return (
    <>
      <div className='flex justify-around py-4'>
        <div>
          <a>Logo</a>
        </div>
        <nav className=''>
          <ul className='flex flex-wrap items-center justify-center text-gray-900'>
            <li className='mr-9'>
              <select placeholder='Categories' className='bg-slate-50 border-none w-full p-2.5'>
                <option value="" disabled selected>Categories</option>
                <option value="">Flour</option>
                <option value="">Rice</option>
                <option value="">Sugar</option>
                <option value="">Soap</option>
                <option value="">Cooking Oil</option>
                <option value="">Sweets</option>
                <option value="">Biscuits</option>
              </select>
            </li>
            <li className='mr-9'>
              <Link to="/login"> Deals
              </Link> 
              </li>
            <li className='mr-9'>What's New</li>
            <li className='mr-9'>Delivery</li>
            <div>
              <div className="relative">
                <div className="flex items-center">
                  <div className="flex space-x-1">
                    <input
                      type="text"
                      className="block w-full px-4 py-2 text-black-700 bg-white border rounded-full  focus:ring-green-900 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Search Product"
                    />
                    <button type="submit" className="px-4 text-white bg-green-900 rounded-full ">
                      <FaSearch />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </nav>
        <div className='flex'>
          <div>
            <DropDown/>
          </div>
          <button className='mr-9 flex justify-between'>
            <div className='relative flex'>
              <FaShoppingCart className='pt-2 flex-1 w-8 h-8 fill-current' />
              <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">8
              </span>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default NavBar;