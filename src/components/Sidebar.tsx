import { Pen } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" 
             />

            <div className={styles.profile}>
                <Avatar src = "https://avatars.githubusercontent.com/u/82630009?v=4"/>

                <strong>Emanuel Souza</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <Pen size='20' /> 
                    Edite seu perfil
                    </a>
            </footer>

        </aside>
    )
}