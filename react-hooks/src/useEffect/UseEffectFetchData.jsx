import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function UseEffectFetchData() {
    const [posts, setPosts] = useState({});
    const [selectedId, setId] = useState(null);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/'+selectedId)
            .then(res => {
                console.log(res);
                setPosts(res.data);
            })
            .catch(err=> {
                console.log(err);
            });
    }, [selectedId]);


  return (
    <div>
      <input onChange={(e)=>setId(e.target.value)}></input>
        <daiv>{posts.title}</daiv>
    </div>
  )
}
