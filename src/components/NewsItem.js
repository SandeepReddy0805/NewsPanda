import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    return (
      <div className='w-40 md:w-56 p-4 rounded-md'>
        <img className='aspect-square rounded-lg' src={this.props.imageUrl} alt={this.props.title} />
        <h1 className='text-xl font-semibold hover:underline'><a rel="noreferrer" href={this.props.url} target='_blank'>{this.props.title}</a></h1>
        <p>{this.props.description}...</p>
      </div>
    )
  }
}
