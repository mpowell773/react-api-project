import './RandomPage.css'
import {useEffect, useState} from 'react'

const RandomPage = () => {
    const [comic, setComic] = useState({});

    useEffect (() => {
      //getRandomComic()
    },[])


    //API Request
    const getRandomComic = () => {
        const url = 'https://xkcd.now.sh?comic=latest'

        fetch(url)
            .then ((response) => response.json())
            .then ((data) => setComic(data))
            .catch (() => console.log('no comics for you Sadge'))
    }

    return (
        <h3>Random</h3>
    )

} 

export default RandomPage;