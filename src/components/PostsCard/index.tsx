// import { usePostData } from '../../hooks/usePostsData'
// import Spinner from '../Spinner'
import { useEffect, useState } from 'react'
import './PostsCard.css'

export default function PostCard() {
  // const { data,  loading, error} = usePostData();

  // if(loading) return <Spinner/>
  // if(error) return <p>{error}</p> 
  const [ posts, setPosts]  = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        if(!res.ok) throw new Error("Error al obtener los posts");
        const data = await res.json();
        return data.length;
      } catch (error) {
        console.error("Ocurrió un error: " + error);        
      }
    };
    fetchPosts().then(data => setPosts(data));
  },[]);
 

  // setPosts(500)
  
  return (
    <div className="postCardContainer">
      <h3>Total posts:</h3>
      <p>{posts} posts</p>
      {/* <p>{data.length} posts</p> */}
    </div>
  )
}
