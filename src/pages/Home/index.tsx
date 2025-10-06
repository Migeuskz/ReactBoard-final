import PhotosChart from '../../components/PhotosChart'
import PostCard from '../../components/PostsCard'
import './Home.css'

export default function Home() {
  return (
    <div className='homeContainer'>
      <h2>Home</h2>
      <div className="dasboardContainer">
        <div className='postContainer'>
          <PostCard/>
        </div>
        <div className='photosContainer'>
          <PhotosChart/>
        </div>
        <div className='usersContainer'></div>
        <div className='todosContainer'></div>
        <div className='commentsContainer'></div>
      </div>
    </div>
  )
}
