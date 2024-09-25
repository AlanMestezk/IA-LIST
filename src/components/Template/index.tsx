import { Link } from 'react-router-dom';
import styles   from './TemplateStyles.module.css'
import ReactPlayer from 'react-player';


interface TemplateProps{

    about : string
    name  : string
    link  : string
    img   : string
    url  ?: string
}

export const Template:React.FC<TemplateProps> = ({name, img, about, link, url})=>{

    return(
        <main className={styles.container}>

            <section className={styles.sectionTitle}> 

                <strong className={styles.titleName}>{name}</strong>

                <img 
                    src={img}
                    alt="Image IA"
                    className={styles.imgIa}
                />

            </section>


            <section className={styles.sectionAbout}> 

                <p>{about}</p>

                <div className={styles.divVideo}>

                    <ReactPlayer
                        className={styles.video}
                        url={url}
                        width='80%'
                        height='80%'
                        controls
                        playing
                        muted
                    />

                </div>

            </section>

            <section className={styles.sectionButton}>

                <Link className={styles.button} to='/'>
                    <strong>Back to home</strong>
                </Link>
                <Link className={styles.button} to={link}>
                    <strong>{name}</strong>
                </Link>

            </section>

        </main>
    )
}