import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LadingPage'

function App() {
  return (
    <div className='bg-cover bg-no-repeat bg-center overflow-hidden w-screen h-screen bg-white'>

      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
