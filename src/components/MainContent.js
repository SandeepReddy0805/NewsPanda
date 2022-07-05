import React, { Component } from 'react'
import NewsTopic from "./NewsTopic"

let topics = ['Business','Sports','Entertainment'];
export default class MainContent extends Component {
  render() {
    return (
      <div className='bg-white w-11/12 md:w-3/5 mx-auto shadow-lg shadow-gray-400 min-h-screen rounded-md my-4'>
        {
          // topics.map((element)=>{
          //   return <NewsTopic topic={element} url={`https://newsapi.org/v2/top-headlines?country=us&category=${element}&apiKey=1d4762be4c954da5893402ccf2200c18`}/>
          // })
        }
        <NewsTopic topic={topics[0]} url={'https://newsapi.org/v2/top-headlines?country=us&category=Business&apiKey=1d4762be4c954da5893402ccf2200c18'}/>
      </div>
    )
  }
}
