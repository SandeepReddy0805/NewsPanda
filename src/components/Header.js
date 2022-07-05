import React, { Component } from 'react'
import Navbar from './Navbar'


export default class Header extends Component {
  render() {
    
    const openNav = this.props.openNav
    const closeNav = this.props.closeNav
    return (
      <>
        <div className='flex justify-between md:justify-start items-center md:text-black'>
          <div className="md:invisible">
            <img className='w-12 my-3' onClick={function onClick(){
              openNav();
            }}src="ham.png" alt="menu" />
          </div>
          <div className="flex items-center mr-4">
              <img className='w-16' src="logo.png" alt="News Panda" />
              <span className='text-xl font-extrabold text-black'>NewsPanda</span>
          </div>
          <div>
            <Navbar closeNav={closeNav}/>
            <div className='w-4 mt-1 mr-3 opacity-30 md:w-6 md:absolute md:top-5 md:right-2'><img src="search.png" alt="search" /></div>
          </div>
        </div>
      </>
    )
  }
}

