import { useState } from 'react';
import { PlusCircle } from 'phosphor-react';

import './global.css';

import styles from './App.module.css';
import rocketLogo from './assets/logo.svg'

function App() {

  return (
    <div className={styles.container}>
      <header>
        <img src={rocketLogo} className={styles.logo}/>
      </header>
      <main>
        <form className={styles.todoForm}>
          <input type="text" placeholder="Adicione uma nova tarefa" name="task"/>
          <button type="submit">Criar <PlusCircle size="1rem" weight="bold" /></button>
        </form>
        <div className={styles.todoList}>
            <div className={styles.todoListHeader}>
              <div className={styles.todoCounter}>
                  <strong>Tarefas criadas</strong>
                  <span>0</span>
              </div>
              <div className={styles.todoDone}>
                  <strong>Concluídas</strong>
                  <span>0</span>
              </div>
            </div>
        </div>
      </main>
    </div>
  )
}

export default App
