import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = 'https://api.giphy.com/v1/gifs/random?api_key=kgnCKEeI33GOlKfPSl775aJDF1osNa6n';

const Random = () => {
    
    const [gif, setgif] = useState('');
    const [loading, setloading]= useState('false');
async function fetchData(){
        setloading(true)
        const {data} = await axios.get(url);
        const imagesource = data.data.images.downsized_large.url;
        setgif(imagesource);
        setloading(false)
    }

useEffect(()=>{
    fetchData();
},[])
    

function clickHandeler(){
    fetchData();

}
  return (
    <div className='w-1/2 bg-green-300 flex flex-col justify-center items-center p-2 '>
    <h1 className='font-bold text-xl'> Random Gif </h1>
    {
    loading?(<Spinner/>):( <img src={gif} width="450"/> )
    }
    <button onClick={clickHandeler} className=' w-11/12 bg-slate-400 border-2 border-blue-600 rounded-lg mt-4'> Generate gif</button>


    </div>
  )
}
export default Random