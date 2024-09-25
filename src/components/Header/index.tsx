import styles from './Header.module.css'
import logo from '../../assets/Header/CircleIcon.png'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC= ()=>{

    useEffect(() => {
        // Código que você quer executar apenas uma vez
        console.log('Header montado');
    }, []);

    return(

        <header className={styles.container}>

            <Link className={styles.link} to='/'>
                <div className={styles.divTitle}>

                    <img 
                        src={logo}
                        alt="Icon Page" 
                        className={styles.icon}
                    />

                    <h1 className={styles.title}>IA - LIST</h1>

                </div>

                <div className={styles.divSubtitle}>
                    
                    <strong className={styles.subtitle}>Information about the most popular artificial intelligences</strong>

                </div>
            </Link>

        </header>
    )
}