import React, { Component } from 'react'
import NewsItem from './NewsItem';

export default class NewsTopic extends Component {
    constructor(){
      super();
      this.state = {
        articles: []
      }
    }
    async componentDidMount(){
      let news = await fetch(this.props.url);
      let parsedNews = await news.json();
      this.setState({articles : parsedNews.articles});
    }
    render() {
    return (
      <>
        <h1 className='text-2xl font-bold p-5'>{this.props.topic}</h1>
        <div className='h-[50vh] overflow-x-auto overflow-y-hidden p-4 grid grid-flow-col bg-slate-100'>
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
