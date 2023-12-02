import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const url = 'https://api.giphy.com/v1/gifs/random?api_key=kgnCKEeI33GOlKfPSl775aJDF1osNa6n';

const useGif = (tag) => {
    const [gif, setgif] = useState('');
    const [loading, setloading]= useState('false');
async function fetchData(tag){
    setloading(true)
        const {data} = await axios.get(tag?`${url}&tag=${tag}` :url);
        const imagesource = data.data.images.downsized_large.url;
        setgif(imagesource);
        setloading(false)
    }

useEffect(()=>{
    fetchData('car');
},[])

    return {gif, loading, fetchData};
}

export default useGif
