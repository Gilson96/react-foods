import { useState } from "react"
import FoodMenu from "./FoodMenu"
import burger from '../Assets/burger.png'
import useScreenSize from '../features/useScreenSize'

const Main = () => {
  const [foodImage, setFoodImage] = useState(burger)
  const screenSize = useScreenSize()

  return (
    <div className='flex flex-col px-[2%]'>
      <div className={`${screenSize.width < 800 ? 'flex flex-col mt-[5%]' : 'flex justify-between items-center'} `}>
        <div className="flex flex-col ">
          <p className={`${screenSize.width < 800 ? 'text-[2rem]' : 'text-[3rem]'} font-bold`}>What</p>
          <p className={`${screenSize.width < 800 ? 'text-[2rem]' : 'text-[3rem]'} font-bold`}>Would you like</p>
          <p className={`${screenSize.width < 800 ? 'text-[2rem]' : 'text-[3rem]'} font-bold`}>to <span>Order</span> today?</p>
          <p className={`${screenSize.width < 800 ? 'text-[0.5rem]' : 'text-sm'} font-bold text-gray-400 mt-[2%] w-[70%]`}>Our job is to filling your tummy with delicious food with fast and free delivery</p>
        </div>
        {screenSize.width < 800 ? '' : <div className={`flex h-[18rem] w-[18rem] mr-[10rem] bg-lime-300 rounded-full shadow-lg justify-center items-center`}>
          <img src={foodImage} class="fade-in-element" alt="food" />
        </div>}
        
      </div>

      <div className="">
        <FoodMenu setImage={setFoodImage} slidesPerView={screenSize.width < 760 ? 1.5 : 4} spaceBetween={screenSize.width < 800 && 50}/>
      </div>
    </div>
  )
}

export default Main