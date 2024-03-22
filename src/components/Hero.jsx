function Hero(){
  return <div className='max-w-[1640px] mx-auto p-4'>
  <div className='max-h-[500px] relative '>
  {/* overlay  */}
  <div className='absolute h-full w-full text-gray-200 max-h-[500px ] bg-black/40 flex flex-col justify-center '>
   <h1 className='px-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl '>The <span className='text-orange-500'>Best</span></h1>
   <h1 className='px-4 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl '> <span className='text-orange-500 mx-2'>Foods</span>Delivered</h1>
  </div>
    <img className='w-full max-h-[500px] object-cover ' src='https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600' alt='burger'/>
  </div>
  
  </div>
}
export default Hero;
