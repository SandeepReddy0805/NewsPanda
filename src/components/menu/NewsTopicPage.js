import React from 'react';
import { API_URL } from '../../constants';
import { useState, useEffect } from 'react';
import NewsItem from '../NewsItem';

function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }


function NewsTopicPage({topic}) {
    
  const [articles, setarticles] = useState([])
  const [pageNo, setPageNo] = useState(1)
    useEffect(() => {
        fetch(API_URL + 'category=' + topic + "&page=" + pageNo)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            // console.log(data);
            setarticles(data.articles);
          });
      }, [pageNo,topic]);
  return (
    <div className='w-4/5 m-auto'>
        <h1 className='text-2xl font-bold p-5'>{titleCase(topic + " News Around You")} </h1>
        <div className="grid grid-cols-2">
        {articles.map((element) => {
            return (
              <NewsItem
                key={element.url}
                url={element.url}
                imageUrl={element.urlToImage}
                title={element.title}
                description={element.description}
              />
            );
          })}
        </div>
        <div className='flex justify-between'>
            <button className={'p-4 bg-slate-700 rounded-lg my-3 text-white'} onClick={(e)=>{
                if(pageNo !== 1) setPageNo(pageNo - 1);
            }} >&larr;Previous</button>
            <button className='p-4 bg-slate-700 rounded-lg my-3 text-white' onClick={(e)=>{
                setPageNo(pageNo + 1);
            }}>Next&rarr;</button>
        </div>
    </div>
  )
}

export default NewsTopicPage;