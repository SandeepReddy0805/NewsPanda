import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    const closeNav = this.props.closeNav
    return (
      <div id='navbar' className='border md:border-none border-r-black md:mr-10 md:w-[50vw] md:relative bg-black h-screen top-0 left-0 absolute translate-x-[-19rem] md:translate-x-0 transition md:h-auto md:bg-transparent'>
        <ul className='w-72 flex flex-col md:flex-row font-bold'>
            <li className='text-center px-2 py-4 text-xl font-bold bg-slate-500 text-black flex justify-between items-center md:hidden'><div className='flex items-center'><img src="logo.png" alt="NewsPanda" className='w-10' /><span>NewsPanda</span></div><img className='w-6 mr-2' onClick={closeNav} src="cross.png" alt="exit" /></li>
            <li className='py-6 ml-3 active:underline md:px-6 hover:text-gray-400'><a href="/">Home</a></li>
            <li className='py-6 ml-3 active:underline md:px-6 hover:text-gray-400'><a href="/business">Business</a></li>
            <li className='py-6 ml-3 active:underline md:px-6 hover:text-gray-400'><a href="/sports">Sports</a></li>
            <li className='py-6 ml-3 active:underline md:px-6 hover:text-gray-400'><a href="/entertainment">Entertainment</a></li>
            <li className='py-6 ml-3 active:underline md:px-6 hover:text-gray-400'><a href="/about">About</a></li>
        </ul>
      </div>
    )
  }
}
