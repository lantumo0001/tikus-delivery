import { useState } from 'react';
import {data} from '../data/data';
function Food(){
  const [foods, setFoods] = useState(data);
  
  // filter foods by catagory 

  function filterFoods(category){
    setFoods(data.filter(item => {return item.category === category} ))
  }
// filter by price 
  function filterPrice(price){
   setFoods(data.filter(item=> {return item.price === price }))

    
  }
  return <div className='max-w-[1640px] px-4 py-12 mx-auto '>

    <h1 className='text-orange-600 font-bold text-4xl text-center '>Top Rated Menu Items </h1>
    {/* filter row  */}
    <div className='my-6'>
    {/* filter type  */}
  
     <div className='flex flex-col lg:flex-row '>
          <p className='text-bold text-gray-700 '>filter type</p>
        <div className='flex space-between wrap '>
            < button onClick={()=>setFoods(data)} className='mx-2 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white ' >all</ button >
            < button onClick={()=>filterFoods('burger')}  className='mx-2 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white ' >burgers</ button >
            < button onClick={()=>filterFoods('salad')} className='mx-2 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white '>salads</ button >
            < button onClick={()=>filterFoods('chicken')}  className='mx-2 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white '>chickens</ button >
            < button onClick={()=>filterFoods('pizza')}  className='mx-2 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white '>pizza</ button >
        </div>

      </div>
      {/* filter price   */}

    <div className='max-w-[390px] flex justify-between w-full mt-4 wrap'>
    
      <p className='text-bold text-gray-700 '>filter type </p>
      < button onClick={()=>filterPrice('$')} className='mx-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white '>$</ button >
      < button onClick={()=>filterPrice('$$')} className='mx-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white '>$$</ button >
      < button onClick={()=>filterPrice('$$$')} className='mx-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white '>$$$</ button >
     < button onClick={()=>filterPrice('$$$$')} className='mx-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white '>$$$$</ button >
    </div>
  </div>
    {/* display food  */}
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4' >

      {foods.map((item, index)=>(<div className='border  shadow-lg hover:scale-105 duration-6  ' key={index}><img className='w-full max-h-[200px] rounded-t-lg rounded-lg' src={item.image} alt={item.name}/>
      <div className='flex justify-between px-2 py-4 '><p className='font-bold  '>{item.name}</p><p><span className='bg-orange-500 text-white p-1 rounded'>{item.price}</span></p></div>
      </div>))}
    
    </div>
</div>
}

export default Food 