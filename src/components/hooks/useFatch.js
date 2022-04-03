import { useEffect, useState } from "react"

const useFetch = () =>{
    const [watchs,setWatchs] = useState([]);
    useEffect(() =>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setWatchs(data))
    },[])

    return [watchs,setWatchs]
}

export default useFetch;