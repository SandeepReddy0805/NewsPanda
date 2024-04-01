import NewsTopic from "./NewsTopic"

const MainContent = () => {
    return (
      <div className='w-full md:w-11/12 mx-auto min-h-screen rounded-md'>
        <NewsTopic topic='Top Headlines' url={'https://newsapi.org/v2/top-headlines?country=in&apiKey=1d4762be4c954da5893402ccf2200c18'}/>
        <NewsTopic topic='Business' url={'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1d4762be4c954da5893402ccf2200c18'}/>
        <NewsTopic topic='Sports' url={'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1d4762be4c954da5893402ccf2200c18'}/>
        <NewsTopic topic='Entertainment' url={'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=1d4762be4c954da5893402ccf2200c18'}/>
      </div>
    )
  };
  export default MainContent;
