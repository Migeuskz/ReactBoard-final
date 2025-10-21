import type { ToDo } from '../../types/todos'
import './ToDosCard.css'

type ToDoCardProps = {
  toDo: ToDo;
}

export default function ToDosCard( { toDo }: ToDoCardProps ) {
  return (
    <div className='toDo-container'>
      <h3>{toDo.title}</h3>
      <p className='todoCheck'>{toDo.completed ? <span className='check_good'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>
      </span> : <span className='todo-worng'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg></span>}</p>
      <p className='todo-user'>Usuario: {toDo.userName}</p>
      {/* <p><strong>{}</strong></p> */}
    </div>
  )
}
