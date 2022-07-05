import Header from './components/Header.js'
import MainContent from './components/MainContent.js'
import './App.css';
const openNav = ()=>{
  document.getElementById('navbar').style.transform = 'translateX(0rem)';
}
const closeNav = ()=>{
  document.getElementById('navbar').style.transform = 'translateX(-19rem)';
}
function App() {
  return (
    <>
      <Header openNav={openNav} closeNav={closeNav}/>
      <div className='bg-gray-100'>
        <MainContent/>
      </div>
    </>
        
  );
}

export default App;
