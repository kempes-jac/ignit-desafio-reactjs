import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

import styles from './TaskForm.module.css';

interface ITaskFormProps{
  onCreateTask: (description: string) => void
}

export function TaskForm({onCreateTask}:ITaskFormProps){

  const [ newDescription, setNewDescription ] = useState<string>('');

  function onSubmit(event: FormEvent){
    event.preventDefault();
    onCreateTask(newDescription);
    setNewDescription('');
  }

  function handleNewDescriptionChange(event: ChangeEvent<HTMLInputElement>){
    setNewDescription(event.target.value);
  }

  return (
    <form className={styles.taskForm} onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa" 
        name="task"
        value={newDescription}
        onChange={handleNewDescriptionChange}
      />
      <button type="submit" disabled={newDescription.length===0}>
        Criar <PlusCircle size="1rem" weight="bold" />
      </button>
    </form>
  );
}