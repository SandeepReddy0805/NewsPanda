import React, { Component } from 'react'
import NewsItem from '../NewsItem'

export default class Business extends Component {
  render() {
    return (
        <>
        <h1 className='text-2xl font-bold p-5'>{this.props.topic}</h1>
        <div className='bg-slate-100'>  
          {
            this.state.articles.map((element)=>{
              return <NewsItem key={element.url} url={element.url} imageUrl={element.urlToImage} title={element.title} description={element.description}/>
            })
          }
        </div>
        </>
    )
  }
}
