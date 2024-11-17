import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';

function App() {
  const concept = "Arrays";
  return (
    <>
    <NavBar />
    <SideBar />
    <MainContent concept={concept}/>
    </>
  );
}

export default App;
