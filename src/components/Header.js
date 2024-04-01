import Navbar from './Navbar'

const Header = (props) => {
    
    const openNav = props.openNav
    const closeNav = props.closeNav
    return (
      <>
        <div className='flex justify-between md:justify-start items-center md:text-white bg-slate-800'>
          <div className="md:invisible">
            <img className='w-14 px-1' onClick={openNav}src="ham.png" alt="menu" />
          </div>
          <div className="flex items-center mr-4">
              <img className='w-16' src="logo.png" alt="News Panda" />
              <span className='text-xl font-extrabold text-white'>NewsPanda</span>
          </div>
          <div>
            <Navbar closeNav={closeNav}/>
            <div className='w-4 mt-1 mr-3 opacity-30 md:w-6 md:absolute md:top-5 md:right-2'><img className='invert' src="search.png" alt="search" /></div>
          </div>
        </div>
      </>
    )
  };
  
export default Header;

