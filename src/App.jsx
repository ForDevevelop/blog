import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import Description from './components/Description';

function App() {
  const concept = "Arrays";

  return (
    <div>
       <div className="fixed top-0 left-0 w-full bg-white z-10">
          <NavBar />
      </div>
      <div className='pl-4 pr-4 mt-16 pt-8'>
      <Description/>
      </div>
      <div className='flex'>
        <div className='flex-none p-4 fixed '>
          <SideBar/> 
        </div>
        <div className='flex-1 pl-80'>
        <MainContent/> 
        </div>
      </div>
       
    </div>
  );
}

export default App;
