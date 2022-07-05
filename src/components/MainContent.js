import React, { Component } from 'react'
import NewsTopic from "./NewsTopic"


export default class MainContent extends Component {
  render() {
    return (
      <div className='bg-white w-11/12 md:w-3/5 mx-auto shadow-lg shadow-gray-400 min-h-screen rounded-md my-4'>
        <NewsTopic topic='Top Headlines' url={'https://newsapi.org/v2/top-headlines?country=us&apiKey=1d4762be4c954da5893402ccf2200c18'}/>
        <NewsTopic topic='Business' url={'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1d4762be4c954da5893402ccf2200c18'}/>
        <NewsTopic topic='Sports' url={'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1d4762be4c954da5893402ccf2200c18'}/>
        <NewsTopic topic='Entertainment' url={'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=1d4762be4c954da5893402ccf2200c18'}/>
      </div>
    )
  }
}
