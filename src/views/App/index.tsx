import React , {useEffect} from 'react';
import styles from './index.module.scss'
import { useToDoStore } from '../../data/stores/useToDoStore';
import { Input } from '../components/Input'

export const App: React.FC = () => {

    const [
        tasks,
        createTask,
        updateTask,
        removeTask
    ] = useToDoStore(state => [
        state.tasks,
        state.createTask,
        state.updateTask,
        state.removeTask
    ])


    
    return (
        <article className={styles.article}>
            <h1 className={styles.articleTitle}>To Do App</h1>
            <section className={styles.articleSection}>
                <Input onAdd={(title)=> {
                    if(title) {
                        createTask(title)
                    }
                }} />
            </section>
            <section className={styles.articleSection}>
                {!tasks.length && (
                    <p className={styles.articleText}>There is no one task.</p>
                )}
            </section>
        </article>
    )
}