import MainLeftSide from './MainLeftSide'
import MainRightSide from './MainRightSide'

const Main = () => {

  return (
    <div className='w-screen h-screen grid grid-cols-5 grid-rows-5 grid-flow-col'>
      <MainLeftSide />
      <MainRightSide />
    </div>
  )
}

export default Main