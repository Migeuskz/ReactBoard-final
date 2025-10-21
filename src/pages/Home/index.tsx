import  { useUserData } from '../../hooks/useUserData'
import PhotosChart from '../../components/PhotosChart'
import PopularComments from '../../components/PopularComments'
import PostCard from '../../components/PostsCard'
import ToDosCard from '../../components/ToDosCard'
import UserCard from '../../components/UserCard'
import Spinner from '../../components/Spinner'
import { useToDosData } from '../../hooks/useToDosData'
import { useCommentsData } from '../../hooks/useCommentsData'
import './Home.css'

export default function Home() {

  const { data, loading, error } = useUserData();
  const { toDos, loadingToDos, errorToDos } = useToDosData();
  const { dataComments, loadingComments, errorComments } = useCommentsData();

  if(loading || loadingToDos || loadingComments) return <Spinner/>
  if(error || errorToDos || errorComments) return <p>{error || errorToDos}</p>

  const topCincoUsers = data.slice(0,5);
  const topCincoToDos =toDos.slice(0,3);
  const topDiezComments = dataComments.slice(0,10);

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
          <h2>Usuarios Destacados</h2>
          { topCincoUsers.map(user => {
            return <UserCard key={user.id} user={user}/>
          })}
        </div>
        <div className='todosContainer'>
          { topCincoToDos.map( toDo => {
            return <ToDosCard key={toDo.id} toDo={toDo} />
          })}
        </div>
        <div className='commentsContainer'>
          { topDiezComments.map( comment => {
            return <PopularComments key={comment.id} comments={comment}/>
          })}
        </div>
      </div>
    </div>
  )
}
