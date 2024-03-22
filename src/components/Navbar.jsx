import {useState} from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag} from 'react-icons/ai';
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {FaWallet, FaUserFriends} from 'react-icons/fa'

function Navbar(){
  
  const [show, setShow] = useState(false)
  
  return <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
    {/* left side  */}
  <div className='flex items-center '>
    <div onClick={()=>setShow(!show)} className='cursor-pointer'>
      <AiOutlineMenu size={30}/>
       </div>
      <h1 className='text-2xl sm:text-3xl lg:4xl px-2 font-bold'><span>Eats</span></h1> 
       <div className='hidden lg:flex bg-gray-200 items-center rounded-full p-1 text-[14px]'>
         <p className='bg-black text-white rounded-full p-2'>delivery </p>
         <p className='p-2'>pickup</p>
      
      </div>
  </div>
    {/* search input */ }
    <div className='flex items-center bg-gray-200 rounded-full w-[200px] sm:w-[400px] lg:w-[500px] '>
    <AiOutlineSearch className='mx-2' size={25}/>
    <input className='bg-transparent p-2 w-full focus:outline-none ' placeholder='search foods '/>
    
    </div>
    {/* {cart button } */}
    <button className='bg-black rounded-full text-white hidden md:flex items-center py-2 '>
    <BsFillCartFill size={20} className='mr-2'/> cart
    </button>
    {/* mobile menu */}
    {/* overlay  */}
    {show?<div className='bg-black/80 fixed w-full  h-screen z-10 top-0 left-0'>
    </div>:''}
    {/* side drawer menu */}
    <div className={show?'fixed w-[300px] top-0 left-0 h-screen bg-white z-10 duration-300' : 'fixed w-[300px] top-0 left-[-100%] h-screen bg-white z-10 duration-300' }>
    <AiOutlineClose onClick={()=>setShow(!show)} size={25} className='absolute right-4 top-4 left-auto cursor-pointer '/>
      <h2 className='text-2xl p-4 '>Best <span className='font-bold '>Eats</span></h2>
    <nav>
    <ul className='flex flex-col text-gray-800 p-4 '>
    <li className='text-xl py-4 flex  '><TbTruckDelivery size={25} className='mr-4'/>Orders</li>
    <li className='text-xl py-4 flex  '><MdFavorite size={25} className='mr-4'/>Favorites</li>
    <li className='text-xl py-4 flex  '><FaWallet size={25} className='mr-4'/>Wallets</li>
    <li className='text-xl py-4 flex  '><MdHelp  size={25} className='mr-4'/>Help</li>
    <li className='text-xl py-4 flex  '><AiFillTag size={25} className='mr-4'/>Promotions </li>
    <li className='text-xl py-4 flex  '><BsFillSaveFill size={25} className='mr-4'/>Best ones </li>
    <li className='text-xl py-4 flex  '><FaUserFriends size={25} className='mr-4'/>Invite Friends </li>
 
    
    </ul>
    </nav>
    </div>
  </div>
}
export default Navbar;