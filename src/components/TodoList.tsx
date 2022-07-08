import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { EmptyFrame } from './EmptyFrame';
import { Task } from './Task';
import { TaskForm } from './TaskForm';
import styles from './TodoList.module.css';

export interface ITask{
  id: string;
  description: string;
  done: boolean;
}


export function TodoList(){

  const [itemsCount, setItemsCount] = useState<number>(0);
  const [itemsDoneCount, setItemsDoneCount] = useState<number>(0);
  const [tasks, setTasks] = useState<ITask[]>([]);

  const createTask = (taskDescription: string) => {
    const newTask: ITask = {
      id: uuid(),
      description: taskDescription,
      done: false
    };

    const newTasks = [...tasks];
    newTasks.push(newTask);
    setItemsCount(newTasks.length);
    setTasks(newTasks);
  }

  const deleteTask = (taskID: string) => {
    const newTasks = tasks.filter( (task) => task.id !== taskID );
    setItemsCount(newTasks.length);
    const newDoneTasks = newTasks.filter( (task) => task.done ).length;
    setItemsDoneCount(newDoneTasks);    
    setTasks(newTasks);
  }

  const toggleTaskDone = (taskID: string) => {
    const newTasks = [...tasks];
    const task = newTasks.filter( (task) => task.id === taskID )[0];
    const taskIndex = newTasks.indexOf( task );
    task.done = !task.done;
    newTasks[taskIndex]=task;
    const newDoneTasks = newTasks.filter( (task) => task.done ).length;
    setItemsDoneCount(newDoneTasks);    
    setTasks(newTasks);
  }

  const isEmpty = itemsCount===0;
  return (
    <div>
      <TaskForm onCreateTask={createTask}/>
      <div className={styles.todoList}>
          
          <div className={styles.todoListHeader}>
            <div className={styles.todoListCounter}>
                <strong>Tarefas criadas</strong>
                <span>{itemsCount}</span>
            </div>
            <div className={styles.todoListDone}>
                <strong>Concluídas</strong>
                <span>
                  {itemsCount===0 ? 0 : `${itemsDoneCount} de ${itemsCount}`}
                </span>
            </div>
          </div>
          <div className={isEmpty ? styles.emptyContent : styles.content }>
            {
              isEmpty 
                ? <EmptyFrame /> 
                : tasks.map( (task) => <Task 
                    key={task.id}
                    task={task} 
                    onDeleteTask={deleteTask}
                    onToggleDone={toggleTaskDone}
                  /> )
            }
          </div>
      </div>
    </div>
        

  );
}