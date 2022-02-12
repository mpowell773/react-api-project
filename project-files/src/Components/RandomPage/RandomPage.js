import './RandomPage.css'
import {useEffect} from 'react'

const RandomPage = () => {

    useEffect (() => {
        getRandomComic()
    },[])

    const getRandomComic = () => {
        const url = 'https://xkcd.com/614/info.0.json'

        fetch(url)
            .then ((response) => response.json())
            .catch (() => console.log('no comics for you Sadge'))
    }


    return (
        <h3>Random</h3>
    )

} 

export default RandomPage;