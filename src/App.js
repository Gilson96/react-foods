import './App.css';
import LandingPage from './components/LadingPage'
import background from './Assets/background.jpg';
import useScreenSize from './features/useScreenSize';

function App() {
  const screenSize = useScreenSize()

  return (
    <div className={`bg-lime-200 w-full ${screenSize.width < 1000 ? 'h-screen' : 'h-full' } flex justify-center items-center `}>
      <LandingPage/>
    </div>
  );
}

export default App;
