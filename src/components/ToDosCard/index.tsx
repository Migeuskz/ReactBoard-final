import type { ToDo } from '../../types/todos'
import './ToDosCard.css'

type ToDoCardProps = {
  toDo: ToDo;
}

export default function ToDosCard( { toDo }: ToDoCardProps ) {
  return (
    <div className='toDo-container'>
      <h3>{toDo.title}</h3>
    </div>
  )
}
