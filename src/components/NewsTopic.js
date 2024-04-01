import NewsItem from "./NewsItem";
import { useState,useEffect } from "react";

export default function NewsTopic({url,topic}) {
  const [articles, setarticles] = useState([])
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setarticles(data.articles.splice(0,3));
      });
  }, []);
  return (
    <>
      <div className="news-topic my-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold p-5">{topic}</h1>
          <a className="p-6" href={"/" + topic}>
            More&rarr;
          </a>
        </div>
        <div className="h-[30vh] md:h-[50vh] p-4 flex flex-row bg-slate-100 overflow-x-auto">
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
      </div>
    </>
  );
}
