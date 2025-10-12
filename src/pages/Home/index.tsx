import  { useUserData } from '../../hooks/useUserData'
import PhotosChart from '../../components/PhotosChart'
import PopularComments from '../../components/PopularComments'
import PostCard from '../../components/PostsCard'
import ToDosCard from '../../components/ToDosCard'
import UserCard from '../../components/UserCard'
import Spinner from '../../components/Spinner'
import './Home.css'

export default function Home() {

  const { data, loading, error } = useUserData();

  if(loading) return <Spinner/>
  if(error) return <p>{error}</p>

  const topCincoUsers = data.slice(0,5);

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
          <p>Usuarios Destacados</p>
          { topCincoUsers.map(user => {
            return <UserCard key={user.id} user={user}/>
          })}
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
