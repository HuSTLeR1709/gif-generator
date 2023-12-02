import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';

const url = 'https://api.giphy.com/v1/gifs/random?api_key=kgnCKEeI33GOlKfPSl775aJDF1osNa6n';

 const Tag = () => {

    const [gif, setgif] = useState('');
    const [loading, setloading]= useState('false');
    const [tag, setTag] = useState('car');
async function fetchData(){
    setloading(true)
        const {data} = await axios.get(`${url}&tag=${tag}`);
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

function changeHandeler(event){
setTag(event.target.value);

}
  return (
    <div className='w-1/2 bg-yellow-300 flex flex-col justify-center items-center p-2 '>
    <h1 className='font-bold text-xl'> Random {tag} Gif </h1>
    {
    loading?(<Spinner/>):( <img src={gif} width="450"/> )
    }
    <input type='text' className='w-11/12 bg-white border-red-600 rounded-lg mt-4 text-center' onChange={changeHandeler} value={tag}></input>
    <button onClick={clickHandeler} className=' w-11/12 bg-slate-400 border-2 border-blue-600 rounded-lg mt-4'> Generate gif</button>


    </div>
  )
}

export default Tag
