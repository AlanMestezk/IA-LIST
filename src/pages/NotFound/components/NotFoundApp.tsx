
import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'
import imgNotFound from '../../../assets/NotFound/NotFound.jpg'

export const NotFoundApp: React.FC = ()=>{

    return(
        <main className={styles.container}> 
            
            <img 
                src={imgNotFound} 
                alt="Error 404" 
                className={styles.img}
            />

            <Link to='/' className={styles.button}>Back to home</Link>

        </main>
    )
}