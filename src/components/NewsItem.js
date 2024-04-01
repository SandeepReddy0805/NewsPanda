import { DEFAULT_IMAGE } from "../constants";
import {useState} from 'react';
export default function NewsItem({description,title,url,imageUrl}) {
  const [imageSrc, setimageSrc] = useState(imageUrl)
    return (
      <div className='p-4 rounded-md flex flex-row justify-around border  shadow-lg'>
        <img className='aspect-square w-72 rounded-lg inline-block' src={imageSrc} alt={title} onError={()=>{setimageSrc(DEFAULT_IMAGE)}} />
        <div className='flex flex-col items-center w-[100vw] md:w-[40vw] px-4'>
          <h1 className='h-1/2 text-sm md:text-xl font-semibold hover:underline overflow-y-hidden'><a rel="noreferrer" href={url} target='_blank'>{title}...</a></h1>
          <p className='h-1/2 text-xs md:text-sm overflow-y-hidden'>{description}...</p>
        </div>
      </div>
    );
}
