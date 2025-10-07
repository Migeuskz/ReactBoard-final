import PhotosChart from '../../components/PhotosChart'
import PopularComments from '../../components/PopularComments'
import PostCard from '../../components/PostsCard'
import ToDosCard from '../../components/ToDosCard'
import UserCard from '../../components/UserCard'
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
        <div className='usersContainer'>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
        </div>
        <div className='todosContainer'>
          <ToDosCard/>
          <ToDosCard/>
          <ToDosCard/>
        </div>
        <div className='commentsContainer'>
          <PopularComments/>
        </div>
      </div>
    </div>
  )
}
