import './global.css';

import styles from './App.module.css';
import rocketLogo from './assets/logo.svg'
import { TodoList } from './components/TodoList';

function App() {

  return (
    <div className={styles.container}>
      <header>
        <img src={rocketLogo} className={styles.logo}/>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  )
}

export default App
