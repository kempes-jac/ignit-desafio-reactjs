import styles from './EmptyFrame.module.css';
import { Clipboard, ClipboardText } from 'phosphor-react'

export function EmptyFrame(){
  return (
    <div className={styles.emptyFrame}>
      <ClipboardText size="54" className={styles.icon} />
      <p className={styles.warning}>Você ainda não tem tarefas cadastradas</p>
      <p className={styles.message}>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}