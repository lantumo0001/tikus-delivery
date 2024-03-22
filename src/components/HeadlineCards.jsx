function HeadlineCards(){
  return <div className='max-w-[1640px] p-4  py-12 mx-auto  grid md:grid-cols-3 gap-6 '>
  {/* cards  */}
    <div className='rounded-xl relative' >
  {/* overlay */}
    <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
    <p className="font-bold px-2 pt-4 text-2xl">Suns's out , Bog's Out </p>
    <p className="px-2 ">Through 8/16 </p>
    <button className="border-white bg-white text-black absolute mx-2 bottom-4">order now </button>
    </div> 
    <img className="max-h-[160px] md:max-h-[200px ] w-full object-cover rounded-xl " src='https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/'/>
    </div>
    <div className='rounded-xl relative' >
  
  {/* overlay */}
    <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
    <p className="font-bold px-2 pt-4 text-2xl">New Restaurants  </p>
    <p className="px-2 ">Added Daily  </p>
    <button className="border-white bg-white text-black absolute mx-2 bottom-4">order now </button>
    </div> 
    <img className="max-h-[160px] md:max-h-[200px ] w-full object-cover rounded-xl " src='https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/'/>
    </div>
    <div className='rounded-xl relative' >
  {/* overlay */}
    <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
    <p className="font-bold px-2 pt-4 text-2xl">We Deliver Deserts  </p>
    <p className="px-2 "> Testy Treats </p>
    <button className="border-white bg-white text-black absolute mx-2 bottom-4">order now </button>
    </div> 
    <img className="max-h-[160px] md:max-h-[200px ] w-full object-cover rounded-xl " src='https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/'/>
    </div>
  </div>
}
export default HeadlineCards;