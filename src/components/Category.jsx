import {categories} from '../data/data'

function Category(){

return <div className='max-w-1640px mx-auto p-4 py-14 '>
<h1 className='text-orange-600 font-bold text-4xl text-center '>Top Rated Menu Items</h1>
  {/* catagories  */}
  <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-4'>
  
  {categories.map((item, index)=>(<div className='bg-gray-600 rounded-lg p-4 flex items-center justify-between '  key={index} ><h2 className='font-bold sm:text-xl '>{item.name}</h2>
     <img className='w-20' src={item.image} alt={item.name}/>
  </div>))}
  </div>


</div>
}

export default Category