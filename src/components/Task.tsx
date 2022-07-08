import { CheckCircle, Circle, Trash } from 'phosphor-react';

import styles from './Task.module.css';
import { ITask } from './TodoList';

interface ITaskProps{
  task: ITask,
  onToggleDone: (id: string)=>void,
  onDeleteTask: (id: string)=>void
}

export function Task({task, onToggleDone, onDeleteTask}: ITaskProps){

  function handleDeleteTask(){
    onDeleteTask(task.id);
  }

  function handleToggleDone(){
    onToggleDone(task.id);
  }

  const isDone = task.done;
  return(
    <div className={styles.task}>
      <button 
        className={isDone ? styles.checkedIcon : styles.uncheckedIcon}
        onClick={handleToggleDone}
      >
        {
          !isDone 
            ? <Circle className={styles.undone} size="1.5rem"/> 
            : <CheckCircle size="1.5rem" weight='fill'className={styles.done}/>
        }
      </button>
      <p className={isDone ? styles.taskDone : styles.taskUndone}>
        {task.description}
      </p>
      <button 
        className={styles.trash}><Trash size="1.1675rem" 
        onClick={handleDeleteTask}
      /></button>
    </div>
  )
}1